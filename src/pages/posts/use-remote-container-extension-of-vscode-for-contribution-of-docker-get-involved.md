---
title: "Use remote container extension of VSCode for contribution of docker
  get-involved "
date: 2021-03-20T17:12:15.676Z
thumb_img_path: /images/events.png
hide_header: false
template: post
---
I was creating a "Docker for .Net Developer" handbook for [docker get-involved ](https://docker.github.io/get-involved/)site. The site is built using Hugo, and I wanted to keep my laptop from the cluster of various development tools. Naturally, I gravitated to use docker and VScode. 

\## Remote Docker Extension



VScode has this \*\*Remote Docker\*\* extension. You can specify your container and map your local folder into the container, thus providing the same experience to develop an app locally but without installing lot of tools on your dev machine. However, the template shipped with extension does not have one for Hugo. Fortunately, you can provide your Dockerfile for your use case.



\## Dockerfile for Get-Involved Project



Get-Involved recommends Hugo version 0.75.0 or later. I chose the earliest one for my Dockerfile

\`\``

\# Update the NODE_VERSION arg in docker-compose.yml to pick a Node version: 10, 12, 14

FROM klakegg/hugo:0.75.1-ext-ubuntu

\# Hugo dev server port

EXPOSE 1313

\`\``

\## devcontainer.json

Now we will need to tell vscode to use by providing the devcontainer.json

\`\``{

"name": "Hugo (Community)",

"build": {

"dockerfile": "Dockerfile",

},

// Set \*default\* container specific settings.json values on container create.

"settings": {

"terminal.integrated.shell.linux": "/bin/bash"

},

// Add the IDs of extensions you want installed when the container is created.

"extensions": [

"bungcip.better-toml",

"davidanson.vscode-markdownlint"

],

// Use 'forwardPorts' to make a list of ports inside the container available locally.

"forwardPorts": [

1313

]

}

\`\``

\## How about Multiple Containers

A single Dockerfile fit our site project pretty well. In my handbook, we are creating a web app that communicates with a database. Is it possible to use Remote Docker extension for that scenario? Sure, the extension provides a way to use compose file just for this exact scenario.

Here is my compose file for the[ handbook ](https://github.com/zhangxd6/get-involved/tree/master/content/en/docs/CommunityLeaders/EventHandbooks/Dotnet)

\`\``

services:

db:

image: postgres

restart: always

environment:

POSTGRES_PASSWORD: example

volumes:

\- postgres-data:/var/lib/postgresql/data

adminer:

image: adminer

restart: always

ports:

\- 8080:8080

app:

build:

context: ..

dockerfile: .devcontainer/Dockerfile

command: /bin/sh -c "while sleep 1000; do :; done"

volumes:

\# Mounts the project folder to '/workspace'. The target path inside the container

\# should match what your application expects. In this case, the compose file is

\# in a sub-folder, so you will mount '..'. You would then reference this path as the

\# 'workspaceFolder' in '.devcontainer/devcontainer.json' so VS Code starts here.

\- ..:/workspace:cached

volumes:

postgres-data:

\`\``

the dev Dockerfile

\`\``

\# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.163.1/containers/dotnet/.devcontainer/base.Dockerfile

\# \[Choice] .NET version: 5.0, 3.1, 2.1

ARG VARIANT="5.0"

FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

\# \[Option] Install Node.js

ARG INSTALL_NODE="true"

ARG NODE_VERSION="lts/*"

RUN if \[ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

\`\``

and the devcontainer.json

\`\``

{

"name": "dotnet& PostgreSQL",

"dockerComposeFile": "docker-compose.yaml",

"service": "app",

"workspaceFolder": "/workspace",

// Set \*default\* container specific settings.json values on container create.

"settings": {

"terminal.integrated.shell.linux": "/bin/bash",

"sqltools.connections": [{

"name": "Container database",

"driver": "PostgreSQL",

"previewLimit": 50,

"server": "db",

"port": 5432,

"database": "postgres",

"username": "postgres",

"password": "example"

}],

},

// Add the IDs of extensions you want installed when the container is created.

"extensions": [

// "ms-python.python",

"ms-dotnettools.csharp",

"mtxr.sqltools",

"mtxr.sqltools-driver-pg"

],

"shutdownAction": "stopCompose"

}

\`\``