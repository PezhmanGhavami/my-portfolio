FROM node:24-alpine AS builder
WORKDIR /app

# Install build dependencies for native modules
RUN apk add --no-cache \
    build-base \
    python3 \
    vips-dev \
    libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies with platform-specific sharp
RUN npm ci
RUN npm install --platform=linux --arch=x64 --libc=musl sharp

# Copy source code
COPY . .

# Build the application
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache vips

# Create user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
