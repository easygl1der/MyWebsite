import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyPage",
  description: "乐绎华的笔记网站",
  base: '/MyWebsite/',
  head: [
    [
      'script',
      {},
      `
      function runtime(){
        // 初始时间，日/月/年 时:分:秒
        X = new Date("5/3/2024 15:32:00");
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
        document.getElementById("runtime").innerHTML = "网站已运行: "+"<font style='color:#FFA500;font-weight:bold'>"+A+"</font>"+"天"+"<font style='color:#8A2BE2;font-weight:bold'>"+B+"</font>"+"小时<font style='color:#1DBF97;font-weight:bold'>"+C+"</font>分<font style='color:#007EC6;font-weight:bold'>"+D+"</font>秒"
    }
    setInterval(runtime, 1000);
      `
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/笔记/笔记'},
      { text: '数学生涯', link: '/数学生涯/数学生涯'},
      { text: '测试', link: '/测试/test'},
      { text: '记录', 
        items: [
          { text: '《齐泽克的笑话》读书札记', link: '/记录/《齐泽克的笑话》读书札记'},
          { text: '《青春咖啡馆》书籍推介', link: '/记录/《青春咖啡馆》书籍推介'},
          { text: '坚硬线、柔软线和逃逸线', link: '/记录/坚硬线、柔软线和逃逸线'},
          { text: '朗西埃-被解放的观众', link: '/记录/朗西埃-被解放的观众'},
          { text: '如何优雅地记笔记', link: '/记录/如何优雅地记笔记'},
          { text: 'A=A', link: '/记录/A=A'},
        ]
      },
      { text: '作业',
        items: [
          {text: '数学分析I',link: '/作业/数学分析I'},
          {text: '几何与代数I', link: '/作业/几何与代数I'},
          {text: '数学分析II',link: '/作业/数学分析II'},
          {text: '几何与代数II', link: '/作业/几何与代数II'},
        ]
      }
    ],

    sidebar: {
      '/测试/': [

      ],
      '/记录/': [
        {
          text: '记录',
          collapsed: false,
          items: [
            { text: '《齐泽克的笑话》读书札记', link: '/记录/《齐泽克的笑话》读书札记'},
            { text: '《青春咖啡馆》书籍推介', link: '/记录/《青春咖啡馆》书籍推介'},
            { text: '坚硬线、柔软线和逃逸线', link: '/记录/坚硬线、柔软线和逃逸线'},
            { text: '朗西埃-被解放的观众', link: '/记录/朗西埃-被解放的观众'},
            { text: '如何优雅地记笔记', link: '/记录/如何优雅地记笔记'},
            { text: 'A=A', link: '/记录/A=A'},
          ]
        }
      ],
      '/作业/': [
        {
          text: '作业',
          collapsed: false,
          items: [
            {text: '数学分析I',link: '/作业/数学分析I'},
            {text: '几何与代数I', link: '/作业/几何与代数I'},
            {text: '数学分析II',link: '/作业/数学分析II'},
            {text: '几何与代数II', link: '/作业/几何与代数II'},
          ]
        }
        

      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/easygl1der/MyWebsite' }
    ],

    footer: {
      copyright: 'Copyright © 2024-present Yitwah Yue &ensp;|&ensp;<span id="runtime"></span>'
    },
    search: {
      provider: 'local'
    },
    optimizeDeps: {
      include: ['pdf'], // 将pdf文件添加到include数组中
      exclude: [], // 排除其他不需要优化的文件类型
    },
  }
})

