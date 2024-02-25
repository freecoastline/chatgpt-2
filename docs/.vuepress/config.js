const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "chatgpt-information",
  description: 'vdoing博客主题模板',
  base: '/chatgpt-information/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
// vssue 评论插件
  plugins,
  themeConfig,
}

