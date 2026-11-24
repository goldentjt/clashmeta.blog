---
id: provider-lab
title: Clash订阅实验：完整配置与代理集合如何加载｜clashmeta教学网
description: 围绕确认输入结构、加载与刷新、复核覆盖的字段，按具体项目、系统与版本提供说明、实例和验证方法。
slug: /provider-lab
keywords: [Clash订阅实验, Clash代理集合怎样做加载实验, Clash完整配置刷新怎样验证, Clash Meta订阅输入类型怎样测试, Clash订阅链接, proxy-providers]
---

# Clash订阅实验：完整配置与代理集合如何加载

<div class="nav-breadcrumbs-box">
  <span>实验导航：</span>
  <a href="/config-lab/">前置阅读 → Meta配置 (/config-lab/)</a>
  <span class="text-sep">|</span>
  <a href="/node-lab/">下一步 → Meta节点 (/node-lab/)</a>
</div>

:::tip 节点配套与服务选择说明
进行本项配置或网络实验，必须准备一个已授权且支持 Clash Meta（Mihomo）特性的可用节点订阅。经过晚高峰实测，以下 4 家主流优质服务商具备高度协议兼容性与低延迟表现：
- **<a href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4" target="_blank" rel="sponsored nofollow noopener">全球云</a>**：多国原生 IP 智能分流，完美契合跨境电商与 TikTok 运营（专属 8 折优惠码 <code>qq88</code>）。
- **<a href="http://adcua9104.dalaoyunaff.com/#/?code=J6GqQqk8" target="_blank" rel="sponsored nofollow noopener">大佬云</a>**：大带宽大吞吐主力出口，重度下载与高并发数据同步保障（专属优惠码 <code>dly88</code>）。
- **<a href="https://yinxingren1.invisibleaff.com/#/?code=ISH1y2IF" target="_blank" rel="sponsored nofollow noopener">隐形人</a>**：主打抗封锁与纯净原生出口，敏感时期连接稳定，隐私防护完备（专属优惠码 <code>yxr88</code>）。
- **<a href="https://edp01.breezenetaff.com/#/?code=vxDUI8kY" target="_blank" rel="sponsored nofollow noopener">微风网络</a>**：全节点 BGP 优化中转，低延迟香港/日本线路，兼顾通用订阅与快速导入（专属优惠码 <code>wfwl88</code>）。

完整 28 家机场价格与网络特性核对，可查阅 [Clash机场推荐：按实验验证范围读兼容性](/airport-recommend/)。所有外部跳转均携带  避免权重流失。
:::


## 确认输入结构

理解纯节点数据与规则配置的解耦：使用 `proxy-providers` 声明拉取远程或本地节点集合，避免每次订阅更新覆盖本地自定义路由。

## 加载与刷新

## 准备工作
- 本地静态样本 `./providers/airport-nodes.yaml`。
- 主配置文件 `main-config.yaml`。

## 操作步骤

<div class="step-container">

  <div class="step-card" data-step="01">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">01</div>
    </div>
    <div class="step-body">
      <div class="step-title">准备本地节点集合文件</div>
      <div class="step-desc">在 providers 子目录中保存一份干净的脱敏节点集：</div>
      
```yaml
# ./providers/airport-nodes.yaml
proxies:
  - name: "JLY-IPLC-HK"
    type: ss
    server: 198.51.100.21
    port: 9001
    cipher: aes-128-gcm
    password: "token"
  - name: "TZY-IEPL-SG"
    type: ss
    server: 198.51.100.22
    port: 9002
    cipher: aes-128-gcm
    password: "token" 
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>纯粹节点列表，不包含任何策略组和规则，实现关注点完全分离。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="02">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">02</div>
    </div>
    <div class="step-body">
      <div class="step-title">在主配置中定义 proxy-providers 引用</div>
      <div class="step-desc">在主配置文件中声明集合来源与健康检查：</div>
      
```yaml
proxy-providers:
  my-airport:
    type: file
    path: ./providers/airport-nodes.yaml
    health-check:
      enable: true
      interval: 600
      url: https://www.gstatic.com/generate_204

proxy-groups:
  - name: "My-Proxy"
    type: select
    use:
      - my-airport
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>注意使用 use 替代传统的 proxies 逐项硬编码。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="03">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">03</div>
    </div>
    <div class="step-body">
      <div class="step-title">启动核心并触发集合加载</div>
      <div class="step-desc">执行核心加载主配置，并在控制台复核节点集合解包结果：</div>
      
```yaml
mihomo -f ./main-config.yaml
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>观察日志中输出 'Start initial provider my-airport' 与节点装载成功提示。</div>
</div>

    </div>
  </div>

</div>

## 复核覆盖的字段

支持使用 `filter` 正则过滤指定地区节点（如 `filter: "HK|SG"`）。

### 记录本轮输入、预期与实际输出

- **实验输入**：加载主配置 `main-config.yaml`。
- **预期输出**：策略组 `My-Proxy` 成功包含集合内节点。
- **回退与恢复方法**：若 Provider 损坏，删除缓存文件并恢复备用节点集。

## 常见问题

<div class="faq-accordion-group">

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么策略组没有出现 Provider 里的节点？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">确认策略组中写的是 use: [provider-name] 而不是 proxies: [provider-name]。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>远程 Provider 刷新失败会怎样？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">Mihomo 会自动 fallback 使用上次成功写入本地 path 的缓存文件。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>推荐使用哪个机场来测试？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">极连云与梯子云提供的订阅格式极度规整，兼容所有 Clash Meta 特性。</div>
  </div>
</div>
