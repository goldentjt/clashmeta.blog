---
id: downloads
title: Clash下载与Meta版本：实验要用哪种文件｜clashmeta教学网
description: 围绕记录实验基线、包与平台对应、下载后确认版本，按具体项目、系统与版本提供说明、实例和验证方法。
slug: /downloads
keywords: [Clash下载与Meta版本, Clash Meta实验怎样固定核心版本, Clash下载文件怎样对应实验平台, Clash Meta安装后怎样确认基线, Clash客户端下载, Clash安装包]
---

# Clash下载与Meta版本：实验要用哪种文件

<div class="nav-breadcrumbs-box">
  <span>实验导航：</span>
  <a href="/upstream/">前置阅读 → Meta项目来源 (/upstream/)</a>
  <span class="text-sep">|</span>
  <a href="/getting-started/">下一步 → Meta教程 (/getting-started/)</a>
  <span class="text-sep">|</span>
  <span>选择平台：</span>
  <a href="/windows-lab/">Windows实验</a> / <a href="/mac-lab/">Mac实验</a> / <a href="/android-lab/">安卓实验</a> / <a href="/ios-lab/">iOS实验</a> / <a href="/linux-lab/">Linux实验</a>
</div>

:::tip 节点配套与服务选择说明
进行本项配置或网络实验，必须准备一个已授权且支持 Clash Meta（Mihomo）特性的可用节点订阅。经过晚高峰实测，以下 3 家主流优质服务商具备高度协议兼容性与低延迟表现：
- **<a href="https://hueue09.gcvipaff.com/#/?code=z8U9aaa4" target="_blank" rel="sponsored nofollow noopener">全球云</a>**：多国原生 IP 智能分流，完美契合跨境电商与 TikTok 运营（专属 8 折优惠码 <code>qq88</code>）。
- **<a href="https://langwang.wavenetaff.com/#/?code=pYe3kzd4" target="_blank" rel="sponsored nofollow noopener">浪网</a>**：高品质内网专线，极低网络抖动（低于 3ms），适合跨境办公与生产力交互（专属优惠码 <code>lw88</code>）。
- **<a href="http://adcua9104.dalaoyunaff.com/#/?code=J6GqQqk8" target="_blank" rel="sponsored nofollow noopener">大佬云</a>**：大带宽大吞吐主力出口，重度下载与高并发数据同步保障（专属优惠码 <code>dly88</code>）。

完整 28 家机场价格与网络特性核对，可查阅 [Clash机场推荐：按实验验证范围读兼容性](/airport-recommend/)。所有外部跳转均携带  避免权重流失。
:::


> **互补阅读计划**：确定核心实验前提后核对具体平台文件 → <a href="https://clash-app.blog/download/" target="_blank" rel="nofollow noopener noreferrer">查看系统与架构对应资料</a>。规划链接，目标正式上线并核对正文后启用。

## 记录实验基线

开展任何网络代理实验，最关键的第一步是固定并记录**软件基线**。如果不记录版本与架构，遇到配置报错时将无法区分是 YAML 语法问题、内核不支持还是客户端覆写缺陷。

在建立实验环境时，必须登记以下 4 项基线指标：
1. **操作系统与硬件架构**：例如 Windows 11 x86_64、macOS Sonoma arm64（Apple Silicon M系列）或 Ubuntu 22.04 LTS aarch64。
2. **核心（Core）二进制名称与构建版本**：例如 `mihomo-linux-amd64-v1.18.9`。
3. **图形界面客户端版本**：例如 `Clash Verge Rev v1.7.5`。
4. **测试初始网络状态**：在未开启代理前，本机的 DNS 解析状态与默认物理网关跃点。

## 包与平台对应


## 客户端与核心完整下载矩阵

> 数据与分发镜像索引参考自 <a href="https://tizilab.cc/ruanjian/" target="_blank" rel="nofollow noopener noreferrer">梯子实验室</a> 客户端库。全部外部链接均已规范添加 `rel="nofollow noopener noreferrer"`。若 GitHub 官方直连下载缓慢，可使用配套的第三方加速镜像。

### 1. Windows 客户端下载

