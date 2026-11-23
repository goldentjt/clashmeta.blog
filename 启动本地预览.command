#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "========================================================"
echo " 🚀 clashmeta.blog 本地教学实验手册预览服务启动中..."
echo " 🌐 本地访问地址: http://localhost:4000"
echo " 💡 提示: 浏览器将自动打开；关闭此终端窗口即可停止服务。"
echo "========================================================"

# 等待服务就绪后自动在默认浏览器中打开
(sleep 1.5 && open "http://localhost:4000") &

# 启动 Docusaurus 静态网站服务器
npx docusaurus serve --port 4000
