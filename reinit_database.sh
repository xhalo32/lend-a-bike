#!/bin/bash

docker-compose stop database
docker-compose rm -fv database
docker-compose up -d database
