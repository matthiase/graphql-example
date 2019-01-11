FROM node:11.6-alpine

WORKDIR /usr/local/api

COPY package.json .
RUN yarn install
COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
