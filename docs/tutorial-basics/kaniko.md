---
sidebar_position: 1
---
# Construire une image Docker avec Kaniko en mode non-root

Voici un exemple de configuration .gitlab-ci.yml pour construire une image Docker avec Kaniko, sans avoir besoin d'un démon Docker (donc compatible avec des runners Kubernetes ou sans privilèges).

CSAN propose une version de Kaniko maintenue par [Chainguards](https://github.com/chainguard-forks/kaniko) et disponible via l'image `csanhub.org/kaniko/` :

```yaml

stages:
  - build

build-image:
  stage: build
  image:
    name: csanhub.org/kaniko/kaniko:1.25.15-debug
    entrypoint: [""]
  script:
    - mkdir -p /kaniko/.docker
    - echo "{\"auths\":{\"${CI_REGISTRY}\":{\"auth\":\"$(printf "%s:%s" "${CI_REGISTRY_USER}" "${CI_REGISTRY_PASSWORD}" | base64 | tr -d '\n')\"}}}" > /kaniko/.docker/config.json
    - /kaniko/executor
      --context "${CI_PROJECT_DIR}"
      --dockerfile "${CI_PROJECT_DIR}/Dockerfile"
      --destination "${CI_REGISTRY_IMAGE}:${CI_COMMIT_SHORT_SHA}"
      --cache=true
      --cache-repo="${CI_REGISTRY_IMAGE}/cache"
  rules:
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'

```

## Points clés

### Variables d'authentification

Dans le GitLab Container Registry intégré, les variables CI_REGISTRY, CI_REGISTRY_USER, CI_REGISTRY_PASSWORD et CI_REGISTRY_IMAGE sont déjà fournies automatiquement par GitLab.

Pour un registre externe (Docker Hub, ECR, etc.), il faut définir ses propres variables protégées dans Settings > CI/CD > Variables.

### Cache pour accélérer les builds

Pour activer le cache de layers Kaniko :

```yaml
- /kaniko/executor
    --context "${CI_PROJECT_DIR}"
    --dockerfile "${CI_PROJECT_DIR}/Dockerfile"
    --destination "${CI_REGISTRY_IMAGE}:${CI_COMMIT_SHORT_SHA}"
    --cache=true
    --cache-repo="${CI_REGISTRY_IMAGE}/cache"
```

### Tags multiples / versioning

On pousse souvent au moins deux tags : un tag basé sur le commit (traçabilité) et latest (ou un tag de version basé sur CI_COMMIT_TAG si déclenchements sur des tags Git).

### Build-args

Pour passer des arguments au Dockerfile :

```yaml
    --build-arg VERSION=${CI_COMMIT_SHORT_SHA}
```