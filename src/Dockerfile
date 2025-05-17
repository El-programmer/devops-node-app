FROM node:14 as development

WORKDIR /app

COPY package.json .


RUN npm install;

COPY . .

EXPOSE 4001

CMD ["npm", "run", "dev"]

FROM node:14-slim as production

WORKDIR /app

COPY package.json .

ARG NODE_ENV=development

RUN npm install --only=production

COPY --from=development /app /app

COPY . .

EXPOSE 4000

CMD ["npm", "start"]