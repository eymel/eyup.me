FROM node:15-alpine

WORKDIR /home/node/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 8080

CMD  yarn start