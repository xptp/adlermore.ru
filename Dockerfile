FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

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