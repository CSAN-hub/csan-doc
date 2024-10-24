---
sidebar_position: 1
---
# Partager votre code avec CSAN

Vous avez un conteneur ou juste un code que vous souhaitez partager ?

## Avec Docker

Soit une image Docker nommée image et un repo CSAN nommé library :

Connection a CSAN

```bash
docker login https://csanhub.org
```

Tager votre image

```bash
docker tag image csanhub.org/library/image
```

et envoyer l'image 

```bash
docker push csanhub.org/library/image
```