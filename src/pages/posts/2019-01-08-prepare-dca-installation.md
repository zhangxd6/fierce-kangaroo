---
title: Prepare DCA Note - Installation
date: 2019-01-08T19:52:00.000Z
tags:
  - docker
template: post
---


<!--more-->

# Docker for window
# Docker for Mac
# Docker for Linux

~~~
  wget -qO- https://get.docker.com |sh
~~~

  ## add user to docker group

~~~
  sudo usermod -aG docker username
~~~

# Docker for Window server 2016

Microsoft announced that the PowerShell Gallery has deprecated Transport Layer Security (TLS) versions 1.0 and 1.1 as of April 2020 [ref](https://devblogs.microsoft.com/powershell/powershell-gallery-tls-support/). We will need to turn on the tls1.2
~~~
   [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12
   Install-Module DockerMsftProvider -Force
   Install-Package Docker -ProviderName DockerMsftProvider -Force
~~~

# Update Linux

~~~
   sudo apt-get update
   sudo apt-get remove docker docker-engine docker-ce docker.io -y
   wget -q0 https://get.docker.com |sh
   systemctl enable docker
~~~

#update window server

~~~
uninstall-module DockerMsftProvider -Force
install-module DockerMsftProvider -Force
install-package docker -providername dockermsftprovider -Update -force
~~~

# docker-compose

## window

~~~
 invoke-webrequest "https://github.com/docker/compose/releases/download/1.18.0/docker-compose-windows-x86_64.exe" -UserBasicParsing -Outfile $Env:ProgramFiles\docker\docker-compose.exe
~~~

## Linux

~~~
  curl -L "https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`usname -m` -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
~~~
