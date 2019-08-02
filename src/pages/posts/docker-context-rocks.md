---
title: Docker Context Rocks
date: 2019-08-02T18:41:02.693Z
tags:
  - docker
hide_header: false
template: post
---
The Docker just release 19.03 version of docker engine. There is new plugin coming along with this release **context**

## What does it do?

This command helps users to manage contexts

## What **context**?

The developers or operators are not limit to work on a single docker host or cluster. Typical you will have you local host on your laptop and other environment you have to manage or connect to. Previously, you will have to prefix your command with bash command to reset the DOCK_HOST environment variable in order to interact with various host like

```
  DOCKET_HOST="some host" docker ps
```

Each host is your working context.

## How it help?

Ok, with this plugin, you will have a tool to manage different context with ease. 

you will create a context "remote" with

```
   docker context create remote\
      --docker host=remote address
```
now if you want to work with remote docker host to see what containers are running

firstly to switch the context

```
   docker context use remote
```

then
 
```
   docker ps
```

## Wait. There is one more trick.

*Question*: how you enable a docker host to able to securely connected to?

*You*: set certificate and .....

Ha!, there is an easy way to use context

```
  docker context create secured\
      --docker host=ssh:\\yoursshconfig
```

This take advantage of ssh user config assuming you has a setting in your .ssh/config file like

```
Host anyname
     HostName remote address
     User yourlogin
     Port 22
     IdentityFile ~/.ssh/id_rsa
```

Now, you can use the same command to switch docker cli operate on remote docker host securely without worry about blabla.





