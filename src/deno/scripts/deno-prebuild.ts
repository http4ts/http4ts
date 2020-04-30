// Originally from https://s.luvies.io/node_prebuild.ts
import { parse, relative, resolve } from "../imports.ts";
/*
  Transforms the content all files in a directory to remove `.ts` from
  the end of imports.
*/

const { args, exit, mkdir, readDir, readFile, remove, stat, writeFile } = Deno;

const newRegexp = /(import|export) ([^.]*) from "(.*)"/gm;

async function scanFiles(dir: string, ignore: string[]) {
  const promises: Array<Promise<Array<[string, string]>>> = [];

  const files = readDir(dir);
  for await (const file of files) {
    promises.push(
      (async (): Promise<Array<[string, string]>> => {
        const path = resolve(dir, file.name);
        if (!ignore.includes(path)) {
          if (file.isFile) {
            return [[dir, path]];
          } else if (file.isDirectory) {
            return scanFiles(path, ignore);
          }
        }
        return [];
      })()
    );
  }

  const result = await Promise.all(promises);
  return result.reduce((prev, curr) => prev.concat(curr), []);
}

async function main() {
  const opts = parse(args, {
    string: ["in", "out", "ignore"],
    boolean: ["h", "help"]
  });

  let inDir: string | undefined = opts.in;
  let outDir: string | undefined = opts.out;
  const ignoreFiles = ((opts.ignore as string) || "")
    .split(",")
    .map(ignore => resolve(ignore));
  const help: boolean | undefined = opts["h"] || opts["help"];

  if (help || !inDir || !outDir) {
    let code = 0;

    console.log("Converts node imports to deno ones");
    console.log();
    console.log("\t--in {directory}\tThe input directory to prebuild");
    console.log(
      "\t--out {directory}\tThe directory to write the resulting files to"
    );
    console.log(
      "\t--ignore {directory}\tA comma separated list of files/folders to ignore"
    );
    console.log("\t-h --help\t\tOutputs this help message");

    if (!help) {
      if (!inDir) {
        console.log();
        console.log("Error: --in must be given");
        code = 1;
      } else if (!outDir) {
        console.log();
        console.log("Error: --out must be given");
        code = 1;
      }
    }

    exit(code);
    return;
  }

  inDir = resolve(inDir);
  outDir = resolve(outDir);

  if (inDir == null || outDir == null) {
    throw new Error("inDir or outDir are null");
  }

  try {
    const st = await stat(inDir);
    if (!st.isDirectory) {
      throw new Error("--in was not a directory");
    }
  } catch (err) {
    console.error(err.message);
    exit(1);
    return;
  }

  await mkdir(outDir, { recursive: true });
  for await (const found of readDir(outDir)) {
    remove(resolve(outDir, found.name), { recursive: true });
  }

  const files = await scanFiles(inDir, ignoreFiles);
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const promises: Array<Promise<void>> = [];
  for (const [idir, ifile] of files) {
    promises.push(
      (async () => {
        const odir = resolve(opts.out, relative(opts.in, idir));
        const ofile = resolve(opts.out, relative(opts.in, ifile));

        const read = await readFile(ifile);
        let contents = decoder.decode(read);
        contents = contents.replace(newRegexp, `$1 $2 from "$3.ts"`);
        // if (ifile.endsWith("mod.ts")) {
        //   console.log(contents);
        // }

        await mkdir(odir, { recursive: true });
        const toWrite = encoder.encode(contents);
        await writeFile(ofile, toWrite);
      })()
    );
  }

  await Promise.all(promises);
  console.log(`Prebuilt ${files.length} files to ${outDir}`);
}

await main();
