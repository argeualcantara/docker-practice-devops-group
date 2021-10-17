FROM node:current-alpine3.14

COPY ./package.json /app/package.json
COPY ./server.js /app/server.js

WORKDIR /app

RUN npm install

EXPOSE 8080

# CMD npm start

ENTRYPOINT ["npm", "start"]
