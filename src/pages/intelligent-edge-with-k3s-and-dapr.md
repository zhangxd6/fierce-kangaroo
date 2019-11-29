---
title: 'Intelligent edge with K3s and Dapr '
template: page
---
\# Create k3s Cluster

1. k3d create to create a new single-node cluster (docker container)

2. export KUBECONFIG=$(k3d get-kubeconfig) to make kubectl to use the kubeconfig for that cluster

3. execute some commands like kubectl get pods --all-namespaces



\# Dapr runtime

\`\``

dapr init --kubernetes

\`\``

\#  Create and Configure a State Store 

1. Install Redis into your cluster: helm install stable/redis --name redis.

2. get our Redis password,

\`\``

kubectl get secret --namespace default redis -o jsonpath="{.data.redis-password}" | base64 --decode

\`\``

3. 



\`\``yml

apiVersion: dapr.io/v1alpha1

kind: Component

metadata:

  name: statestore

spec:

  type: state.redis

  metadata:

\- name: redisHost

\    value: redis-master:6379

\- name: redisPassword

\    value: KDOT6e76EU

\`\``



\#  dashboard

https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/

\`\``

kubectl describe secret -n kube-system  (get service account token)

 kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta6/aio/deploy/recommended.yaml

  kubectl proxy

\`\``
