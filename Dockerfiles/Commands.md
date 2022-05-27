# Docker Commands

1. Build `frontend` image

`docker build -f Dockerfiles/Dockerfile.frontend -t react-ts-temp .`

2. Run Image

`docker run -p 3000:3000 react-ts-temp`

3. Run Image with [Volume Mount](https://docs.docker.com/get-started/06_bind_mounts/)

`docker run -p 3000:3000 -v /app/node_modules -v "$(pwd):/app" react-ts-temp`

If using the `-v /app/node_modules` flag, you don't need to install `node_modules` folder. It means that not to take reference for `node_modules` in the actual directory.

4. Run Production build on [nginx](https://hub.docker.com/_/nginx)

`docker build -f Dockerfiles/Dockerfile.feBuild -t nish1896/react-ts-temp .`

Now run this generated image

`docker run -p 8080:80 nish1896/react-ts-temp`