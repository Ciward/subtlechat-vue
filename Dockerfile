# 使用官方的 Node.js 14 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json (如果有) 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制当前目录下的所有文件到工作目录
COPY . .

# 构建 React 项目（生产环境时才需要）
RUN npm run build

# 对外暴露的端口号
EXPOSE 3000

# 运行 React 项目
CMD ["npm", "run", "serve"]