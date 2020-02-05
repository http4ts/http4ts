import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Server as a Function</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Model your server application as a single function; Based on the Twitter
        paper{" "}
        <a href="https://monkey.org/~marius/funsrv.pdf">
          Your Server as a Function
        </a>{" "}
        and inspired by the fantastic{" "}
        <a href="https://github.com/http4k/http4k/">http4k</a> library.
      </>
    )
  },
  {
    title: <>Runtime Independence</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        The core library does not have any dependency on the Node.js
        environment. It should be possible to use it for both Node.js and Deno.
        Node.js bindings are available out of the box.
      </>
    )
  },
  {
    title: <>Symmetric</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Symmetric interfaces for the HTTP client and HTTP server. It is possible
        to reuse the same <code>HttpHandler</code> interface and all the filters
        on both server- and client-side. There is an <code>HttpClient</code>{" "}
        functionality available in the library which follows the{" "}
        <code>fetch</code> interface and is independent of any runtime.
      </>
    )
  },
  {
    title: <>Type Safety</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: <>built using the maximum type safety power of TypeScript</>
  },
  {
    title: <>Immutability</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        all entities in the library are immutable unless, naturally, it is not
        possible.
      </>
    )
  },
  {
    title: <>Testability</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        The basic building blocks of this library are functions and the main
        entities are abstracted from the environment, it is extremely simple to
        write tests for the code built by http4ts.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/doc1")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
