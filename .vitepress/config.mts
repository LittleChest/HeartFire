import { defineConfig } from "vitepress";
import { en, search as enSearch } from "./en";
import { zhHans, search as zhHansSearch } from "./zh-Hans";

export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "mfgleg5fdn");`,
    ],
  ],
  cleanUrls: true,
  rewrites: {
    "index.md": "index.md",
    ":file(.*)/index.md": ":file/index.md",
    ":file(.*).md": ":file/index.md",
  },
  srcDir: "./src",
  sitemap: {
    hostname: "https://hfpro.top",
  },
  locales: {
    en: { label: "English", ...en },
    "zh-hans": { label: "简体中文", ...zhHans },
  },
  themeConfig: {
    logo: "/logo.png",
    externalLinkIcon: false,
    aside: "left",
    outline: false,
    docFooter: {
      prev: false,
      next: false,
    },
    search: {
      provider: "local",
      options: {
        locales: { ...zhHansSearch, ...enSearch },
      },
    },
  },
});
