---
title: WSL2 and docker on dev machine
date: 2020-06-17T03:38:38.636Z
tags:
  - docker
excerpt: Steps to setup WSL and docker desktop to enable working with linux and
  windows container
hide_header: false
template: post
---
In my current development, I need Redis and rabbitmq containers in linux but they are consumed by windows application and containers. WSL provides a way to run linux and window containers at the same time. Here are the step to allow us to access both daemons from powershell.

This assumes the WSL2 is enabled and docker desktop is configured to take advantage of WSL.

## Enable ssh in WSL

1.  access wsl termial

2.  modify /etc/ssh/sshd_config

```
   # change port number greater than 1000
   Port 2222
  ...
   # enable publickeyauthentication
   PubkeyAuthentication yes
   # enable password 
   PasswordAuthentication yes
```

 3. start sshd

```
   sudo service ssh --full-restart
   sudo service ssh start
```

  4. get wsl ip looking for eth0

```
   ip addr 
```

 

  5. test ssh

in powershell

```
   ssh user@ip -p 2222
``

# set up public key authentication

 1. Generate key pair
 
```
   ssh-keygen -t rsa
```

 2. add key to ssh-agent
 
   * start ssh-agent
  
```
    start-service ssh-agent
```

   * mock sshd service

```
   sc.exe create sshd binPath=C:\Windows\System32\OpenSSH\ssh.exe
   start-service sshd
```

  * add key

```
   ssh-add
```
  
  3. copy public key to WSL

```(bash)
   cp /c/mnt/Users/userid/.ssh/id_rsa.pub ~/.ssh
   cat id_rsa.pub>>authorized_keys
``` 

  4. test public key access

```powershell
  
   ssh userid@ip -p 2222  
 
```

## setup docker context

1.  create config file at /Users/userid/.ssh folder

```
  Host wsl
     HostName 172.29.130.78
     User userid
     Port 2222
     IdentityFile ~/.ssh/id_rsa
```

2. test ssh config

```
  ssh wsl
```

3. create docker context

```
   docker context create wsl --docker host=ssh://wsl
```

4. switch context

```
   docker context use wsl
   docker info
```