---
sidebar_position: 1
---

# Télécharger un conteneur

Comment récuperer une image depuis CSAN et lancer un conteneur


## Docker

Connection en ligne de commande

```
docker login https://csanhub.org
```

Vous pouvez maintenant récuperer l'image

```
docker pull https://csanhub.org/library/ubuntu:14.04
```

:::note

Harbor ne prend en charge que l'API Registry V2. Vous devez utiliser le client Docker 1.6.0 ou une version plus récente pour pousser et tirer des images. 

:::

## Singularity, Apptainer

Connection en ligne de commande

```
apptainer registry login --username myuser docker://csanhub.org
```
Si la connection est validée, la commande liste doit renvoyer la réponse suivante :

```
apptainer registry list
URI                   SECURE?
docker://csanhub.org  ✓
```


Vous pouvez maintenant récuperer l'image


```
apptainer pull image.sif docker://csanhub.org/library/image:latest
```

:::note

Il est important que les utilisateurs sachent que la commande de connexion au registre stockera les informations d'identification ou les jetons fournis en clair dans leur répertoire personnel.

:::