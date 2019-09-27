---
title: Why my docker won't started in Windows Server 2016 VM
date: 2019-09-26T13:42:10.290Z
thumb_img_path: /images/docker-881x441.jpg
tags:
  - docker
  - windows
  - troubleshooting
hide_header: false
template: post
---


We have the legacy application containerized and now we are trying to establish our CI/CD pipeline to have it deployed to our Dev cluster. Obviously, we will need the docker daemons running on all the host VMs. but we have a problem.



```

HNS failed with error : {Object Exists} An attempt was made to create an object and the object name already exists

```



Umm, what is going on?



Let's try



```

  Get-ContainerNetwork

```



Nothing returned.



Well, how about



```

   dockerd -D

```

![](/images/troubleshoot.png)

Looks like the call to window OS network api failed.

A few google on the similar issues this moby issue [27984]( 
https://github.com/moby/moby/issues/27984#issuecomment-280805779) provide the solution for me.


```
   mofcomp C:\Windows\System32\wbem\NetNat.mof 
```

wait a second, it doesn't work for my VM

let's try this

```
Stop-Service hns
del C:\ProgramData\Microsoft\Windows\HNS\HNS.data
Start-Service hns
```

OK it works now.
