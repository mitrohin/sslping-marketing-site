# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
ARG VITE_DASHBOARD_URL=https://dashboard.sslping.io
ENV VITE_DASHBOARD_URL=${VITE_DASHBOARD_URL}
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.30.4-alpine
COPY --chown=101:101 deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 deploy/nginx/security-headers.inc /etc/nginx/conf.d/security-headers.inc
COPY --from=build --chown=101:101 /app/dist /usr/share/nginx/html
USER 101:101
EXPOSE 8080
