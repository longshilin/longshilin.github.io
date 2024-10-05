#!/bin/bash

# 定义提交信息
commit_message="Auto commit: $(date)"

git pull

# 添加所有变动的文件
git add .

# 提交变动
git commit -m "$commit_message"

# 推送到远程仓库
git push

# 打印成功消息
echo "Changes have been pushed to the remote repository."
