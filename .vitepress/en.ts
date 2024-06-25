import { defineConfig, type DefaultTheme } from "vitepress";
let adjectives: Array<string> = ["Lovely", "Great", "Baka"];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

export const en = defineConfig({
  title: "Heart Fire Project",
  titleTemplate: " Heart Fire Project",
  description: "A project about Minecraft",
  lang: "en",

  themeConfig: {
    nav: nav(),

    footer: {
      message: "Build by " + adjective + " LittleChest",
      copyright: "© " + new Date().getFullYear() + " Heart Fire Project",
    },

    outline: {
      label: "Overview",
    },

    langMenuLabel: "Switch Language",
    returnToTopLabel: "Back to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Theme",
    lightModeSwitchTitle: "Switch to light mode",
    darkModeSwitchTitle: "Switch to dark mode",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Blog",
      link: "https://blog.hfpro.top",
    },
  ];
}

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  en: {
    translations: {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "What can I get for you today?",
      },
      modal: {
        noResultsText: "Unable to find relevant results, how about trying a different keyword?",
        resetButtonTitle: "Clear the search criteria",
        footer: {
          selectText: "Select",
          navigateText: "Switch",
        },
      },
    },
  },
};
