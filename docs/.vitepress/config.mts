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
          { text: '关于', link: '/begin/关于' },
          { text: '待确认', link: '/begin/待确认' },
        ],
      },
      {
        text: '设计阶段',
        items: [
          { text: '硬装需求', link: '/design/硬装需求' },
          { text: '软装需求', link: '/design/软装需求' },
        ],
      },
      {
        text: '合同内容',
        items: [
          { text: '确认清单', link: '/contract/确认清单' },
          { text: '插座', link: '/contract/插座' },
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
