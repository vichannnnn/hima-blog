FROM node:18 AS base

FROM base AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN pnpm run build
