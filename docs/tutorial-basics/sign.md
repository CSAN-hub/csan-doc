---
sidebar_position: 1
---
# Signer une image sur CSAN avec Cosign

Comment signer votre image afin de garantir son authenticité en quelques étapes.

## Installer Cosign

Pour installer Cosign, vous devez d'abord installer le binaire sur votre machine. Pour cela, consultez la [documentation officielle](https://docs.sigstore.dev/cosign/system_config/installation/).

## Génerez votre paire de clé d'authentification

```
cosign generate-key-pair
```

Il faut entrer un mot de passe pour protéger la clé privée, puis il créera :

cosign.key : la clé privée

cosign.pub : la clé publique

## Signer une image avec la clé

:::note
Pré requis : vous devez etre connecté à CSAN avec la commande `docker login https://csanhub.org` et votre clé API (disponible dans le profil utilisateur CSAN).
:::

En local vous devez signer l'image présente sur CSAN avec votre clé.

Avec le nom du repo "test" et le nom de l'image, "image" :

```bash
cosign sign --key cosign.key csanhub.org/test/image
```
