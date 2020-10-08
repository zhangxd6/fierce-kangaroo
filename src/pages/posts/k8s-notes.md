---
title: K8s Notes
date: 2020-08-02T16:17:35.427Z
thumb_img_path: /images/1-segiea-gyxopsddaacu2ea.png
hide_header: false
template: post
---
## Create local cluster with k3d

```(bash) 
k3d  cluster create  --api-port 6550 -p 8888:80@loadbalancer  -s 3 -a 3 
```
## set current namespace

```(bash)
  kubectl context set-context --current --namespace "newnamespace"
```

## ConfigureMap

Command:

```(bash)
  kubectl create configmap map --from-literal APP_CONIFIG=hello
```

Yaml file

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: special-config
  namespace: default
data:
  special.how: very
```

* use config map

```(yaml)
pods/pod-multiple-configmap-env-variable.yaml 	
apiVersion: v1
kind: Pod
metadata:
  name: dapi-test-pod
spec:
  containers:
    - name: test-container
      image: k8s.gcr.io/busybox
      command: [ "/bin/sh", "-c", "env" ]
      env:
        - name: SPECIAL_LEVEL_KEY
          valueFrom:
            configMapKeyRef:
              name: special-config
              key: special.how
        - name: LOG_LEVEL
          valueFrom:
            configMapKeyRef:
              name: env-config
              key: log_level
  restartPolicy: Never
```

or

```(yaml)
pods/pod-configmap-envFrom.yaml 	
apiVersion: v1
kind: Pod
metadata:
  name: dapi-test-pod
spec:
  containers:
    - name: test-container
      image: k8s.gcr.io/busybox
      command: [ "/bin/sh", "-c", "env" ]
      envFrom:
      - configMapRef:
          name: special-config
  restartPolicy: Never 
```