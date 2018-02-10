FROM node:slim
ENV HTTP_PORT 3000
COPY . /app
WORKDIR /app
EXPOSE 3000 4000
CMD ["npm","start"]