FROM node:12.9.1-alpine as builder

WORKDIR /deploy

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

CMD ["npm", "start"]
