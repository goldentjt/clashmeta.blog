// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'clashmeta教学网 - Clash Meta核心实验与配置教程手册',
  tagline: '围绕Clash Meta相关核心与配置做版本明确的教学实验，从最小配置到可验证结果',
  favicon: 'img/favicon.ico',
  url: 'https://clashmeta.blog',
  baseUrl: '/',
  organizationName: 'clashmeta',
  projectName: 'clashmeta-blog',
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  clientModules: [
    require.resolve('./src/clientModules/animations.js'),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      metadata: [
        { name: 'keywords', content: 'Clash, Clash下载, Clash教程, Clash配置, Clash订阅, Clash节点, Clash规则, Clash TUN, Clash DNS, Clash无法连接, Clash Windows, Clash Mac, Clash Android, Clash iOS, Clash Linux, Clash机场推荐, Clash常见问题, Clash官网, Clash Meta, Clash Verge, Clash面板, Clash系统代理, Clash更新, 科学上网' },
        { name: 'theme-color', content: '#FAFAF7' },
      ],
      navbar: {
        title: 'clashmeta教学网',
        logo: {
          alt: 'clashmeta.blog Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/', label: 'Meta学习', position: 'left' },
          {
            type: 'dropdown',
            label: '下载与平台',
            position: 'left',
            items: [
              { to: '/downloads', label: 'Meta下载' },
              { to: '/windows-lab', label: 'Windows实验' },
              { to: '/mac-lab', label: 'Mac实验' },
              { to: '/android-lab', label: '安卓实验' },
              { to: '/ios-lab', label: 'iOS实验' },
              { to: '/linux-lab', label: 'Linux实验' },
              { to: '/upgrade-lab', label: 'Meta升级' },
            ],
          },
          {
            type: 'dropdown',
            label: '入门与知识',
            position: 'left',
            items: [
              { to: '/getting-started', label: 'Meta教程' },
              { to: '/proxy-basics', label: '代理基础' },
              { to: '/mihomo', label: 'Meta与核心' },
              { to: '/upstream', label: 'Meta项目来源' },
              { to: '/verge-lab', label: 'Verge实验' },
            ],
          },
          {
            type: 'dropdown',
            label: '订阅与配置',
            position: 'left',
            items: [
              { to: '/config-lab', label: 'Meta配置' },
              { to: '/provider-lab', label: 'Meta订阅' },
              { to: '/node-lab', label: 'Meta节点' },
              { to: '/routing-lab', label: 'Meta规则' },
            ],
          },
          {
            type: 'dropdown',
            label: '网络与问题',
            position: 'left',
            items: [
              { to: '/tun-lab', label: 'Meta TUN' },
              { to: '/dns-lab', label: 'Meta DNS' },
              { to: '/controller-lab', label: 'Meta面板' },
              { to: '/proxy-lab', label: '系统代理实验' },
              { to: '/lab-errors', label: '实验排错' },
            ],
          },
          { to: '/airport-recommend', label: '机场推荐', position: 'left' },
          {
            type: 'dropdown',
            label: '站点说明',
            position: 'left',
            items: [
              { to: '/faq', label: 'Meta问答' },
              { to: '/about', label: '关于教学网' },
            ],
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="header-search-wrap"><input type="search" id="site-header-search" class="header-search-input" placeholder="搜索25个实验手册..." aria-label="搜索教程" autocomplete="off" /><div id="header-search-results" class="header-search-dropdown"></div></div>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '课程与平台',
            items: [
              { label: 'Meta下载 (全平台文件)', to: '/downloads' },
              { label: 'Windows实验 (Win10/11)', to: '/windows-lab' },
              { label: 'Mac实验 (Apple Silicon)', to: '/mac-lab' },
              { label: '安卓实验 (VPN保活)', to: '/android-lab' },
              { label: 'Linux实验 (守护进程)', to: '/linux-lab' },
            ],
          },
          {
            title: '核心实验手册',
            items: [
              { label: 'Meta教程 (最小可用实验)', to: '/getting-started' },
              { label: 'Meta配置 (逐段理解YAML)', to: '/config-lab' },
              { label: 'Meta订阅 (代理集合加载)', to: '/provider-lab' },
              { label: 'Meta TUN (全局网卡接入)', to: '/tun-lab' },
              { label: '实验排错 (无法连接定位)', to: '/lab-errors' },
            ],
          },
          {
            title: '节点与服务',
            items: [
              { label: '机场推荐 (28家真实资料核验)', to: '/airport-recommend' },
              { label: 'Meta与核心 (Mihomo特性)', to: '/mihomo' },
              { label: 'Verge实验 (GUI覆写)', to: '/verge-lab' },
              { label: 'Meta面板 (RESTful控制)', to: '/controller-lab' },
            ],
          },
          {
            title: '站点说明与政策',
            items: [
              { label: '关于教学网 (实验维护规范)', to: '/about' },
              { label: '联系方式与纠错', to: '/about/#contact' },
              { label: '隐私政策声明', to: '/about/#privacy' },
              { label: '免责声明条款', to: '/about/#disclaimer' },
              { label: '常见复现疑难解答', to: '/faq' },
            ],
          },
        ],
        copyright: `<div style="margin-top:1.5rem; line-height:1.7; font-size:13.5px; color:#aaaaaa;">
          <p><strong>clashmeta教学网 (clashmeta.blog)</strong> 专注围绕 Clash Meta（Mihomo）内核与生态客户端构建版本明确、输入输出严谨、具有完整回退方案的教学实验。</p>
          <p>高频长尾搜索词聚合：Clash Meta教学、Clash下载、Clash教程、Clash配置YAML、Clash订阅导入、Clash节点选择、Clash规则分流、Clash TUN虚拟网卡、Clash DNS防污染、Clash无法连接排错、Clash机场推荐IPLC专线、科学上网入门基线。</p>
          <p style="margin-top:0.8rem; color:#888;">© 2026 clashmeta.blog | 保留所有权利 | 仅供技术教学与网络通信原理实验研究</p>
        </div>`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['yaml', 'bash', 'json', 'powershell', 'ini'],
      },
    }),
};

module.exports = config;
