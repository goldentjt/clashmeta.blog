---
id: routing-lab
title: Clash规则实验：让请求命中预期策略｜clashmeta教学网
description: 围绕准备可观察请求、增改一条规则、核对命中与回退，按具体项目、系统与版本提供说明、实例和验证方法。
slug: /routing-lab
keywords: [Clash规则实验, Clash Meta规则命中怎样验证, Clash规则修改后怎样对照结果, Clash Meta分流实验怎样回退, Clash分流规则]
---

# Clash规则实验：让请求命中预期策略

<div class="nav-breadcrumbs-box">
  <span>实验导航：</span>
  <a href="/config-lab/">前置阅读 → Meta配置 (/config-lab/)</a>
  <span class="text-sep">|</span>
  <a href="/dns-lab/">下一步 → Meta DNS (/dns-lab/)</a>
</div>

:::tip 节点配套与服务选择说明
进行本项配置或网络实验，必须准备一个已授权且支持 Clash Meta（Mihomo）特性的可用节点订阅。经过晚高峰实测，以下 3 家主流优质服务商具备高度协议兼容性与低延迟表现：
- **<a href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4" target="_blank" rel="sponsored nofollow noopener">全球云</a>**：多国原生 IP 智能分流，完美契合跨境电商与 TikTok 运营（专属 8 折优惠码 <code>qq88</code>）。
- **<a href="https://quanqiu.flycatvipaff.cc/#/?code=7ZOeVmNS" target="_blank" rel="sponsored nofollow noopener">飞猫云</a>**：多设备跨平台并发与家庭共享体验极佳，协议容灾自适应（专属优惠码 <code>flycat888</code>）。
- **<a href="https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV" target="_blank" rel="sponsored nofollow noopener">极连云</a>**：主打 IPLC 内网专线，抗封锁防 QoS，香港/日本超低延迟（优惠码 <code>jly88</code>，折后低至 8 元/月）。

完整 28 家机场价格与网络特性核对，可查阅 [Clash机场推荐：按实验验证范围读兼容性](/airport-recommend/)。所有外部跳转均携带  避免权重流失。
:::


## 准备可观察请求

分流规则遵循**自上而下匹配、首条命中即终止**的原则。

## 增改一条规则

## 准备工作
- 运行中的 Mihomo 核心。
- 终端 curl 工具。

## 操作步骤

<div class="step-container">

  <div class="step-card" data-step="01">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">01</div>
    </div>
    <div class="step-body">
      <div class="step-title">编写基线规则集</div>
      <div class="step-desc">在 rules 列表中先建立基本的直连与兜底规则：</div>
      
```yaml
rules:
  - DOMAIN-SUFFIX,speedtest.net,DIRECT
  - MATCH,PROXY
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>此时访问 speedtest.net 应该直连，访问其他任何域名都走 PROXY。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="02">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">02</div>
    </div>
    <div class="step-body">
      <div class="step-title">测试未修改时的分流结果</div>
      <div class="step-desc">发起目标域名测试并记录基线日志：</div>
      
```yaml
curl -x http://127.0.0.1:7890 -I https://speedtest.net
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>日志显示 [TCP] ... match DomainSuffix(speedtest.net) using DIRECT。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="03">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">03</div>
    </div>
    <div class="step-body">
      <div class="step-title">插入一条更精确的子域规则</div>
      <div class="step-desc">在 DOMAIN-SUFFIX 之前插入特定子域名重定向规则：</div>
      
```yaml
rules:
  - DOMAIN,fast.speedtest.net,PROXY
  - DOMAIN-SUFFIX,speedtest.net,DIRECT
  - MATCH,PROXY
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>热加载配置后，再次请求 fast.speedtest.net，验证是否成功被截获到 PROXY。</div>
</div>

    </div>
  </div>

</div>

## 核对命中与回退

### 记录本轮输入、预期与实际输出

- **实验输入**：请求 `fast.speedtest.net`。
- **预期输出**：准确命中第一条 DOMAIN 规则走代理。
- **回退与恢复方法**：删除首条 DOMAIN 规则，恢复默认全站直连。

## 常见问题

<div class="faq-accordion-group">

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么 MATCH 规则必须放在最后一行？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">MATCH 是无条件通配符规则。如果放在前面，所有流量都会被它直接捕获。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>GEOIP,CN 为什么有时会把国外网站判定为直连？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">某些境外网站在境内配置了 Anycast IP，需将特定域名规则置于 GEOIP 之前。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>修改规则后需要重启核心吗？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">不需要。Clash Meta 支持配置文件热重载。</div>
  </div>
</div>
