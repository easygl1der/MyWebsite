import { defineConfig } from 'vitepress'

let nav_tmp = [
  { text: '主页', link: '/' },
      { text: '联系方式', link: '/联系方式' },
      { text: '作业', link: '/作业'},
      { text: '公众号', link: '/公众号'},
      { text: '数学生涯', link: '/数学生涯'},
      { text: '记录', 
        items: [
          { text: '《齐泽克的笑话》', link: '/docs/记录/《齐泽克的笑话》读书札记' },
          { text: '《青春咖啡馆》', link: '/docs/记录/《青春咖啡馆》书籍推介' },
          { text: '坚硬线、柔软线和逃逸线', link: '/docs/记录/坚硬线、柔软线和逃逸线' },
          { text: '朗西埃-被解放的观众', link: '/docs/记录/朗西埃-被解放的观众' },
          { text: '如何优雅地记笔记', link: '/docs/记录/如何优雅地记笔记' },
          { text: 'A=A', link: '/docs/记录/A=A' },
        ]
      }
]

let sidebar_tmp ={
  '/': nav_tmp,
  '/docs/记录/': [
    {
      text: '记录',
      collapsed: false,
      items: [
        { text: '记录', link: '/记录/《齐泽克的笑话》读书札记' },
        { text: '记录', link: '/记录/《青春咖啡馆》书籍推介' },
        { text: '记录', link: '/记录/坚硬线、柔软线和逃逸线' },
        { text: '记录', link: '/记录/朗西埃-被解放的观众' },
        { text: '记录', link: '/记录/如何优雅地记笔记' },
        { text: '记录', link: '/记录/A=A' },
      ]
    }
  ],
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "MySpace",
  description: "A VitePress Site",
  head: [
    // 谷歌统计
    // [
    //   'script',
    //   { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }
    // ],
    // [
    //   'script',
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'TAG_ID');`
    // ],
    // 百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4febaf14d8d93b86f93e2dc8806a888c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    // 51.la统计
    [
      'script',
      {},
      `
    !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3HxyEJbVZ8Mv2rgP",ck:"3HxyEJbVZ8Mv2rgP",hashMode:true});
      `
    ],
    [
      'script',
      {},
      `
      function runtime(){
        // 初始时间，日/月/年 时:分:秒
        X = new Date("3/5/2024 15:32:00");
        Y = new Date();
        T = (Y.getTime()-X.getTime());
        M = 24*60*60*1000;
        a = T/M;
        A = Math.floor(a);
        b = (a-A)*24;
        B = Math.floor(b);
        c = (b-B)*60;
        C = Math.floor((b-B)*60);
        D = Math.floor((c-C)*60);
        //信息写入到DIV中
        document.getElementById("runtime").innerHTML = "星梦已启航: "+"<font style='color:#FFA500;font-weight:bold'>"+A+"</font>"+"天"+"<font style='color:#8A2BE2;font-weight:bold'>"+B+"</font>"+"小时<font style='color:#1DBF97;font-weight:bold'>"+C+"</font>分<font style='color:#007EC6;font-weight:bold'>"+D+"</font>秒"
    }
    setInterval(runtime, 1000);
      `
    ],


  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav_tmp,
    // sidebar: sidebar_tmp,
    outline: [2, 3, 4],
    footer: {
      copyright: "Copyright©2024 Yitwah Yue",
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    outlineTitle: "本页目录",
    lastUpdated: true,
    markdown: {
      lineNumbers: true,
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true
      }
    },
    search: {
      provider: 'local'
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
