import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Runtime Independence</>,
    // imageUrl: "img/runtimes.png",
    description: (
      <>
        Ready to to be used in both <a href="https://nodejs.org/">Node.js</a> and{" "}
        <a href="https://deno.land/">Deno</a> runtimes.
        <br />
        <a href="/docs/welcome/runtime-independence">Learn more.</a>
      </>
    )
  },
  {
    title: <>Server as a Function</>,
    // imageUrl: "img/functional.png",
    description: (
      <>
        Model your server as a single function.
        <br />
        <a href="/docs/welcome/core-concepts">Learn more.</a>
      </>
    )
  },
  {
    title: <>Symmetric</>,
    // imageUrl: "img/balance-scale-solid.svg",
    description: (
      <>
        Symmetric interfaces for the HTTP client and HTTP server.
        <br />
        <a href="/docs/welcome/symmetry">Learn more.</a>
      </>
    )
  },
  {
    title: <>Type Safety</>,
    // imageUrl: "img/bullhorn-solid.svg",
    description: <>Built using the maximum type safety power of TypeScript.</>
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--3", styles.feature)}>
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
      title={`${siteConfig.title}`}
      description="Server as a Function http toolkit for TypeScript & JavaScript"
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
              to={useBaseUrl("docs/welcome/getting-started")}
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
