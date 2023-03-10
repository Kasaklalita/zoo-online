FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 5713
CMD ["npm", "run", "dev"]