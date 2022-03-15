FROM node:12-alpine

WORKDIR /usr/src/app

COPY . ./

RUN apk update && apk add \
    curl \
    yarn

RUN yarn install --production

RUN yarn build

EXPOSE 3334

COPY ./dist ./

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]
