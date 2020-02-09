module.exports = {
  title: "http4ts",
  tagline: "Server as a Function http toolkit for TypeScript & JavaScript",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "http4ts", // Usually your GitHub org/user name.
  projectName: "http4ts", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "http4ts",
      logo: {
        alt: "http4ts Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/getting-started", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/http4ts/http4ts",
          label: "GitHub",
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
              to: "docs/getting-started"
            },
            {
              label: "Philosophy",
              to: "docs/philosophy"
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
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
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
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
