FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=pp5ere
ENV MYSQL_DATABASE=nodedb

COPY ./dump.sql /docker-entrypoint-initdb.d
