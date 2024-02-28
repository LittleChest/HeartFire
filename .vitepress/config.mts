import { defineConfig } from "vitepress";
import { en } from "./en";
import { zh_Hans, search as zhHansSearch } from "./zh-Hans";

export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
    root: { label: 'English', ...en },
    zh_Hans: { label: "简体中文", ...zh_Hans },
  },
  themeConfig: {
    logo: "/logo.png",
    externalLinkIcon: true,
    outline: false,
    docFooter: {
      prev: false,
      next: false,
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Heart-Fire-Project" }],
    search: {
      provider: "local",
      options: {
        locales: { ...zhHansSearch },
      },
    },
  },
});
