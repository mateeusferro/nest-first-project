FROM node:20.15-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn install --production && yarn cache clean

ENV NODE_ENV production

CMD ["node", "dist/main"]