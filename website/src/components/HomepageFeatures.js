import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
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

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
