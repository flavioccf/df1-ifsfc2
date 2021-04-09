FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@7.5.6

# ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.

# USER node

# WORKDIR /home/node/app


WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY . /app/
RUN npm install --silent
# RUN npm install react-scripts@3.3.1 -g --silent
# Inicializa a aplicação
CMD ["npm", "start"]