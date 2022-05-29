# Docker Commands

1. Build `frontend` image

```
docker build -f Dockerfile.dev -t react-ts-temp .
```

2. Run Image

```
docker run -p 3000:3000 react-ts-temp
```

3. Run Image with [Volume Mount](https://docs.docker.com/get-started/06_bind_mounts/)

```
docker run -p 3000:3000 -v /app/node_modules -v "$(pwd):/app" react-ts-temp
```

If using the `-v /app/node_modules` flag, you don't need to install `node_modules` folder. It means that not to take reference for `node_modules` in the actual directory.

4. Run `dev` or `prod` using docker-compose

```
docker-compose up --build dev     # run only dev   
docker-compose up --build prod    # run only prod
```

Remove the `--build` flag if you don't need to rebuild the image before running it. While running `docker-compose` the `Dockerfile` must be in the root directory that contains the `src` for your code, else it would throw an error.

5. Run Production build on [nginx](https://hub.docker.com/_/nginx)

```
docker build -t nish1896/react-ts-temp .
```

Now run this generated image

```
docker run -p 8080:80 nish1896/react-ts-temp
```

6. Run [docker-compose](https://docs.docker.com/compose/compose-file/)

```
docker-compose up --build
```

