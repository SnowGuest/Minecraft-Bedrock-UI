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
      { text: '快速开始', link: '/guide' },
      { text: '组件', link: '/component' },
      { text: '更新日志', link: '/update' }
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