| 客户端名称 | 推荐版本 | 适用架构 | 官方直连下载 (GitHub) | 加速下载镜像 (ghfast) |
| :--- | :--- | :--- | :--- | :--- |
| **Clash Verge Rev** | `v2.5.5` | x86_64 | <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">安装程序 .exe</a> | <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Clash Verge Rev** | `v2.5.5` | ARM64 | <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">安装程序 .exe</a> | <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **FlClash** | `v0.8.98` | x86_64 | <a href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-amd64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">安装程序 .exe</a> | <a href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-amd64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **FlClash** | `v0.8.98` | ARM64 | <a href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-arm64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">安装程序 .exe</a> | <a href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-arm64-setup.exe" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **v2rayN** | `7.24.9` | x86_64 | <a href="https://github.com/2dust/v2rayN/releases/download/7.24.9/v2rayN-windows-64.zip" target="_blank" rel="nofollow noopener noreferrer">免安装 .zip</a> | <a href="https://ghfast.top/https://github.com/2dust/v2rayN/releases/download/7.24.9/v2rayN-windows-64.zip" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Karing** | `v1.2.25` | x86_64 | <a href="https://github.com/KaringX/karing/releases/download/v1.2.25.2802/karing_1.2.25.2802_windows_x64.exe" target="_blank" rel="nofollow noopener noreferrer">安装程序 .exe</a> | <a href="https://ghfast.top/https://github.com/KaringX/karing/releases/download/v1.2.25.2802/karing_1.2.25.2802_windows_x64.exe" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Hiddify** | `v4.1.1` | x86_64 | <a href="https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-Windows-Setup-x64.exe" target="_blank" rel="nofollow noopener noreferrer">安装程序 .exe</a> | <a href="https://ghfast.top/https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-Windows-Setup-x64.exe" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **NekoRay** | `4.0.1` | x86_64 | <a href="https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-windows64.zip" target="_blank" rel="nofollow noopener noreferrer">免安装 .zip</a> | <a href="https://ghfast.top/https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-windows64.zip" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **sing-box** | `v1.14.2` | 通用 | <a href="https://github.com/SagerNet/sing-box/releases/latest" target="_blank" rel="nofollow noopener noreferrer">官方 Releases 发布页 ↗</a> | - |

---

### 2. macOS 客户端下载

| 客户端名称 | 推荐版本 | 适用芯片架构 | 官方直连下载 (GitHub) | 加速下载镜像 (ghfast) |
| :--- | :--- | :--- | :--- | :--- |
| **Clash Verge Rev** | `v2.5.5` | Apple Silicon (M1/M2/M3/M4) | <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg" target="_blank" rel="nofollow noopener noreferrer">aarch64 .dmg</a> | <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Clash Verge Rev** | `v2.5.5` | Intel (x86_64) | <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg" target="_blank" rel="nofollow noopener noreferrer">x64 .dmg</a> | <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **FlClash** | `v0.8.98` | Apple Silicon (M系列) | <a href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-arm64.dmg" target="_blank" rel="nofollow noopener noreferrer">arm64 .dmg</a> | <a href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-arm64.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **FlClash** | `v0.8.98` | Intel (x86_64) | <a href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-amd64.dmg" target="_blank" rel="nofollow noopener noreferrer">amd64 .dmg</a> | <a href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-amd64.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **ClashX Meta** | `v1.4.15` | macOS 12+ 通用 | <a href="https://github.com/MetaCubeX/ClashX.Meta/releases/download/v1.4.15/ClashX.Meta.macOS.12.0.and.later.dmg" target="_blank" rel="nofollow noopener noreferrer">安装包 .dmg</a> | <a href="https://ghfast.top/https://github.com/MetaCubeX/ClashX.Meta/releases/download/v1.4.15/ClashX.Meta.macOS.12.0.and.later.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Karing** | `v1.2.25` | Universal (通用) | <a href="https://github.com/KaringX/karing/releases/download/v1.2.25.2802/karing_1.2.25.2802_macos_universal.dmg" target="_blank" rel="nofollow noopener noreferrer">universal .dmg</a> | <a href="https://ghfast.top/https://github.com/KaringX/karing/releases/download/v1.2.25.2802/karing_1.2.25.2802_macos_universal.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Hiddify** | `v4.1.1` | macOS 通用 | <a href="https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-MacOS.dmg" target="_blank" rel="nofollow noopener noreferrer">安装包 .dmg</a> | <a href="https://ghfast.top/https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-MacOS.dmg" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Stash** | `3.4.1` | macOS 12+ (App Store) | <a href="https://apps.apple.com/us/app/id1596063349" target="_blank" rel="nofollow noopener noreferrer">前往 Mac App Store 获取 ↗</a> | - |

