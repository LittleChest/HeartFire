import DefaultTheme from "vitepress/theme";
import "./style.css";

import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";

import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

injectSpeedInsights();
inject();

if (typeof window !== "undefined") {
  (function (c, l, a, r, i) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    if (y && y.parentNode) {
      y.parentNode.insertBefore(t, y);
    }
  })(window, document, "clarity", "script", "mfgleg5fdn");
}

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx);
  },
};
