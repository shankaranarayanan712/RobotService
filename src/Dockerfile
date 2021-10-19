FROM node:9-slim
WORKDIR /source

COPY package.json /source
RUN npm install
COPY . /source

CMD ["npm", "start"]