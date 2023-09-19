FROM node:17
WORKDIR .
COPY package*.json ./
run yarn
copy . .
EXPOSE 8082
CMD [ "node", "app.js" ]