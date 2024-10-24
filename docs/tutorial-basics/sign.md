---
sidebar_position: 1
---
# Signer une image sur CSAN

Comment signer votre image afin de garantir son authenticité.

## Utilisation de Cosign

:::note

Pré requis : vous devez avoir cosign installé et généré une paire de clé

:::

En local vous devez signer l'image présente sur CSAN avec votre clé.

Avec le nom du repo "test" et le nom de l'image, "image" :

```bash
cosign sign --key cosign.key csanhub.org/test/image
```