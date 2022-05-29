# Base Image
FROM node:17-alpine3.14 as phase1

WORKDIR /app

# Run yarn only if package.json changes
COPY package.json .
RUN yarn install

# Phase 1 - Build our app
COPY . .
RUN yarn build

# Phase 2 - Get the Build and host on nginx
FROM nginx:1.21.6-alpine
COPY --from=phase1 /app/build /usr/share/nginx/html
