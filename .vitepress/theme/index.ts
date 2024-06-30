import DefaultTheme from "vitepress/theme";
import "./style.css";
import lang from "./lang.vue";

import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";

export default {
  ...DefaultTheme,
  lang,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx);
  },
};
