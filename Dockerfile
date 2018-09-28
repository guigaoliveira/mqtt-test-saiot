FROM node:9.4.0-alpine

RUN apk --no-cache update && apk --no-cache upgrade && \
    apk --no-cache add tzdata openntpd && \
    cp /usr/share/zoneinfo/America/Recife /etc/localtime && \
    echo 'America/Recife' > /etc/timezone

ENV PORT=8000 HOME=/api/

WORKDIR $HOME

COPY package.json package-lock.json $HOME

RUN npm i

COPY . $HOME

CMD [ "npm", "start" ]

EXPOSE ${PORT}
