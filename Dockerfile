FROM node
ENV HTTP_PORT 3000
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD ["npm","start"]