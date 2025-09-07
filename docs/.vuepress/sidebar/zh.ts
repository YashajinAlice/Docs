import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "project",
    "i18n",
    "quick-start",
    "support-us",
    {
      icon: "iconfont icon-read",
      text: "指令指南",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "基本指令",
          children: [
            "dashboard",
            "game-launcher",
            "kurobbswiki",
            "achievements",
            "real-time-notes",
            "character-data",
            "hutao-API",
            "imaginarium-theater",
            "develop-plan",
            "mhy-account-switch",
          ],
        },
      ],
    },
    {
      icon: "iconfont icon-advance",
      text: "高级",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "声明和公告",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "开发日志",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
