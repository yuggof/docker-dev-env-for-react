FROM node:6.4.0

RUN adduser --disabled-password --gecos '' react

WORKDIR /home/react/app
COPY . .
RUN chown -R react:react .

EXPOSE 8080

USER react

CMD ["./node_modules/.bin/webpack-dev-server", "--host", "0.0.0.0", "--content-base", "app", "--inline"]
