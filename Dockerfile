# syntax = docker/dockerfile:experimental
FROM node:12.9-alpine as builder

WORKDIR /deploy

COPY package*.json ./
RUN --mount=type=cache,target=/deploy/node_modules npm i

COPY . .
RUN npm run build

FROM node:12.9-alpine

ENV NODE_ENV=production

WORKDIR /deploy

COPY package*.json ./
RUN --mount=type=cache,target=/deploy/node_modules npm i

COPY . .
COPY --from=builder /deploy/.next ./.next

CMD ["npm", "start"]
