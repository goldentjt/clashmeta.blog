import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import tutorials from '../data/tutorials';
import airports from '../data/airports';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: '全部实验 (25)' },
    { id: '下载与平台', label: '下载与平台 (7)' },
    { id: '入门与知识', label: '入门与知识 (5)' },
    { id: '订阅与配置', label: '订阅与配置 (4)' },
    { id: '网络与问题', label: '网络与问题 (5)' },
    { id: '服务选择', label: '服务选择 (1)' },
    { id: '站点说明', label: '站点说明 (2)' },
  ];

  const coreAirportOrder = ['qqy', 'mgjs', 'fmy', 'wfwl', 'dly'];
  const topAirports = coreAirportOrder
    .map((id) => airports.find((a) => a.id === id))
    .filter(Boolean);

  const filteredTutorials = tutorials.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featuredTutorials = tutorials.slice(0, 4);

  return (
    <Layout
      title="Clash Meta教学：从最小配置到可验证结果｜clashmeta教学网"
      description="围绕确定核心与客户端、选实验起点、按前置知识继续学习，按具体项目、系统与版本提供说明、实例和验证方法。"
    >
      {/* 1. 站点介绍 (Site Introduction / Hero) */}
      <header className="hero-section">
        <div className="hero-badge-tag">
          <span>⚡ CLASH META 实验教程手册</span>
          <span>•</span>
          <span>编制日期 2026-11-22</span>
        </div>

        {/* 循环动画 2: 首屏几何方块循环 (Hero Geometric Squares Cycle - 独立旋转图层) */}
        <div className="hero-geo-squares" aria-hidden="true">
          <div className="geo-square geo-sq-1">
            <div className="geo-square-rotator">
              <span className="geo-mark-corner"></span>
            </div>
          </div>
          <div className="geo-square geo-sq-2">
            <div className="geo-square-rotator">
              <span className="geo-mark-bar"></span>
            </div>
          </div>
          <div className="geo-square geo-sq-3">
            <div className="geo-square-rotator">
              <span className="geo-mark-cross"></span>
            </div>
          </div>
        </div>

        <h1 className="hero-title-main">
          <span className="anim-stroke-fill">Clash Meta教学</span>
          <br />
          从最小配置到<span className="title-stripe-keyword">可验证结果</span>
        </h1>

        <p className="hero-subtitle">
          围绕 Clash Meta（Mihomo）内核与客户端配置，提供<strong>版本明确、输入透明、可对照输出与支持一键回退</strong>的完整技术教学实验。
          每个网络概念均配套最小 YAML 配置、抓包检验方法以及系统网络恢复步骤，杜绝抽象猜测，让读者每一次连接调优都能落到实处。
        </p>

        {/* 教程搜索 (Search) */}
        <div className="hero-search-box">
          <input
            type="text"
            className="hero-search-input"
            placeholder="输入关键词快速检索实验手册（如：TUN模式、DNS防污染、VLESS配置、Windows环境、无法连接排查）..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="搜索教程实验"
          />
          <button className="btn-press btn-press-dark" onClick={() => setSearchTerm('')}>
            {searchTerm ? '清空' : '实时筛选'}
          </button>
        </div>

        {/* 前置导航与核心三原则 */}
        <div className="nav-breadcrumbs-box">
          <span>实验前置导读：</span>
          <Link to="/proxy-basics/" style={{ color: '#202020', textDecoration: 'underline' }}>
            前置阅读 → 代理基础 (/proxy-basics/)
          </Link>
          <span style={{ color: '#888' }}>|</span>
          <Link to="/getting-started/" style={{ color: '#202020', textDecoration: 'underline' }}>
            下一步操作 → Meta教程 (/getting-started/)
          </Link>
          <span style={{ color: '#888' }}>|</span>
          <Link to="/airport-recommend/" style={{ color: '#202020', textDecoration: 'underline' }}>
            节点配套 → 机场推荐 (/airport-recommend/)
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 1160, margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        {/* H2 章节结构 (严格遵循语义规范) */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, borderBottom: '2px solid #202020', paddingBottom: '0.6rem', marginBottom: '1.5rem' }}>
            确定核心与客户端
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.8, color: '#333' }}>
            在开展任何代理网络调优实验前，必须先厘清<strong>核心（Core）与图形客户端（GUI）</strong>的权责边界。
            Clash Meta（现演进代号为 Mihomo）负责解析 YAML 规则、管理 TCP/UDP 虚拟网络栈、执行 DNS 分流与出站握手；
            而 Clash Verge Rev、Clash for Windows 等客户端则主要承担配置文件的覆写、系统代理注册与图形化仪表展示。
            固定所使用的内核版本（如 v1.18+ 或稳定发行版），是保障教程配置具有可复现性的首要基线。
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, borderBottom: '2px solid #202020', paddingBottom: '0.6rem', margin: '2.5rem 0 1.5rem' }}>
            选实验起点
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.8, color: '#333' }}>
            新手切忌直接引入包含数千条规则的臃肿混合订阅。推荐按以下梯度循序渐进：
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '1rem 0' }}>
            <div style={{ background: '#fff', border: '2px solid #202020', borderRadius: 8, padding: 18, boxShadow: '3px 3px 0 #202020' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 6 }}>① 最小基线实验</div>
              <p style={{ fontSize: 14.5, color: '#555', margin: 0 }}>从仅有 1 个 Direct 直连与 1 个测试节点的单文件开始，验证 7890 端口监听与系统连通。</p>
            </div>
            <div style={{ background: '#fff', border: '2px solid #202020', borderRadius: 8, padding: 18, boxShadow: '3px 3px 0 #202020' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 6 }}>② 代理集合解耦</div>
              <p style={{ fontSize: 14.5, color: '#555', margin: 0 }}>使用 proxy-providers 将机场节点集与本地分流规则解耦，实现节点更新不影响路由策略。</p>
            </div>
            <div style={{ background: '#fff', border: '2px solid #202020', borderRadius: 8, padding: 18, boxShadow: '3px 3px 0 #202020' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 6 }}>③ 系统栈与TUN劫持</div>
              <p style={{ fontSize: 14.5, color: '#555', margin: 0 }}>开启虚拟网卡接管全系统网络流量，规避浏览器代理局限，实测 AI 工具与终端命令行连接。</p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, borderBottom: '2px solid #202020', paddingBottom: '0.6rem', margin: '2.5rem 0 1.5rem' }}>
            按前置知识继续学习
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.8, color: '#333' }}>
            如果遇到域名解析超时、节点测试 Timeout 或规则未按预期命中，请立刻回归基线，查阅我们提供的
            <Link to="/lab-errors/" style={{ fontWeight: 700, margin: '0 4px', color: '#202020' }}>实验排错手册 (/lab-errors/)</Link> 与
            <Link to="/dns-lab/" style={{ fontWeight: 700, margin: '0 4px', color: '#202020' }}>DNS防污染实验 (/dns-lab/)</Link>，分段回退定位故障点。
          </p>
        </section>

        {/* 5 Main Highlighted Airports (五大核心优质机场推荐) */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #202020', paddingBottom: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: 10 }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>
              实验验证核心服务精选（五大核心主推机场深度评测）
            </h2>
            <Link to="/airport-recommend/" className="btn-press" style={{ fontSize: '13px', padding: '4px 12px' }}>
              查看全部 28 家机场比对 →
            </Link>
          </div>
          <p style={{ fontSize: '15px', color: '#555', marginBottom: '1.5rem' }}>
            技术实验离不开高可用底层节点的支撑。我们在晚高峰（20:00 - 23:00）针对节点连通率、流媒体 4K/8K 解锁与 OpenAI/Claude AI 生产力接口进行了严格实测，精选出五家核心主推服务商（全球云 · 暮光加速 · 飞猫云 · 微风网络 · 大佬云）：
          </p>

          <div className="airports-highlight-grid">
            {topAirports.map((airport) => (
              <div key={airport.id} className="airport-card">
                <div>
                  <div className="airport-card-badge">{airport.code_desc}</div>
                  <h3 className="airport-card-title">{airport.name}</h3>
                  <div className="airport-card-price">{airport.min_price}</div>
                  <p className="airport-card-desc">{airport.selling_point}</p>

                  <div className="airport-meta-line"><strong>适用场景：</strong>{airport.scene}</div>
                  <div className="airport-meta-line"><strong>受众画像：</strong>{airport.target}</div>
                  <div className="airport-meta-line"><strong>AI解锁：</strong><span style={{ color: '#0d6b24', fontWeight: 700 }}>{airport.ai_unlock}</span></div>

                  <div className="airport-code-box">
                    <span>优惠码: <code style={{ background: '#E8F05A', padding: '2px 4px', color: '#202020' }}>{airport.code}</code></span>
                    <button className="copy-btn" data-copy={airport.code}>
                      复制券码
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  <Link
                    to={`/airports/${airport.id}/`}
                    className="btn-press btn-press-outline"
                    style={{ flex: 1, padding: '7px 8px', fontSize: 13, textDecoration: 'none' }}
                  >
                    📖 独立测评
                  </Link>
                  <a
                    href={airport.aff}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="btn-press register-btn-main"
                    style={{ flex: 1.2, padding: '7px 8px', fontSize: 13 }}
                  >
                    官网直达 ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 教程目录与筛选 (Category Catalog & Tutorials List) */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, borderBottom: '2px solid #202020', paddingBottom: '0.6rem', marginBottom: '1rem' }}>
            实验手册目录索引（全部 25 个课程页面）
          </h2>
          <p style={{ fontSize: '15px', color: '#555' }}>
            采用“编号＋标题＋摘要＋分类”横向手册规范呈现。点击分类标签可无缝重排，点击右侧方块即刻进入对应实验：
          </p>

          {/* 分类筛选与刻度行进工具栏 (Animation 3: Category Scale Ticks March & Animation 6: FLIP smooth transition) */}
          <div className="category-toolbar-wrap">
            <div className="filter-tabs-wrapper">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`cat-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                  data-cat={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* 循环动画 3: 分类区刻度行进 (Category Scale Ticks March - 18s) */}
            <div className="category-scale-strip" title="实验分类刻度标尺" aria-hidden="true">
              <span className="scale-strip-badge">INDEX SCALE</span>
              <div className="scale-strip-track">
                <div className="scale-strip-ticks"></div>
              </div>
            </div>
          </div>

          {/* 教程条目卡片列表 (Animation 4: Square Rotation) */}
          <div className="tutorials-grid">
            {filteredTutorials.map((item) => (
              <Link
                key={item.id}
                to={item.slug}
                className="tutorial-card"
                data-cat={item.category}
              >
                <div className="card-left-group">
                  <div className="card-num-badge">{item.num}</div>
                  <div className="card-content-wrap">
                    <div className="card-header-line">
                      <span className="card-category-pill">{item.category}</span>
                      <span style={{ fontSize: '12px', color: '#777', fontWeight: 600 }}>阅读时长: {item.readTime}</span>
                      <span style={{ fontSize: '12px', background: '#E8F05A', color: '#202020', padding: '1px 6px', borderRadius: 4, fontWeight: 700 }}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="card-title-text">{item.title}</div>
                    <p className="card-summary-text">{item.summary}</p>
                  </div>
                </div>

                {/* 动画 4: 悬停旋转 8 度的柠檬黄箭头方块 */}
                <div className="card-arrow-box" aria-hidden="true">
                  →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 专题合集 (Topic Collections) */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, borderBottom: '2px solid #202020', paddingBottom: '0.6rem', marginBottom: '1.5rem' }}>
            专题实验合集
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#fff', border: '2px solid #202020', borderRadius: 8, padding: 22, boxShadow: '4px 4px 0 #202020' }}>
              <div style={{ background: '#202020', color: '#E8F05A', display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 800, marginBottom: 10 }}>
                专题 01
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 8 }}>核心规则与分流进阶</h3>
              <p style={{ fontSize: 14.5, color: '#555', lineHeight: 1.7 }}>
                系统剖析 YAML 键值、GEOIP 数据库引用、DOMAN-SUFFIX 与 IP-CIDR 规则命中优先级。
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <Link to="/config-lab/" className="btn-press" style={{ fontSize: 13, padding: '4px 10px' }}>配置实验</Link>
                <Link to="/routing-lab/" className="btn-press btn-press-outline" style={{ fontSize: 13, padding: '4px 10px' }}>规则命中</Link>
              </div>
            </div>

            <div style={{ background: '#fff', border: '2px solid #202020', borderRadius: 8, padding: 22, boxShadow: '4px 4px 0 #202020' }}>
              <div style={{ background: '#202020', color: '#E8F05A', display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 800, marginBottom: 10 }}>
                专题 02
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 8 }}>全系统 TUN 与网卡接管</h3>
              <p style={{ fontSize: 14.5, color: '#555', lineHeight: 1.7 }}>
                针对不支持 HTTP 代理的开发工具、网游客户端与 Docker 容器，详解虚拟网卡路由原理。
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <Link to="/tun-lab/" className="btn-press" style={{ fontSize: 13, padding: '4px 10px' }}>TUN实验</Link>
                <Link to="/dns-lab/" className="btn-press btn-press-outline" style={{ fontSize: 13, padding: '4px 10px' }}>DNS覆盖</Link>
              </div>
            </div>

            <div style={{ background: '#fff', border: '2px solid #202020', borderRadius: 8, padding: 22, boxShadow: '4px 4px 0 #202020' }}>
              <div style={{ background: '#202020', color: '#E8F05A', display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 800, marginBottom: 10 }}>
                专题 03
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 8 }}>跨平台环境构建</h3>
              <p style={{ fontSize: 14.5, color: '#555', lineHeight: 1.7 }}>
                覆盖 Windows 10/11、macOS Apple Silicon/Intel、Android 电池保活及 Linux systemd 无头守护。
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <Link to="/windows-lab/" className="btn-press" style={{ fontSize: 13, padding: '4px 10px' }}>Windows</Link>
                <Link to="/mac-lab/" className="btn-press btn-press-outline" style={{ fontSize: 13, padding: '4px 10px' }}>Mac</Link>
                <Link to="/linux-lab/" className="btn-press btn-press-outline" style={{ fontSize: 13, padding: '4px 10px' }}>Linux</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 28 Airports Overview Table (全量28家机场数据一览) */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #202020', paddingBottom: '0.6rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>
              28 家核验机场资料总览与专属优惠码速查
            </h2>
            <Link to="/airport-recommend/" style={{ fontSize: '14px', fontWeight: 800, color: '#202020' }}>
              进入完整独立评测报告 →
            </Link>
          </div>
          <p style={{ fontSize: '15px', color: '#555', marginBottom: '1.2rem' }}>
            无优惠码的机场均以拼音首字母+88提供。点击“复制券码”即可体验反转动画，点击“注册链接”直达官网结算页：
          </p>

          <div className="airports-table-wrapper">
            <table className="airports-table">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>机场名称</th>
                  <th>最低参考价格</th>
                  <th>核心亮点与协议</th>
                  <th>专属优惠券码</th>
                  <th>官方注册入口</th>
                </tr>
              </thead>
              <tbody>
                {airports.map((ap, index) => (
                  <tr key={ap.id}>
                    <td style={{ fontWeight: 800 }}>{(index + 1).toString().padStart(2, '0')}</td>
                    <td style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>
                      <Link to={`/airports/${ap.id}/`} style={{ color: '#202020', textDecoration: 'underline' }}>
                        {ap.name}
                      </Link>
                      {ap.is_top && <span style={{ marginLeft: 6, background: '#E8F05A', color: '#202020', fontSize: 11, fontWeight: 700, padding: '2px 5px', borderRadius: 3, border: '1px solid #202020' }}>核心</span>}
                    </td>
                    <td style={{ whiteSpace: 'nowrap', color: '#d13030', fontWeight: 700 }}>{ap.min_price}</td>
                    <td style={{ fontSize: 13, maxWidth: 320 }}>{ap.selling_point}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <code style={{ background: '#FAFAF7', border: '1px solid #202020', padding: '2px 6px', fontWeight: 700 }}>{ap.code}</code>
                      <button className="copy-btn" data-copy={ap.code} style={{ marginLeft: 8 }}>
                        复制
                      </button>
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <Link
                        to={`/airports/${ap.id}/`}
                        className="btn-press btn-press-outline"
                        style={{ fontSize: 12, padding: '4px 8px', marginRight: 6, textDecoration: 'none' }}
                      >
                        独立测评
                      </Link>
                      <a
                        href={ap.aff}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        className="btn-press"
                        style={{ fontSize: 12, padding: '4px 8px' }}
                      >
                        官网 ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 常见问题 (FAQ: 所有的FAQ全部要展开，配备动画 8 符号变形) */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, borderBottom: '2px solid #202020', paddingBottom: '0.6rem', marginBottom: '1rem' }}>
            Clash Meta 实验常见问题解答（FAQ）
          </h2>
          <p style={{ fontSize: '15px', color: '#555', marginBottom: '1.5rem' }}>
            根据用户实测反馈整理的六大核心疑惑。所有解答默认完整展开，方便读者比对查阅；亦可点击折叠交互体验加号向减号变形动画：
          </p>

          <div className="faq-accordion-group">
            <div className="faq-accordion-item is-open">
              <button className="faq-question-btn" type="button">
                <span>实验开始前要记录什么？</span>
                <div className="faq-icon-toggle">
                  <span className="faq-bar-h"></span>
                  <span className="faq-bar-v"></span>
                </div>
              </button>
              <div className="faq-answer-panel">
                必须记录四项核心要素：操作系统（如 Windows 11 23H2 / macOS Sonoma 14.4）、客户端全名与构建号（如 Clash Verge Rev v1.7.5）、核心版本（通过终端 <code>mihomo -v</code> 输出）以及网络直连基线（直连时 ping 目标网关是否畅通）。保存好能正常运行的初始配置文件备份。
              </div>
            </div>

            <div className="faq-accordion-item is-open">
              <button className="faq-question-btn" type="button">
                <span>为何一个样例在别的版本报错？</span>
                <div className="faq-icon-toggle">
                  <span className="faq-bar-h"></span>
                  <span className="faq-bar-v"></span>
                </div>
              </button>
              <div className="faq-answer-panel">
                Clash Meta（Mihomo）内核迭代迅速，新版引入了如 <code>rule-providers</code> 的新格式、<code>sniffer</code> 纯嗅探器配置以及不同的 <code>tun.stack</code> 实现。不同版本间的字段语法若发生破坏性变更，需严格对照本教程注明的适配核心版本，排查客户端日志中首条 ERROR 报错行。
              </div>
            </div>

            <div className="faq-accordion-item is-open">
              <button className="faq-question-btn" type="button">
                <span>能同时改多项 DNS 和规则吗？</span>
                <div className="faq-icon-toggle">
                  <span className="faq-bar-h"></span>
                  <span className="faq-bar-v"></span>
                </div>
              </button>
              <div className="faq-answer-panel">
                <strong>绝对不能。</strong>教学实验的最基本原则是控制单一变量。若同时修改 nameserver、fake-ip 过滤列表与分流规则，一旦出现网络中断，将无法确定因果。每轮实验只改变一项具体参数，核对抓包或日志输出无误后，再推进下一项。
              </div>
            </div>

            <div className="faq-accordion-item is-open">
              <button className="faq-question-btn" type="button">
                <span>导入成功怎样继续验证？</span>
                <div className="faq-icon-toggle">
                  <span className="faq-bar-h"></span>
                  <span className="faq-bar-v"></span>
                </div>
              </button>
              <div className="faq-answer-panel">
                按照“三阶验证法”进行：第一步，刷新订阅后检查节点列表是否完整呈现且延迟测速返回正常数值；第二步，手动切换至目标测试节点，发起单点 HTTP 握手；第三步，通过命令行 <code>curl -I https://www.google.com</code> 检验响应状态码，并在内核日志（Connections）中确认请求命中了预期的策略组。
              </div>
            </div>

            <div className="faq-accordion-item is-open">
              <button className="faq-question-btn" type="button">
                <span>配置实验失败怎样回退？</span>
                <div className="faq-icon-toggle">
                  <span className="faq-bar-h"></span>
                  <span className="faq-bar-v"></span>
                </div>
              </button>
              <div className="faq-answer-panel">
                立即还原实验前备份的 <code>config.yaml</code>；若开启了 TUN 模式或系统代理，在关闭客户端前请确认系统网络设置中的“代理服务器”已被清空、虚拟 TUN 网卡已被系统正确卸载，最后重测基础直连网络恢复情况。
              </div>
            </div>

            <div className="faq-accordion-item is-open">
              <button className="faq-question-btn" type="button">
                <span>怎样提交复现记录？</span>
                <div className="faq-icon-toggle">
                  <span className="faq-bar-h"></span>
                  <span className="faq-bar-v"></span>
                </div>
              </button>
              <div className="faq-answer-panel">
                请在反馈中提供：① 确切的客户端与核心版本；② 去除了个人订阅密钥与敏感鉴权信息的最小脱敏配置；③ 导致复现异常的逐步操作序列；④ 预期的分流结果与实际的错误日志截图。严禁在公开 issue 中泄露个人机场订阅地址与私钥。
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
