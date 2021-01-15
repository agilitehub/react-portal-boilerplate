FROM node:12.18.4-alpine
ENV PORT 80
EXPOSE 80

WORKDIR /app
COPY . .

RUN npm install --production
CMD node app.js