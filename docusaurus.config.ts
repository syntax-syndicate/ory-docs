// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

import lightTheme from "./src/utils/prismLight.mjs"
import darkTheme from "./src/utils/prismDark.mjs"

const config: Config = {
  customFields: {
    CLOUD_URL: process.env.CLOUD_URL || "https://api.console.ory:8080",
  },
  title: "Ory",
  tagline: "Open Source Identity and Access Infrastructure",
  url: `https://www.ory.sh`,
  baseUrl: "/docs/",
  favicon: "img/favico.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  organizationName: "ory",
  projectName: "docs",
  markdown: {
    format: "detect",
  },
  staticDirectories: ["src/static"],
  themeConfig: {
    respectPrefersColorScheme: true,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    prism: {
      darkTheme: darkTheme,
      theme: lightTheme,
      additionalLanguages: [
        "powershell",
        "json",
        "json5",
        "pug",
        "shell-session",
        "bash",
        "tsx",
        "markup-templating",
        "php",
        "yaml",
        "dart",
        "csharp",
        "cshtml",
        "diff",
      ],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-delete-line",
          line: "delete-next-line",
          block: { start: "delete-lines-start", end: "delete-lines-end" },
        },
        {
          className: "code-block-add-line",
          line: "add-next-line",
          block: { start: "add-lines-start", end: "add-lines-end" },
        },
        {
          className: "copyright-2022-ory-corp",
          line: "Copyright © 2022 Ory Corp",
        },
        {
          className: "copyright-2023-ory-corp",
          line: "Copyright © 2023 Ory Corp",
        },
        {
          className: "spdx-license-identifier",
          line: "SPDX-License-Identifier: Apache-2.0",
        },
      ],
    } satisfies Preset.ThemeConfig["prism"],
    algolia: {
      appId: "V2EFIWEJ25",
      apiKey: "dc6b220f7d2bcd12da60b9cce431d8c5",
      indexName: "ory",
      contextualSearch: true,
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: "Ory",
        src: `/docs/img/logos/logo-docs-2023-02-15.svg`,
        srcDark: `/docs/img/logos/logo-docs-dark-2023-02-15.svg`,
        href: `https://www.ory.sh`,
        width: 63,
        height: 32,
      },
      items: [
        // Main feature sections
        {
          to: "/getting-started/overview",
          label: "Start",
          position: "left",
        },
        {
          to: "/docs/identity",
          label: "Identity",
          position: "left",
        },
        {
          to: "/docs/permissions",
          label: "Permissions",
          position: "left",
        },
        {
          to: "/docs/federation",
          label: "Federation",
          position: "left",
        },
        {
          to: "/docs/open-source",
          label: "Open Source",
          position: "left",
        },
        {
          to: "/docs/reference",
          label: "Reference",
          position: "left",
        },
        {
          label: "Need Support?",
          position: "right",
          items: [
            {
              to: "https://www.ory.sh/support",
              label: "Enterprise Support",
            },
            {
              to: "https://www.ory.sh/docs/search",
              label: "Search the docs",
            },
            {
              to: "https://www.ory.sh/chat",
              label: "Ory Community Slack",
            },
            {
              to: "https://github.com/orgs/ory/discussions",
              label: "GitHub Discussions",
            },
            {
              to: "https://stackoverflow.com/questions/tagged/ory",
              label: "Stack Overflow",
            },
            {
              to: "https://www.ory.sh/contact",
              label: "Schedule a discovery call",
            },
          ],
        },

        {
          href: `https://github.com/ory`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Ory Corp`,
      links: [
        {
          label: "Need Support?",
          href: "https://www.ory.sh/support/",
        },
        {
          label: "Search",
          href: "https://www.ory.sh/docs/search/",
        },
        {
          label: "Status",
          href: "https://status.ory.sh/",
        },
        {
          label: "Privacy",
          href: "https://www.ory.sh/privacy",
        },
        {
          label: "Imprint",
          href: "https://www.ory.sh/imprint",
        },
        {
          label: "Terms of Service",
          href: "https://www.ory.sh/tos",
        },
        {
          label: "Schedule a discovery call",
          href: "https://www.ory.sh/contact/",
        },
        {
          html: `<a class="ory-consent-manager footer__link-item" href="#">Consent Preferences</a>`,
        },
      ] satisfies Preset.ThemeConfig["footer"]["links"],
      logo: {
        alt: "Ory logo in white",
        src: "/docs/img/logos/logo-ory-white-2022-11-04.svg",
        href: "https://www.ory.sh/",
        height: 80,
        width: 130.7,
      },
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    // Not very useful and ruins page speed.
    //
    // [
    //   "docusaurus-pushfeedback",
    //   {
    //     project: "7bhe9sxlqg",
    //     buttonPosition: "center-right",
    //   },
    // ],
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "docs",
        sidebarPath: require.resolve("./src/sidebar.ts"),
        editUrl: `https://github.com/ory/docs/edit/master`,
        // editCurrentVersion: false,
        routeBasePath: "/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        disableVersioning: false,
        include: ["**/*.md", "**/*.mdx", "**/*.jsx", "**/*.tsx"],
        docRootComponent: "@theme/DocRoot",
      },
    ],
    "@docusaurus/plugin-content-pages",
    require.resolve("./src/plugins/docusaurus-polyfill"),
    // require.resolve("./src/plugins/docusaurus-static-fonts"),
    "@docusaurus/plugin-sitemap",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // {
          // from: ['/','/docs','/docs/'],
          // to: '/docs/welcome'
          // }
        ],
      },
    ],
    [
      "@docusaurus/plugin-svgr",
      {
        svgrConfig: {},
      },
    ],
  ],
  presets: [
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "ory-network-api",
            spec: "docs/reference/api.json",
          },
        ],
        theme: {},
      },
    ],
  ],
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: [require.resolve("./src/css/theme.css")],
      },
    ],
    "@docusaurus/theme-search-algolia",
    "docusaurus-theme-redoc",
  ],
  headTags: [
    // add css to the head
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        type: "text/css",
        href: "/docs/fonts/fonts.css",
      },
    },
    ...[
      "InterVariable.woff2?v=4.0",
      "JetBrainsMono-Regular.woff2",
      "JetBrainsMono-Italic.woff2",
    ].map((font: string) => ({
      tagName: "link",
      attributes: {
        rel: "preload",
        type: "font/woff2",
        as: "font",
        crossOrigin: "anonymous",
        href: `/docs/fonts/${font.includes("Inter") ? "Inter" : "JetBrainsMono"}/${font}`,
      },
    })),
  ],
  scripts: [
    // Needed as a workaround for https://answers.netlify.com/t/trailing-slash-missing-on-proxied-netlify-site/36367
    {
      src: "/docs/scripts/redirect.js",
      async: true,
    },
    {
      src: "https://ory.sh/cmp/init.js",
      async: true,
    },
    {
      src: "https://consent.ory.sh/index.js",
      async: true,
    },
  ],
}

module.exports = config