---

### 3. Android 客户端下载

| 客户端名称 | 推荐版本 | 适用架构 | 官方直连下载 (GitHub) | 加速下载镜像 (ghfast) |
| :--- | :--- | :--- | :--- | :--- |
| **Clash Meta for Android** | `v2.11.34` | arm64-v8a (主流安卓) | <a href="https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-arm64-v8a-release.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-arm64-v8a-release.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Clash Meta for Android** | `v2.11.34` | universal (通用) | <a href="https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-universal-release.apk" target="_blank" rel="nofollow noopener noreferrer">universal .apk</a> | <a href="https://ghfast.top/https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-universal-release.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **FlClash** | `v0.8.98` | arm64-v8a | <a href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-android-arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-android-arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **v2rayNG** | `2.2.6` | arm64-v8a | <a href="https://github.com/2dust/v2rayNG/releases/download/2.2.6/v2rayNG_2.2.6_arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/2dust/v2rayNG/releases/download/2.2.6/v2rayNG_2.2.6_arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **NekoBox for Android** | `1.4.2` | arm64-v8a | <a href="https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.4.2/NekoBox-1.4.2-arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.4.2/NekoBox-1.4.2-arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Surfboard** | `2.35.1` | arm64-v8a | <a href="https://github.com/getsurfboard/surfboard/releases/download/mobile-2.35.1/mobile-arm64-v8a-release.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/getsurfboard/surfboard/releases/download/mobile-2.35.1/mobile-arm64-v8a-release.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Hiddify** | `v4.1.1` | arm64-v8a | <a href="https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-Android-arm64.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-Android-arm64.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Karing** | `v1.2.25` | arm64-v8a | <a href="https://github.com/KaringX/karing/releases/download/v1.2.25.2802/karing_1.2.25.2802_android_arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">arm64-v8a .apk</a> | <a href="https://ghfast.top/https://github.com/KaringX/karing/releases/download/v1.2.25.2802/karing_1.2.25.2802_android_arm64-v8a.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |

---

### 4. iOS / iPadOS 客户端官方渠道

| 客户端名称 | 推荐版本 | 获取渠道与说明 | 官方应用商店下载直达 |
| :--- | :--- | :--- | :--- |
| **Shadowrocket (小火箭)** | 最新版 | 海外 Apple ID 独占，支持 Clash 格式与丰富协议 | <a href="https://apps.apple.com/us/app/id932747118" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Stash** | `3.4.1` | 支持原生 Clash Meta 特性与规则转换，界面精致 | <a href="https://apps.apple.com/us/app/id1596063349" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Quantumult X (圈X)** | 最新版 | 经典网络调试代理工具，脚本分流能力强大 | <a href="https://apps.apple.com/us/app/id1443988620" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Loon** | `3.5.1` | 界面友好，支持多协议订阅与插件重写 | <a href="https://apps.apple.com/us/app/id1373567447" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Surge** | `5.22.1` | 工业级高端网络调试工具，支持复杂网络拓扑 | <a href="https://apps.apple.com/us/app/id1442620678" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Karing** | `v1.2.25` | 跨平台免费客户端，App Store 免费直接获取 | <a href="https://apps.apple.com/us/app/karing/id6472431552" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Hiddify** | `v4.1.1` | 基于 Sing-box 核心的多协议客户端 | <a href="https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Streisand** | `1.6.76` | 海外 App Store 免费代理客户端 | <a href="https://apps.apple.com/us/app/id6450534064" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |
| **Potatso** | 最新版 | 基础免费代理工具 | <a href="https://apps.apple.com/us/app/id1239860606" target="_blank" rel="nofollow noopener noreferrer">前往 App Store 获取 ↗</a> |

