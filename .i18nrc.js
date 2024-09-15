const { defineConfig } = require("@lobehub/i18n-cli");

module.exports = defineConfig({
  entry: "locales/zh",
  entryLocale: "zh",
  output: "locales",
  outputLocales: ["en"],
  temperature: 0,
  modelName: "gpt-4o-mini",
  experimental: {
    jsonMode: true,
  },
  //   markdown: {
  //     // reference: '你需要保持 mdx 的组件格式，输出文本不需要在最外层包裹任何代码块语法',
  //     entry: ['./README.zh-CN.md', './contributing/**/*.zh-CN.md', './docs/**/*.zh-CN.mdx'],
  //     entryLocale: 'zh-CN',
  //     outputLocales: ['en-US'],
  //     exclude: ['./contributing/_Sidebar.md', './contributing/_Footer.md', './contributing/Home.md'],
  //     outputExtensions: (locale, { filePath }) => {
  //       if (filePath.includes('.mdx')) {
  //         if (locale === 'en-US') return '.mdx';
  //         return `.${locale}.mdx`;
  //       } else {
  //         if (locale === 'en-US') return '.md';
  //         return `.${locale}.md`;
  //       }
  //     },
  //   },
});