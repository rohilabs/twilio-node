FROM node:14

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY lib ./lib
COPY spec ./spec
COPY examples ./examples
COPY index.ts package.json babel.config.js tsconfig.json ./

RUN npm config set unsafe-perm true # Needed to run prepublish as root.

RUN npm install . --include=dev
RUN npm install -g .
