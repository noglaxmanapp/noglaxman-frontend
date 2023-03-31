FROM node:14.17.3-alpine as node

WORKDIR /usr/src/app/frontend

COPY package.json ./

RUN npm install

COPY ./public ./public
COPY ./src ./src

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]