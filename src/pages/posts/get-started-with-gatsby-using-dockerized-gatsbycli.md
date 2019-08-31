---
title: Get started with Gatsby using dockerized Gatsbycli
date: 2019-08-31T04:01:56.724Z
tags:
  - Docker
  - Gatsby
excerpt: >-
  Gatsby is a popular static site generator based on React. In this post, I will
  create the docker image for Gatsby cli and use it to facilitate the
  development of a Gatsby site. 
hide_header: false
template: post
---
Gatsby is a popular and powerful static site generator based on React. It provides a lot of best pratices out of the box to generate fast site with React and GraphQL for a lot use cases. 

Docker provides an excellent way to package your application with its dependencies. It provides a nice isolation for different tools/frameworks for local development so that avoids the possible conflicts between different tools or versions.

## Dockerize Gatsby Cli

We are going to using alpine as a base image to host Gatsby Cli. 

```(Dockerfile)
FROM node:10.16.3-alpine
EXPOSE 8000
RUN apk update && apk upgrade && \
    apk add --no-cache fftw-dev gcc g++ make libc6-compat && \
    apk add --no-cache python && \
    apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main vips-dev &&\
    apk add --no-cache bash git yarn openssh &&\
    npm install --global gatsby --no-optional gatsby-cli &&\
    rm -rf /var/cache/apk/*

WORKDIR /site
ENTRYPOINT [ "gatsby" ]
```
Let build the image 

```(sh)
  docker build -t zhangxd6/gatsbycli .
```
 you can pull the image from my docker hub repository too

```
  docker pull zhangxd6/gatsbycli
```

## Use the image

Let's create new site

```(sh)
  docker run -ti --rm -v $(pwd):/site gatsbycli new demo
```

it will create the site *demo* to the folder. Let change the foler to *demo*

```(sh)
  cd demo
```

Now let start the dev of site

```(sh)
  docker run -it --rm -v $(pwd):/site  -p 8000:8000 gatsbycli develop -H 0.0.0.0 
```

**Note**: the '-H 0.0.0.0' is necessary to be able to access the site running inside container through local port '8000'

Enjoy Coding.

