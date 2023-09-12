FROM node:18-alpine

USER node

WORKDIR /home/node/app

## comando "sh -c npm install" -> inicia docker instalando node_modules
CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]