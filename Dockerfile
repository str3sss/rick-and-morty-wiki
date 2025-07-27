FROM node:lts-alpine

ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY ./public ./public

# Устанавливаем зависимости для import-meta-env
RUN npm install -g @import-meta-env/cli@0.7.2

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

# Копируем файл с названиями публичных переменных окружения
COPY --chown=nextjs:nodejs .env.example ./

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"

# Перед запуском контейнера выполняем import-meta-env для инъекций переменных окружения в html и стартуем сервер
CMD ["sh", "-c", "bun server.js"]