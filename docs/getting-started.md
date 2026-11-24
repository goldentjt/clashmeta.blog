---
id: getting-started
title: Clash Meta教程：完成一次最小可用实验｜clashmeta教学网
description: 围绕准备已授权的输入、加载并启用、记录一次目标连接，按具体项目、系统与版本提供说明、实例和验证方法。
slug: /getting-started
keywords: [Clash教程, Clash Meta第一次实验怎样做, Clash Meta怎样验证一次目标连接, Clash Meta最小可用环境如何记录, Clash使用教程]
---

# Clash Meta教程：完成一次最小可用实验

<div class="nav-breadcrumbs-box">
  <span>实验导航：</span>
  <a href="/downloads/">前置阅读 → Meta下载 (/downloads/)</a>
  <span class="text-sep">|</span>
  <a href="/provider-lab/">下一步 → Meta订阅 (/provider-lab/)</a>
</div>

:::tip 节点配套与服务选择说明
进行本项配置或网络实验，必须准备一个已授权且支持 Clash Meta（Mihomo）特性的可用节点订阅。经过晚高峰实测，以下 3 家主流优质服务商具备高度协议兼容性与低延迟表现：
- **<a href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4" target="_blank" rel="sponsored nofollow noopener">全球云</a>**：多国原生 IP 智能分流，完美契合跨境电商与 TikTok 运营（专属 8 折优惠码 <code>qq88</code>）。
- **<a href="https://lingdongyun.lingdongaff.com/#/?code=ibHQOYGt" target="_blank" rel="sponsored nofollow noopener">灵动云</a>**：全线智能路由优化，三网均衡接入，性价比流量档位丰富（专属优惠码 <code>ldy88</code>）。
- **<a href="https://feiv289.flyvaff.com/#/?code=qQCT0BeY" target="_blank" rel="sponsored nofollow noopener">FlyV</a>**：专线内网低延迟直连，协议覆盖全面，轻量套餐月付友好（专属优惠码 <code>flyv88</code>）。

完整 28 家机场价格与网络特性核对，可查阅 [Clash机场推荐：按实验验证范围读兼容性](/airport-recommend/)。所有外部跳转均携带  避免权重流失。
:::


## 准备已授权的输入

新手学习 Clash Meta 时最容易犯的错误是一上来就导入包含数千条分流规则的大型订阅。一旦连接失败，无法确定是节点失效、DNS 污染还是规则阻断。

本次实验的目标是：**构建一个只包含 1 个有效节点、1 个最小策略组与 1 个直连规则的极简 YAML 文件**，成功接通一次目标 HTTP 握手，并记录完整日志链路。

## 加载并启用

将极简配置注入核心，开启混合端口监听（7890），建立首个受控的代理实验环境。

## 准备工作
- 已安装并验证过版本的 Mihomo 核心。
- 1 个已授权可用的 Shadowsocks / VLESS 测试节点信息（从推荐机场获取）。
- 终端命令行工具与 `curl`。

## 操作步骤

<div class="step-container">

  <div class="step-card" data-step="01">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">01</div>
    </div>
    <div class="step-body">
      <div class="step-title">编写最小 config.yaml 实验基线</div>
      <div class="step-desc">新建测试目录并写入基础入站端口与节点声明：</div>
      
```yaml
port: 7890
socks-port: 7891
mixed-port: 7890
mode: rule
log-level: info
allow-lan: false
external-controller: 127.0.0.1:9090

proxies:
  - name: "Lab-Test-Node"
    type: ss
    server: 198.51.100.10
    port: 8388
    cipher: aes-128-gcm
    password: "YOUR_SAMPLE_PASSWORD"

proxy-groups:
  - name: PROXY
    type: select
    proxies:
      - "Lab-Test-Node"
      - DIRECT

rules:
  - DOMAIN-SUFFIX,google.com,PROXY
  - MATCH,DIRECT
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>观察 mixed-port 是否绑定了 7890，rules 列表只有明确的两条规则，消除了多余干扰。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="02">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">02</div>
    </div>
    <div class="step-body">
      <div class="step-title">启动核心并观察监听日志</div>
      <div class="step-desc">在独立终端以前台方式启动内核，直接观察控制台实时事件：</div>
      
```yaml
mihomo -d ~/clash-lab-workspace
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>核查日志中是否有 'Mixed(http+socks) proxy listening at: 127.0.0.1:7890' 正常启动行。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="03">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">03</div>
    </div>
    <div class="step-body">
      <div class="step-title">发起受控目标请求测试</div>
      <div class="step-desc">在另一终端使用 curl 显式指定代理端口访问受测域名：</div>
      
```yaml
curl -x http://127.0.0.1:7890 -I https://www.google.com --connect-timeout 5
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>检验 HTTP 状态码是否返回 200 或 301/302，并在内核控制台检查规则命中输出。</div>
</div>

    </div>
  </div>

</div>

## 记录一次目标连接

在内核控制台中观察到的标准连接轨迹应如下：
```text
[TCP] 127.0.0.1:54321 --> www.google.com:443 match DomainSuffix(google.com) using PROXY[Lab-Test-Node]
```
这表明：客户端请求准确命中预设的规则，并成功经由 `Lab-Test-Node` 节点建立 TLS 隧道。

### 记录本轮输入、预期与实际输出

- **实验输入**：`curl -x http://127.0.0.1:7890 -I https://www.google.com`
- **预期输出**：HTTP/2 200 OK，内核日志打印 `match DomainSuffix(google.com)`。
- **回退与恢复方法**：在启动核心的终端按下 `Ctrl + C` 退出进程，删除 `~/clash-lab-workspace` 目录即可完全恢复。

## 常见问题

<div class="faq-accordion-group">

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么不用图形客户端做第一次实验？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">图形客户端在后台会自动执行配置覆写与脚本注入，遮蔽了核心真实的运行逻辑。使用命令行前台实验能最清晰看到输入与输出的直接因果。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>没有可用节点信息怎么办？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">可先选用极连云或唯兔云的轻量体验档获取节点参数，再将参数填入代理配置。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>端口 7890 被占用如何解决？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">修改 YAML 中的 mixed-port: 7899，同时 curl 测试时改用 -x http://127.0.0.1:7899 即可。</div>
  </div>
</div>
