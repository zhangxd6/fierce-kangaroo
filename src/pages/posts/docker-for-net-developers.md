---
title: Docker for .Net Developers
date: 2021-09-28T02:27:34.577Z
thumb_img_path: /images/net.png
tags:
  - docker
  - .net
hide_header: false
template: post
---
# Setup Environment

This section describes the hardware and software needed for this workshop, and how to configure them.
This workshop is designed for a BYOL (Bring Your Own Laptop) style hands-on-lab.

## Hardware & Software

- Memory: At least 4 GB+, strongly preferred 8 GB
- Operating System: Mac OS X (10.10.3+), Windows 10 Pro+ 64-bit, Ubuntu 12+, CentOS 7+.

## Install Docker

Docker runs natively on Mac, Windows and Linux.
This lab will use Docker Desktop
Download the Docker Descktop for your machine from the [Docker Website](Docker Desktop for Mac and Windows | Docker).



## Other Software

The softwares in this section are specific to certain parts of the workshop.
Install them only if you plan to attempt them.

- Install [git](https://git-scm.com)
- Install [Go](https://dotnet.microsoft.com)
- Download and install a code editor of your choice:
   - [Visual Studio Code](https://code.visualstudio.com/download)


S.No. | Name of Software | Link to Follow | 
:------------ | :-------------| :-------------|
1 |  Git | [Link](https://git-scm.com)  |
2 |  Dotnet | [Link](https://dotnet.microsoft.com)  |
3 |  Visual Studio Code | [Link](https://code.visualstudio.com/download)  |

## Download Dotnet 

You can download the latest version of Dotnet (5.0) from the below links:

- [Windows](https://download.visualstudio.microsoft.com/download/pr/78a6328f-f563-4a7f-a478-3ed0f2ce8ec6/5beb762f64d8a018a5b9e590bc1531e0/dotnet-sdk-5.0.201-win-x64.exe)
- [MacOS ](https://download.visualstudio.microsoft.com/download/pr/de613120-9306-4867-b504-45fcc81ba1b6/2a03f18c549f52cf78f88afa44e6dc6a/dotnet-sdk-5.0.201-osx-x64.pkg)
- [Linux](https://docs.microsoft.com/dotnet/core/install/linux)


### Check Installation


After you've installed, open a new terminal and run the following command:

```bash
dotnet

```

You should be able to see the output like

```
Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
-h|--help         Display help.
--info            Display .NET information.
--list-sdks       Display the installed SDKs.
--list-runtimes   Display the installed runtimes.

path-to-application:
The path to an application .dll file to execute.

```