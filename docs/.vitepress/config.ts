import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // outDir:"../public",
  title: "Minecraft-Bedrock-UI",
  description: "Thanks to the Minecraft BE World Creation update in the 1.19 Beta.",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '更新日志', link: '/update' }
    ],

    sidebar: {
      "/guide/": [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/' },
          ]
        }],
      "/components/": [{
        text: '组件',
        items: [
          { text: 'Button', link: '/components/Button' },
          { text: 'Switch', link: '/components/Switch' },
        ]
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
