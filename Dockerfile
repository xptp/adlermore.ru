# Шаг 1: Сборка React-приложения
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Шаг 2: Финальный образ
FROM nginx:stable-alpine

# Установка зависимостей
RUN apk update && apk add openssl && rm -rf /var/cache/apk/*

# Копируем собранное приложение
COPY --from=build /app/build /usr/share/nginx/html

# Копируем SSL-сертификаты (используем архивные файлы)
COPY --from=build /app/nginx/ssl /etc/nginx/ssl

# Копируем конфиг Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Настройка прав
RUN chmod -R 755 /usr/share/nginx/html && \
    chmod -R 644 /etc/nginx/ssl/*

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
# //////////////
# FROM node:18-alpine as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:stable-alpine

# # Удаляем дефолтный конфиг Nginx
# RUN rm /etc/nginx/conf.d/default.conf

# # Копируем ваш кастомный конфиг
# COPY nginx.conf /etc/nginx/conf.d

# # Копируем собранное React-приложение
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80
# EXPOSE 443

# CMD ["nginx", "-g", "daemon off;"]