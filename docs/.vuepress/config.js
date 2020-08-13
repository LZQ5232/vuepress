module.exports = {
  title: '迷你编程文档',
  description: '专注于迷你编程文档',
  base: '/vuepress/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'https://github.com/LZQ5232/vuepress',
    docsRepo: 'https://github.com/LZQ5232/vuepress',
    editLinks: true,
    sidebarDepth: 3,
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: 'Languages',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '迷你爱学官网',
            link: 'https://www.miniaixue.com/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: '进阶',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: '其它',
              collapsable: false,
              children: ['/guide/other/faq.md', '/guide/other/release-notes.md']
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '迷你编程文档'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  plugins: ['@vuepress/back-to-top']
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md',
    '/guide/essentials/env.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/style-guide.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/cdn.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md',
    '/guide/advanced/sass.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