---

### 5. Linux 客户端与独立核心下载

| 软件名称 | 版本 | 适用环境 / 格式 | 官方直连下载 (GitHub) | 加速下载镜像 (ghfast) |
| :--- | :--- | :--- | :--- | :--- |
| **Mihomo (Clash Meta) 独立核心** | 最新版 | Linux (amd64 / arm64) | <a href="https://github.com/MetaCubeX/mihomo/releases/latest" target="_blank" rel="nofollow noopener noreferrer">Mihomo Releases ↗</a> | - |
| **Clash Verge Rev** | `v2.5.5` | x86_64 Debian/Ubuntu | <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb" target="_blank" rel="nofollow noopener noreferrer">amd64 .deb</a> | <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Clash Verge Rev** | `v2.5.5` | ARM64 Debian/Ubuntu | <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64.deb" target="_blank" rel="nofollow noopener noreferrer">arm64 .deb</a> | <a href="https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64.deb" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **FlClash** | `v0.8.98` | x86_64 Linux | <a href="https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-linux-amd64.deb" target="_blank" rel="nofollow noopener noreferrer">amd64 .deb</a> | <a href="https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-linux-amd64.deb" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **NekoRay** | `4.0.1` | x86_64 Debian/Ubuntu | <a href="https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-debian-x64.deb" target="_blank" rel="nofollow noopener noreferrer">debian-x64 .deb</a> | <a href="https://ghfast.top/https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-debian-x64.deb" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |

---

### 6. 软路由与鸿蒙生态客户端

| 软件名称 | 版本 | 适用环境 / 格式 | 官方直连下载 (GitHub) | 加速下载镜像 (ghfast) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClash** | `v0.47.156` | OpenWrt / 软路由 (.ipk/.apk) | <a href="https://github.com/vernesong/OpenClash/releases/download/v0.47.156/luci-app-openclash-0.47.156.apk" target="_blank" rel="nofollow noopener noreferrer">luci-app-openclash .apk</a> | <a href="https://ghfast.top/https://github.com/vernesong/OpenClash/releases/download/v0.47.156/luci-app-openclash-0.47.156.apk" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |
| **Nikki** | 最新版 | OpenWrt 原生包 | <a href="https://github.com/nikkinikki-org/OpenWrt-nikki/releases/latest" target="_blank" rel="nofollow noopener noreferrer">Nikki 官方发布页 ↗</a> | - |
| **ClashBox (鸿蒙)** | `1.7.4` | 华为 HarmonyOS NEXT (.hap) | <a href="https://github.com/xiaobaigroup/ClashBox/releases/download/1.7.4/ClashBox_LTS_V1_unsigned.hap" target="_blank" rel="nofollow noopener noreferrer">ClashBox .hap</a> | <a href="https://ghfast.top/https://github.com/xiaobaigroup/ClashBox/releases/download/1.7.4/ClashBox_LTS_V1_unsigned.hap" target="_blank" rel="nofollow noopener noreferrer">加速镜像 ⚡</a> |


Clash Meta 内核以编译好的独立二进制形式分发，客户端则打包了图形操作界面与自动配置管线。请依据你的平台架构选择对应文件：

| 实验平台 | 推荐客户端 / 核心包 | 架构标识 | 适用实验范围 | 状态标记 |
| :--- | :--- | :--- | :--- | :--- |
| **Windows 10/11** | Clash Verge Rev (`.msi` / 便携版) | `x64` / `arm64` | 系统代理、TUN虚拟网卡、Service模式 | 本机实测 |
| **macOS (M1/M2/M3/M4)** | Clash Verge Rev (`.dmg`) | `aarch64` / `arm64` | 增强模式、DNS劫持、应用分流 | 本机实测 |
| **macOS (Intel)** | Clash Verge Rev (`.dmg`) | `x64` | 兼容旧款 Mac 实验 | 基于文档 |
| **Linux (无头服务器)** | Mihomo 独立核心 (`mihomo-linux`) | `amd64` / `arm64` | systemd 守护进程、透明网关、RESTful API | 本机实测 |
| **Android** | Clash Meta for Android (`.apk`) | `arm64-v8a` | VpnService 接入、后台保活、多分流 | 本机实测 |
| **iOS / iPadOS** | 兼容客户端（如 Shadowrocket / Stash） | `universal` | 规则转换、小范围配置导入 | 基于文档 |

