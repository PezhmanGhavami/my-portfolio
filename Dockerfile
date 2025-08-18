FROM node:24 AS builder
WORKDIR /app

# Copy package files ensuring proper line endings
COPY package*.json ./
COPY next.config.js ./

# Install dependencies
RUN npm ci

# Copy source code with explicit handling for Windows line endings
COPY . .
# Fix any potential Windows line ending issues in script files
RUN find . -type f -name "*.js" -exec dos2unix {} \; || true
RUN find . -type f -name "*.jsx" -exec dos2unix {} \; || true
RUN find . -type f -name "*.tsx" -exec dos2unix {} \; || true
RUN find . -type f -name "*.ts" -exec dos2unix {} \; || true

# Build the application
RUN npm run build

FROM node:24-slim AS runner
WORKDIR /app

# Install dos2unix utility
RUN apt-get update && apt-get install -y dos2unix && apt-get clean

# Create user
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
