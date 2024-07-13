FROM node:alpine AS build

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . ./
RUN pnpm run build

CMD ["pnpm", "run", "dev"]