/* eslint-disable @typescript-eslint/no-use-before-define */
// This code is extracted from path-to-regexp library (https://github.com/pillarjs/path-to-regexp)

/**
 * Default configs.
 */
const DEFAULT_DELIMITER = "/";

/**
 * The main path matching regexp utility.
 */
const PATH_REGEXP = new RegExp(
  [
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)",
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
  ].join("|"),
  "g"
);

/**
 * Escape the capturing group by escaping special characters and meaning.
 */
function escapeGroup(group: string): string {
  return group.replace(/([=!:$/()])/g, "\\$1");
}

/**
 * Escape a regular expression string.
 */
function escapeString(str: string) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}

interface RegExpOptions {
  /**
   * When `true` the regexp will be case sensitive. (default: `false`)
   */
  sensitive?: boolean;
  /**
   * When `true` the regexp allows an optional trailing delimiter to match. (default: `false`)
   */
  strict?: boolean;
  /**
   * When `true` the regexp will match to the end of the string. (default: `true`)
   */
  end?: boolean;
  /**
   * When `true` the regexp will match from the beginning of the string. (default: `true`)
   */
  start?: boolean;
  /**
   * Sets the final character for non-ending optimistic matches. (default: `/`)
   */
  delimiter?: string;
  /**
   * List of characters that can also be "end" characters.
   */
  endsWith?: string | string[];
  /**
   * List of characters to consider delimiters when parsing. (default: `undefined`, any character)
   */
  whitelist?: string | string[];
}

type Token = string | TokenInfo;

interface TokenInfo {
  name: string | number;
  prefix: string;
  delimiter: string;
  optional: boolean;
  repeat: boolean;
  pattern: string;
}

/**
 * Parse a string for the raw tokens.
 */
function parse(str: string, options: RegExpOptions): Token[] {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = "";
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
  var whitelist = (options && options.whitelist) || undefined;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }

    var prev = "";
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;
      var c = path[k];
      var matches = whitelist ? whitelist.indexOf(c) > -1 : true;

      if (matches) {
        prev = c;
        path = path.slice(0, k);
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = "";
      pathEscaped = false;
    }

    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var pattern = capture || group;
    var delimiter = prev || defaultDelimiter;

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: pattern
        ? escapeGroup(pattern)
        : "[^" +
          escapeString(
            delimiter === defaultDelimiter
              ? delimiter
              : delimiter + defaultDelimiter
          ) +
          "]+?"
    });
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens;
}

interface TokensToFunctionOptions {
  /**
   * When `true` the regexp will be case sensitive. (default: `false`)
   */
  sensitive?: boolean;
}

/**
 * Get the flags for a regexp from the options.
 */
function flags(options: TokensToFunctionOptions): string {
  return options && options.sensitive ? "" : "i";
}

export interface Key {
  name: string | number;
  prefix: string | null;
  delimiter: string | null;
  optional: boolean;
  repeat: boolean;
  pattern: string | null;
}

interface ParseOptions {
  /**
   * Set the default delimiter for repeat parameters. (default: `'/'`)
   */
  delimiter?: string;
}

/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path: RegExp, keys: Key[] | undefined): RegExp {
  if (!keys) return path;

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      });
    }
  }

  return path;
}

/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(
  path: (string | RegExp)[],
  keys: Key[] | undefined,
  options: RegExpOptions & ParseOptions
): RegExp {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp(
  path: string,
  keys: Key[] | undefined,
  options: RegExpOptions & ParseOptions
) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegExp(
  tokens: Token[],
  keys: Key[] | undefined,
  options: RegExpOptions & ParseOptions
): RegExp {
  options = options || {};

  var strict = options.strict;
  var start = options.start !== false;
  var end = options.end !== false;
  var delimiter = options.delimiter || DEFAULT_DELIMITER;
  var endsWith = ([] as string[])
    .concat(options.endsWith || [])
    .map(escapeString)
    .concat("$")
    .join("|");
  var route = start ? "^" : "";

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var capture = token.repeat
        ? "(?:" +
          token.pattern +
          ")(?:" +
          escapeString(token.delimiter) +
          "(?:" +
          token.pattern +
          "))*"
        : token.pattern;

      if (keys) keys.push(token);

      if (token.optional) {
        if (!token.prefix) {
          route += "(" + capture + ")?";
        } else {
          route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
        }
      } else {
        route += escapeString(token.prefix) + "(" + capture + ")";
      }
    }
  }

  if (end) {
    if (!strict) route += "(?:" + escapeString(delimiter) + ")?";

    route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited =
      typeof endToken === "string"
        ? endToken[endToken.length - 1] === delimiter
        : endToken === undefined;

    if (!strict)
      route += "(?:" + escapeString(delimiter) + "(?=" + endsWith + "))?";
    if (!isEndDelimited)
      route += "(?=" + escapeString(delimiter) + "|" + endsWith + ")";
  }

  return new RegExp(route, flags(options));
}

type Path = string | RegExp | (string | RegExp)[];

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
export function pathToRegexp(
  path: Path,
  keys: Key[] | undefined = undefined,
  options: RegExpOptions & ParseOptions = {}
): RegExp {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ path, keys, options);
  }

  return stringToRegexp(/** @type {string} */ path, keys, options);
}
