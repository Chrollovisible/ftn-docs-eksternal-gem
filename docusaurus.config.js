// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flagshiiip Docs',
  tagline: 'Where Loyalty Becomes an Asset',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Ganti saat sudah tahu tempat hosting
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // Isi saat repo GitHub sudah ada
  organizationName: 'Chrollovisible',
  projectName: 'ftn-docs-eksternal-gem',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      id: { label: 'Indonesia', htmlLang: 'id-ID' },
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/favicon-32x32.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Flagshiiip',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentasi',
          },
          {
            to: '/docs/panduan-pengguna/install-aplikasi',
            label: 'Panduan Pengguna',
            position: 'left',
          },
          {
            to: '/docs/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://flagshiiip.com',
            label: 'flagshiiip.com',
            position: 'right',
          },
          {
            href: 'https://flagshiiip.io',
            label: 'flagshiiip.io',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {
                label: 'Pengenalan',
                to: '/docs/pengenalan/apa-itu-flagshiiip',
              },
              {
                label: 'Panduan Pengguna',
                to: '/docs/panduan-pengguna/install-aplikasi',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Flagshiiip',
            items: [
              {
                label: 'flagshiiip.com',
                href: 'https://flagshiiip.com',
              },
              {
                label: 'flagshiiip.io',
                href: 'https://flagshiiip.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PT BMG Capital Technology.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;