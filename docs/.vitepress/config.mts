import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Renovation Note',
  description: '装修笔记',
  base: '/reno-note/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/reno-note/favicon.ico' }],
  ],
  vite: {
    plugins: [
      Unocss({
        inspector: false,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: 'types/auto-imports.d.ts',
        resolvers: [ElementPlusResolver()],
        dirs: ['composables'],
        vueTemplate: true,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'types/components.d.ts',
        dirs: ['components'],
      }),
    ],
    ssr: { noExternal: ['element-plus'] },
  },
  themeConfig: {
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '关于', link: '/begin/about' },
          { text: '提示词', link: '/begin/learn' },
        ],
      },
      {
        text: '设计阶段',
        items: [
          { text: '硬装需求', link: '/design/hard' },
          { text: '软装需求', link: '/design/soft' },
          { text: '效果图', link: '/build/tenjou' },
          { text: '问题', link: '/build/tengen' },
        ],
      },
      {
        text: '签订合同',
        items: [
          { text: '装修', link: '/stats/house' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waaatanuki/reno-note' },
    ],
    lastUpdated: {
      text: '最后更新于 ',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
})
