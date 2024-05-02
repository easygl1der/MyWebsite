import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/MyWebsite/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '联系方式', link: '/联系方式' },
      { text: '作业', link: '/作业'},
      { text: '公众号', link: '/公众号'},
      { text: '数学生涯', link: '/数学生涯'},
      { text: '随手记录', link: '/随手记录'}
    ],
    footer: {
      copyright: "Copyright@2024 Yue Yihua",
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/easygl1der' }
    ]
  }
})
