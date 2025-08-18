FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN apk add --no-cache build-base python3
RUN npm i --platform=linux --libc=musl --arch=x64
RUN npm i sharp

FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN apk add --no-cache build-base python3
RUN npm i --platform=linux --libc=musl --arch=x64
RUN npm i sharp
RUN npm rebuild sharp lightningcss --platform=linux --libc=musl --arch=x64
COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
