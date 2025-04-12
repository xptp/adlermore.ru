# Шаг 1: Сборка React-приложения
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Шаг 2: Финальный образ с Nginx и SSL
FROM nginx:stable-alpine


# Устанавливаем openssl
RUN apk update && apk add openssl && rm -rf /var/cache/apk/*
# Копируем собранное React-приложение
COPY --from=build /app/build /usr/share/nginx/html

# Копируем SSL-сертификаты (добавлено новое!)
COPY nginx/ssl /etc/nginx/conf.d/ssl

# Копируем конфиг Nginx (добавлено новое!)
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Открываем порты HTTP и HTTPS (изменено!)
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