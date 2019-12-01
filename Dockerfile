#FROM node
#COPY . /app
#WORKDIR /app
#RUN npm install --registry=https://registry.npm.taobao.org
#EXPOSE 3000
#CMD npm run dev

FROM nginx
COPY dist/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
