---
id: dns-lab
title: Clash DNS实验：解析路径和覆盖设置怎么测｜clashmeta教学网
description: 围绕建立解析基线、只改目标解析条件、对照请求与日志，按具体项目、系统与版本提供说明、实例和验证方法。
slug: /dns-lab
keywords: [Clash DNS实验, Clash Meta解析基线怎样建立, Clash DNS实验怎样排除缓存影响, Clash DNS只修改一项怎样对照, Clash DNS配置, Fake-IP]
---

# Clash DNS实验：解析路径和覆盖设置怎么测

<div class="nav-breadcrumbs-box">
  <span>实验导航：</span>
  <a href="/routing-lab/">前置阅读 → Meta规则 (/routing-lab/)</a>
  <span class="text-sep">|</span>
  <a href="/lab-errors/">下一步 → 实验排错 (/lab-errors/)</a>
</div>

:::tip 节点配套与服务选择说明
进行本项配置或网络实验，必须准备一个已授权且支持 Clash Meta（Mihomo）特性的可用节点订阅。经过晚高峰实测，以下 4 家主流优质服务商具备高度协议兼容性与低延迟表现：
- **<a href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4" target="_blank" rel="sponsored nofollow noopener">全球云</a>**：多国原生 IP 智能分流，完美契合跨境电商与 TikTok 运营（专属 8 折优惠码 <code>qq88</code>）。
- **<a href="https://quanqiu.flycatvipaff.cc/#/?code=7ZOeVmNS" target="_blank" rel="sponsored nofollow noopener">飞猫云</a>**：多设备跨平台并发与家庭共享体验极佳，协议容灾自适应（专属优惠码 <code>flycat888</code>）。
- **<a href="https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV" target="_blank" rel="sponsored nofollow noopener">极连云</a>**：主打 IPLC 内网专线，抗封锁防 QoS，香港/日本超低延迟（优惠码 <code>jly88</code>，折后低至 8 元/月）。
- **<a href="https://feiv289.flyvaff.com/#/?code=qQCT0BeY" target="_blank" rel="sponsored nofollow noopener">FlyV</a>**：专线内网低延迟直连，协议覆盖全面，轻量套餐月付友好（专属优惠码 <code>flyv88</code>）。

完整 28 家机场价格与网络特性核对，可查阅 [Clash机场推荐：按实验验证范围读兼容性](/airport-recommend/)。所有外部跳转均携带  避免权重流失。
:::


> **互补阅读计划**：实验外的DNS失败需要现场定位时 → <a href="https://clashknow.blog/dns-check/" target="_blank" rel="nofollow noopener noreferrer">按解析阶段查失败原因</a>。规划链接，目标正式上线并核对正文后启用。

## 建立解析基线

Fake-IP 模式对所有域名查询立即返回保留私网 IP（如 `198.18.x.x`），并在内核建立映射表，彻底免疫本地 DNS 劫持。

## 只改目标解析条件

## 准备工作
- 支持 Fake-IP 模式的 Mihomo 核心。
- dig 或 nslookup 命令行工具。

## 操作步骤

<div class="step-container">

  <div class="step-card" data-step="01">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">01</div>
    </div>
    <div class="step-body">
      <div class="step-title">配置 Fake-IP 基础参数块</div>
      <div class="step-desc">在 config.yaml 中定义 dns 模块，监听本地 1053 端口：</div>
      
```yaml
dns:
  enable: true
  listen: 127.0.0.1:1053
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  nameserver:
    - 223.5.5.5
    - 119.29.29.29
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>nameserver 用于解析未被代理拦截的国内直连域名以及节点自身的服务器域名。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="02">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">02</div>
    </div>
    <div class="step-body">
      <div class="step-title">发起 DNS 解析查询</div>
      <div class="step-desc">向核心内置 DNS 端口发送特定域名解析请求：</div>
      
```yaml
dig @127.0.0.1 -p 1053 www.google.com
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>观察 Answer 区域返回的 A 记录是否落在 198.18.x.x 网段内。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="03">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">03</div>
    </div>
    <div class="step-body">
      <div class="step-title">排除操作系统本地 DNS 缓存影响</div>
      <div class="step-desc">刷新系统解析器缓存以确保观察结果来自于当前测试：</div>
      
```yaml
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder # macOS
# Windows: ipconfig /flushdns
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>确认每次新请求都能够触发核心内部的 DNS 映射记录。</div>
</div>

    </div>
  </div>

</div>

## 对照请求与日志

### 记录本轮输入、预期与实际输出

- **实验输入**：查询 `www.google.com` 的 A 记录。
- **预期输出**：返回形如 `198.18.0.x` 的保留私网 IP。
- **回退与恢复方法**：若古老内网系统不支持 Fake-IP，可改回 `enhanced-mode: redir-host`。

## 常见问题

<div class="faq-accordion-group">

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么 ping 某些国外网站全返回 198.18.x.x？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">这是 Fake-IP 的正常机制。数据包发往该虚拟 IP 时会被核心直接接管。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>什么场景需要把域名放入 fake-ip-filter？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">涉及局域网直连、打印机共享、Windows 连通性探测必须返回真实 IP。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么 DNS 会泄漏（DNS Leak）？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">配合 TUN 模式的 dns-hijack: ['any:53'] 可彻底解决。</div>
  </div>
</div>
