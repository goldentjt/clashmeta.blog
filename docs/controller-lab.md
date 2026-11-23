---
id: controller-lab
title: Clash面板实验：本机控制接口如何接通｜clashmeta教学网
description: 围绕核对控制端与核心、确认认证前提、连接观察与关闭，按具体项目、系统与版本提供说明、实例和验证方法。
slug: /controller-lab
keywords: [Clash面板实验, Clash控制接口怎样做本机实验, Clash面板认证成功怎样验证, Clash面板实验结束怎样关闭, Clash网页面板]
---

# Clash面板实验：本机控制接口如何接通

<div class="nav-breadcrumbs-box">
  <span>实验导航：</span>
  <a href="/config-lab/">前置阅读 → Meta配置 (/config-lab/)</a>
  <span class="text-sep">|</span>
  <a href="/lab-errors/">下一步 → 实验排错 (/lab-errors/)</a>
</div>


:::tip 节点配套与服务选择说明
进行本项配置或网络实验，必须准备一个已授权且支持 Clash Meta（Mihomo）特性的可用节点订阅。
经过晚高峰实测，以下 4 家主流优质服务商具备高度协议兼容性与低延迟表现：
- **<a href="https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV" target="_blank" rel="sponsored nofollow noopener">极连云</a>**：主打 IPLC 内网专线，抗封锁防 QoS，香港/日本超低延迟（优惠码 <code>jly88</code>，折后低至 8 元/月）。
- **<a href="https://quanqiu.vipaff.cc/#/?code=c4sOJBXE" target="_blank" rel="sponsored nofollow noopener">唯兔云</a>**：全线 VLESS 协议支持，60+ 节点智能负载均衡容灾（优惠码 <code>wty88</code>，月付 14.9 元起）。
- **<a href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4" target="_blank" rel="sponsored nofollow noopener">全球云</a>**：多国原生 IP 智能分流，完美契合跨境电商与 TikTok 运营（专属 8 折优惠码 <code>qq88</code>）。
- **<a href="https://tiziyun3.ladderaff.com/#/?code=wI00rGj2" target="_blank" rel="sponsored nofollow noopener">梯子云</a>**：全线企业级 IEPL 专线，晚高峰 4K/8K 流媒体满血加载，原生秒解 ChatGPT/Claude（8 折优惠码 <code>tiziyun</code>）。

完整 28 家机场价格与网络特性核对，可查阅 [Clash机场推荐：按实验验证范围读兼容性](/airport-recommend/)。所有外部跳转均携带 `rel="sponsored nofollow noopener"` 避免权重流失。
:::


## 核对控制端与核心

通过 RESTful API 进行无头状态下的远程管理与实时流量监控。

## 确认认证前提

## 连接观察与关闭

## 准备工作
- 运行中的 Mihomo 核心。

## 操作步骤

<div class="step-container">

  <div class="step-card" data-step="01">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">01</div>
    </div>
    <div class="step-body">
      <div class="step-title">配置本机 RESTful API 与访问密钥</div>
      <div class="step-desc">在 config.yaml 中开启控制接口：</div>
      
```yaml
external-controller: 127.0.0.1:9090
secret: "MySecretToken123"
external-ui: "dashboard" 
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>将端口严格限定在 127.0.0.1，禁止暴露到公网，配置安全的 secret 凭据。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="02">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">02</div>
    </div>
    <div class="step-body">
      <div class="step-title">通过 HTTP 接口查询当前运行状态</div>
      <div class="step-desc">使用 curl 发送带有认证 Header 的请求：</div>
      
```yaml
curl -H "Authorization: Bearer MySecretToken123" http://127.0.0.1:9090/version
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>验证返回带有 version 与 meta 字段的 JSON 结构。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="03">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">03</div>
    </div>
    <div class="step-body">
      <div class="step-title">连接 Web 仪表盘控制台</div>
      <div class="step-desc">在浏览器中打开 Yacd (yacd.metacubex.one) 或 Metacubexd：</div>
      
    </div>
  </div>

</div>

### 记录本轮输入、预期与实际输出

- **实验输入**：向 `/version` 发送携带密钥的 GET 请求。
- **预期输出**：返回 HTTP 200 与核心版本 JSON 数据。
- **回退与恢复方法**：清空 secret 或将 external-controller 设为空禁用。

## 常见问题

<div class="faq-accordion-group">

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么控制台打不开或连接失败？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">检查浏览器是否被 CORS 策略阻拦，或 secret 密码是否包含特殊字符未正确编码。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>局域网其他设备想访问面板怎么办？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">将 external-controller 改为 0.0.0.0:9090，且必须设置强密码 secret 并在防火墙放行该端口。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>关闭实验后如何彻底断开面板接口？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">停止核心进程即可，外部仪表盘将自动感知断开。</div>
  </div>
</div>
