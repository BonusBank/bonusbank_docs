// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation Portal",
  tagline: "Documentation site about all BonusBank's apps",
  url: "https://docs.bonusbank.eu",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BonusBank", // Usually your GitHub org/user name.
  projectName: "bonusbank_docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ca", "nl"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BonusBank/bonusbank_docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BonusBank/bonusbank_docs/blob/main/",
          blogTitle: 'Development blog',
          blogDescription: 'A blog to share all tips & tricks and latest changes to our products!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation Portal",
        logo: {
          alt: "BonusBank Logo",
          src: "img/logo.svg",
          href: "https://www.bonusbank.eu",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          //{
          //  type: 'localeDropdown',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Linked In",
                href: "https://www.linkedin.com/company/bonusbank",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/bonusbankeu",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UC72vtE2koDzXNq1Lh2Kd6Xg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/BonusBank/bonusbank_docs/",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Legal Notice",
                href: "https://www.bonusbank.eu/legal-notice/",
              },
              {
                label: "Cookies Policy",
                href: "https://www.bonusbank.eu/cookies-policy/",
              },
              {
                label: "Terms & Conditions",
                href: "https://www.bonusbank.eu/terms-conditions/",
              },
              {
                label: "Privacy Policy",
                href: "https://www.bonusbank.eu/privacy-policy/",
              },
            ],
          },
        ],
        logo: {
          alt: 'BonusBank Logo',
          src: 'img/logo-long.svg',
          href: 'https://www.bonusbank.eu',
          width: 200,
          height: 75,
        },
        copyright: `Copyright © ${new Date().getFullYear()} BonusBank, BB INCENTIVES TOKENIZATION S.L.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
