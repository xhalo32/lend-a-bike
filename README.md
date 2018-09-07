# Lend-a-Bike

This is a backend and a frontend server for lending bikes.

### Usage & Requirements

You need
- nodejs (npm)
- docker
- docker-compose

Change the primary group of the user
- `usermod -aG docker <USERNAME>`
- `newgrp docker`

To load up the server
- Goto `/api` and run `npm i`
- Goto `/` and start server with `docker-compose up`
