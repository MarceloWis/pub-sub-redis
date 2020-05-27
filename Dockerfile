FROM node:latest

WORKDIR /var/www
RUN npm install

CMD [ "yarn", "nodemon", "index.js"]
