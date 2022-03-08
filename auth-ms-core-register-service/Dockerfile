FROM node:12-alpine

WORKDIR /usr/app

COPY package.json .

EXPOSE PORT

RUN npm install --quiet

COPY . .
