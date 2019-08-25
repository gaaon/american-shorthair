FROM node:12.9.0

WORKDIR /deploy

COPY package.json package-lock.json ./
RUN npm i

COPY . .
RUN npm test
RUN npm run build

CMD ["npm", "start"]