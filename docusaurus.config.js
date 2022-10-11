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
          blogTitle: "Development blog",
          blogDescription:
            "A blog to share all tips & tricks and latest changes to our products!",
          postsPerPage: "ALL",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        googleAnalytics: {
          trackingID: "G-D3JLG644B2",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "G-D3JLG644B2",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
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
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          //{
          //  type: 'localeDropdown',
          //  position: 'right',
          //},
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Read",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
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
                label: "Our Website",
                href: "https://www.bonusbank.eu",
              },
              {
                label: "Play Store",
                href: "https://play.google.com/store/apps/details?id=com.bonusbank.bonusbank_app",
              },
              {
                label: "App Store",
                href: "https://apps.apple.com/us/app/bonusbank/id1578469644",
              },
              {
                label: "Management Portal",
                href: "https://dash.bonusbank.eu",
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
          alt: "BonusBank Logo",
          src: "img/logo-long.svg",
          href: "https://www.bonusbank.eu",
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
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 3,

        // whether to index blog pages
        indexBlog: true,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: true,

        // language of your documentation, see next section
        language: ["en", "es", "nl"],

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 8,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
  ],
};

module.exports = config;
