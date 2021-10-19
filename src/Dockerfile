FROM node:latest
WORKDIR /source

COPY package.json /source
RUN npm install
COPY . /source

CMD ["npm", "start"]