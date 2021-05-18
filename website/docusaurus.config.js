/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "http4ts",
  tagline: "Server as a Function http toolkit for TypeScript & JavaScript",
  url: "https://http4ts.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "http4ts", // Usually your GitHub org/user name.
  projectName: "http4ts", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "http4ts",
      logo: {
        alt: "http4ts Logo",
        src: "img/http4ts-logo.png"
      },
      items: [
        {
          to: "docs/welcome/getting-started",
          label: "Docs",
          position: "left"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/http4ts/http4ts",
          // label: "GitHub",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/welcome/getting-started"
            },
            {
              label: "Philosophy",
              to: "docs/welcome/philosophy"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/http4ts/http4ts"
            }
          ]
        },
        {
          title: "Copyright",
          items: [
            {
              label: "This site uses FontAwesome",
              href: "https://fontawesome.com/license"
            }
          ]
        }
      ],
      copyright: `Built with Docusaurus.`
    },
    algolia: {
      apiKey: "2ee35b60276202f17f282561edf77f0a",
      indexName: "http4ts",
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/http4ts/http4ts/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/http4ts/http4ts/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
