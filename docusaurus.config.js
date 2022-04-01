// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '黏液科技繁體中文版',
  tagline: '由興趣推動翻譯的團隊',
  url: 'https://slimetraditionaltranslation.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SlimeTraditionalTranslation',
  projectName: 'slimetraditionaltranslation.github.io',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/SlimeTraditionalTranslation/SlimeTraditionalTranslation.github.io',
          // showLastUpdateAuthor: false,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '黏液科技繁體版',
        logo: {
          alt: 'SlimetradiTionalTranslation Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Home',
            position: 'left',
            label: '維基',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SlimeTraditionalTranslation/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: '黏液科技維基',
                to: '/docs/Slimefun',
              },
              {
                label: '黏液附加維基',
                to: '/docs/Slimefun',
              },
            ],
          },
          {
            title: 'Discord 社群',
            items: [
              {
                label: '繁體中文版',
                href: 'https://discord.gg/GF4CwjFXT9',
              },
              {
                label: '黏液科技官方',
                href: 'https://discord.gg/slimefun',
              },
              {
                label: '黏液科技官方附加社群',
                href: 'https://discord.gg/SqD3gg5SAU',
              },
            ],
          },
          {
            title: '更多資訊',
            items: [
              {
                label: '關於我們',
                href: '/docs/stct-team/AboutUS/tw',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SlimeTraditionalTranslation/',
              },
            ],
          },
        ],
        copyright: `Translate by SlimeTraditionalTranslation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      // announcementBar: {
      //   id: 'helpus_translate',
      //   content: '請幫助我們完成翻譯!',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // }
    }),
};

module.exports = config;
