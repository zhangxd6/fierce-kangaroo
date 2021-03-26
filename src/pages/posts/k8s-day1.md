---
title: K8s - Day1
date: 2021-03-25T03:02:02.299Z
tags:
  - k8s
  - cka
hide_header: false
template: post
---
# Create the k8s cluster



## Prepare VM

We are going to use 1 manager and two worker node with vagrant and virtualbox

```vagrantfile

manager_ip = "10.0.3.2"



Vagrant.configure(2) do |config|



config.vm.define "manager" do |manager|

manager.vm.hostname = "manager"

manager.vm.box = "bento/ubuntu-18.04"

manager.vm.network "private_network", ip: manager_ip


manager.vm.provision "setup-hosts", :type => "shell", :path => "setuphost.sh"

manager.vm.provider "virtualbox" do |v|

v.cpus = 2

v.memory = 2048

end

end



(1..2).each do |i|

config.vm.define "worker-#{i}" do |worker|

worker.vm.hostname = "worker-#{i}"

worker.vm.box = "bento/ubuntu-18.04"

worker.vm.network "private_network", ip: "10.0.3.#{i+2}"

worker.vm.provision "setup-hosts", :type => "shell", :path => "setuphost.sh"



worker.vm.provider "virtualbox" do |v|

v.cpus = 1

v.memory = 1024

end

end

end

end

```

and setuphost.sh file

```

#!/bin/bash

set -e

sed -e '/^.\*ubuntu-bionic.\*/d' -i /etc/hosts

cat >> /etc/hosts <<EOF

10.0.3.2 manager

10.0.3.3 worker-1

10.0.3.4 worker-2

EOF



sudo apt-get update && sudo apt-get install -y apt-transport-https curl

curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list

deb https://apt.kubernetes.io/ kubernetes-xenial main

EOF

sudo apt-get update

sudo apt-get install -y kubelet kubeadm kubectl



sudo swapoff -a



sudo modprobe br_netfilter

sudo sysctl net.bridge.bridge-nf-call-iptables=1



wget -qO- https://get.docker.com |sudo sh

sudo usermod -aG docker vagrant
```



## using kubeadm

###setup manager

```
vagarnt ssh manager
```

then
```
sudo kubeadm init --apiserver-advertise-address 10.0.3.2 --pod-network-cidr=10.244.0.0/16
``

### add worker node

```
sudo kubeadm join 10.0.3.2:6443 --token w4rb61.5d060zvida46931v \
    --discovery-token-ca-cert-hash sha256:0d97e52f20db88a392818baa85d57fb32f9fbb8f1e3c2d635e85d14361ef8868
```

### add cni

```shell
kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml
```

