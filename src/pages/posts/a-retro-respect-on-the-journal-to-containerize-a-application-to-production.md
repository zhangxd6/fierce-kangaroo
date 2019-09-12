---
title: A retro-respect on the journal to containerize a application to production
subtitle: Containerize the application is just a small step
date: 2019-09-12T13:40:02.337Z
thumb_img_path: /images/docker-881x441.jpg
hide_header: false
template: post
---
* this is a living update

# Containerize the Application

# Setup the CI

  ### Hyper-v on windows server 2019 Build Agent does not work
      Once we have Dockfile and ready let it go through the CI. We have On-Premise Azure DevOps and initially the Docker build agent was provisioned with window server 2019 *VM*. However the application is targeting to run on Window Server 2016. Logically, we tried to turn on the **--isoliation=hyperv** to build the image. We got *failure in a Windows system call*. I think it is nest virtualization problem.
https://github.com/MicrosoftDocs/Virtualization-Documentation/issues/945

  ### purge older images from build machine
```
   docker image prune -force --filter until=240h
```

# Get Test Environments

# Push the button
