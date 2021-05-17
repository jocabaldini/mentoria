# https://docs.docker.com/language/nodejs/build-images/
FROM node:latest

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

CMD [ "npm", "run", "start" ]
