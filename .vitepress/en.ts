import { defineConfig, type DefaultTheme } from "vitepress";
let adjectives: Array<string> = ["可爱的", "伟大的", "笨蛋"];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

export const en = defineConfig({
  title: "心火计划",
  titleTemplate: " 心火计划",
  description: "一个关于 Minecraft 的计划。",
  lang: "zh-Hans",

  themeConfig: {
    nav: nav(),

    footer: {
      message: "由" + adjective + " LittleChest 构建",
      copyright: "© " + new Date().getFullYear() + " 心火计划",
    },

    outline: {
      label: "总览",
    },

    langMenuLabel: "切换语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "博客",
      link: "https://blog.hfpro.top",
    },
  ];
}

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  root: {
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "请问您今天要来点什么？",
      },
      modal: {
        noResultsText: "无法找到相关结果，要不换个关键词试试？",
        resetButtonTitle: "清除查询条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
        },
      },
    },
  },
};
