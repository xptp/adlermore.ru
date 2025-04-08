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

# # Копируем билд React
# COPY --from=build /app/build /usr/share/nginx/html

# # Копируем конфиг Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Открываем порты для HTTP и HTTPS
# EXPOSE 80
# EXPOSE 443

# CMD ["nginx", "-g", "daemon off;"]