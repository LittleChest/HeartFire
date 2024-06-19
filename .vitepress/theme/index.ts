import DefaultTheme from "vitepress/theme";
import "./style.css";

import HeimNad from "../layout/HeimNad.vue";

import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";

import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

injectSpeedInsights();
inject();

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx);
  },
  Layout: HeimNad,
};
