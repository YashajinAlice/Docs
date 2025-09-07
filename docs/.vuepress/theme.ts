import { hopeTheme } from "vuepress-theme-hope";
import {
  zhNavbar,
} from "./navbar/index.js";
import {
  zhSidebar,
} from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://hut.ao",

    author: {
      name: "芙檩",
      url: "https://github.com/YashajinAlice",
    },

    iconAssets: [
      "https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
      "https://at.alicdn.com/t/c/font_3861247_yn9taeyq2sc.css",
    ],

    logo: "https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp",

    repo: "芙檩/Snap.Hutao",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    docsRepo: "芙檩/Snap.Hutao.Docs",

    docsDir: "docs",

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Bilibili", "Repo", "Outlook", "Search"],
    },

    locales: {
      "/zh/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        footer: "由芙檩进行全程维护作业",
        displayFooter: true,
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    markdown: {
      linkify: false,
      component: true,
      align: true,
      footnote: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      tabs: true,
      include: true,
    },

    plugins: {
      comment: {
        provider: "Giscus",
        repo: "芙檩/Snap.Hutao.Docs.Comments",
        repoId: "R_kgDOKySqhg",
        category: "Announcements",
        categoryId: "DIC_kwDOKySqhs4CbRrr",
        mapping: "pathname",
        inputPosition: "bottom",
      },

      components: {
        components: ["Badge", "BiliBili", "VPBanner"],
        // components: ["Badge", "BiliBili", "VPCard", "VPBanner"],
      },

      docsearch: {
        appId: "28CTGDOOQD",
        apiKey: "72d7a9a0f9f0466218ea19988886dce8",
        indexName: "hutao",
        locales: {
          "/zh/": {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
            },
          },
        },
      },

      feed: {
        rss: true,
      },

      sitemap: {
        changefreq: "weekly",
      },

      pwa: {
        appendBase: true,
        favicon: "/favicon.ico",
        cacheHTML: false,
        cacheImage: true,
        themeColor: "#f26d6d",
        update: "hint",

        apple: {
          icon: "/favicon.ico",
        },

        manifest: {
          icons: [
            {
              src: "/pwa-icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/pwa-icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
        },
      },

      redirect: {
        defaultLocale: "/zh/",
        autoLocale: true,
        switchLocale: "modal",
        localeConfig: {
          "/zh/": ["zh-CN", "zh-TW", "zh"],
        },
      },
    },
  },
  { custom: true },
);
