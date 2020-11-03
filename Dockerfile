FROM node:14-alpine
WORKDIR /martian-robots
COPY  package*.json ./
RUN npm install --only=prod
COPY . .
RUN npm run build
EXPOSE 3001

CMD ["npm", "run", "serve"]