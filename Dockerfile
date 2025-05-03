# Шаг 1: Сборка React-приложения
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Шаг 2: Финальный образ с Nginx и SSL
FROM nginx:stable-alpine

# Устанавливаем openssl (для теста, можно удалить, если сертификаты уже готовы)
RUN apk update && apk add openssl && rm -rf /var/cache/apk/*

# Копируем собранное React-приложение
COPY --from=build /app/build /usr/share/nginx/html

# Копируем SSL-сертификаты (путь должен совпадать с nginx.conf!)
COPY nginx/ssl /etc/nginx/ssl

# Копируем конфиг Nginx (лучше в conf.d/)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Фиксим права
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

# Открываем порты
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
# .......................

# # Шаг 1: Сборка React-приложения
# FROM node:18-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Шаг 2: Финальный образ с Nginx и SSL
# FROM nginx:stable-alpine


# # Устанавливаем openssl
# RUN apk update && apk add openssl && rm -rf /var/cache/apk/*
# # Копируем собранное React-приложение
# COPY --from=build /app/build /usr/share/nginx/html

# # Копируем SSL-сертификаты (добавлено новое!)
# # COPY nginx/ssl /etc/nginx/conf.d/ssl

# # Копируем конфиг Nginx (добавлено новое!)
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# # Открываем порты HTTP и HTTPS (изменено!)
# EXPOSE 80 443

# CMD ["nginx", "-g", "daemon off;"]