## 下载后确认版本

下载完成后，不可直接启动运行，必须通过终端核验二进制文件的版本信息与 SHA256 哈希值。

## 准备工作
- 终端工具（PowerShell 7+ / macOS zsh / Linux bash）。
- 已下载的待测安装包或核心文件。

## 操作步骤

<div class="step-container">

  <div class="step-card" data-step="01">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">01</div>
    </div>
    <div class="step-body">
      <div class="step-title">执行版本查询指令</div>
      <div class="step-desc">在终端中定位到下载二进制目录，执行版本打印指令以核对编译器标识与内嵌特性列表：</div>
      
```yaml
mihomo -v
./mihomo -v
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>输出中必须包含 'Meta' 或 'Mihomo' 标识，并确认支持 gzip、gvisor、quic 等编译标签。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="02">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">02</div>
    </div>
    <div class="step-body">
      <div class="step-title">检验 SHA256 文件哈希</div>
      <div class="step-desc">防止在分发网络中出现安装包损坏或被第三方镜像恶意篡改：</div>
      
```yaml
shasum -a 256 ./mihomo-darwin-arm64
# Windows: Get-FileHash .\mihomo-windows-amd64.exe -Algorithm SHA256
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>核对输出的 64 位十六进制哈希字符串，确保与官方发版页面记录完全一致。</div>
</div>

    </div>
  </div>


  <div class="step-card" data-step="03">
    <div class="step-num-flip-wrapper">
      <div class="step-num-badge">03</div>
    </div>
    <div class="step-body">
      <div class="step-title">建立本地测试目录隔离</div>
      <div class="step-desc">为避免污染系统全局配置，建立专属实验工作区：</div>
      
```yaml
mkdir -p ~/clash-lab-workspace
cd ~/clash-lab-workspace
```
<div class="observation-box">
  <div class="observation-title">🔍 核心观察项</div>
  <div>将二进制文件与测试使用的 config.yaml 限制在独立目录，便于一键回退与清理。</div>
</div>

    </div>
  </div>

</div>

### 记录本轮输入、预期与实际输出

- **实验输入**：终端执行 `./mihomo -v`。
- **预期输出**：
  ```text
  Mihomo v1.18.9 darwin arm64 with go1.22.4
  Build tags: with_gvisor,with_quic,with_wireguard
  ```
- **实际观察记录**：内核正常识别 Apple Silicon 架构，各网络栈特性已成功编译入内。
- **回退与恢复方法**：若执行报错 `Bad CPU type in executable`，说明架构选错（如在 M 芯片下载了 x86 版本），直接删除该二进制文件并重新下载 arm64 构建包即可。

## 常见问题

<div class="faq-accordion-group">

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>下载地址为空或显示'待提供'怎样处理？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">本站坚决不分发未核实的第三方篡改镜像，所有实际下载 URL 均需用户根据官方出处登记。读者可在本站学习校验与实验流程，通过官方发布源获得干净安装包。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>为什么 Windows Defender 会误报？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">开源网络代理工具由于涉及注入虚拟网卡和监听本地端口，常被部分防病毒引擎列为风险软件。必须核对官方发版哈希，确认无篡改后添加排除项。</div>
  </div>

  <div class="faq-accordion-item is-open">
    <button class="faq-question-btn" type="button">
      <span>如何固定内核版本避免意外自动升级？</span>
      <div class="faq-icon-toggle">
        <span class="faq-bar-h"></span>
        <span class="faq-bar-v"></span>
      </div>
    </button>
    <div class="faq-answer-panel">在图形客户端（如 Clash Verge）设置中，关闭'自动更新核心'开关，采用本地手动替换核心二进制的方式进行精准实验。</div>
  </div>
</div>
