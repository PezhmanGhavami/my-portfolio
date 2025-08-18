FROM node:24 AS deps
WORKDIR /app
COPY package.json ./
RUN npm i
RUN npm i sharp

FROM node:24 AS builder
WORKDIR /app
COPY package.json ./
RUN npm i 
RUN npm i sharp
COPY . .
RUN npm run build

FROM node:24 AS runner
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
