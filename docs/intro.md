---
sidebar_position: 1
---

# CSAN : Comprehensive Software Archive Network

Le projet CSAN (Comprehensive Software Archive Network) est issu du groupe de travail CNRS / IN2P3 ComputeOps (Recherche et développement autour des conteneurs pour le calcul) : il est composé d'une vingtaine de personnes issues de divers instituts de l’ESRI et de mésocentres.

L'initiative du projet CSAN est de proposer à la communauté ESRI un catalogue d'applications scientifiques open-source prêtes à l'emploi et optimisées pour les centres de calcul nationaux et les mésocentres. Cette proposition part du constat que les applications scientifiques dans les différents mésocentres sont souvent les mêmes selon les secteurs (bio-info, physique, etc.). La plateforme CSAN permettra aux auteurs de logiciels d’y déposer les versions de leurs sources (ou de pointer vers des dépôts versionnés). Ensuite, le groupe d’experts de CSAN traitera ce code et analysera sa configuration de compilation et de déploiement, via des méthodes d’intégration et de développement continu, afin de le rendre accessible et installable sans effort sur différents systèmes d’exploitation.

## Utilisation

Visitez https://csanhub.org/

## Partenaires

* CNRS (IN2P3 - INS2I)
* INRAE
* Centrale Nantes / Mesocentre ICI
* Mésocentre de Montpellier
* Université de Montpellier
* IFB
* Guix

## Description du projet

Les conteneurs sont, depuis quelques années, devenus une nouvelle manière de distribuer des logiciels dans un environnement système spécifique. L'intérêt est la facilité avec laquelle il est possible de produire un environnement logiciel complexe puis le réutiliser ailleurs.

De nombreuses critiques fondées sont apparues sur cette nouvelle méthode de distribution. En effet, le nombre de vulnérabilités a augmenté surtout dans les strates du conteneur, contrairement à un package classique. Par ailleurs, l'environnement de construction et d'exécution du conteneur est déjà une source de vulnérabilité augmentant ainsi la surface d'attaque.

La communauté de l’enseignement supérieur, de la Recherche et de l’innovation (ESRI) dispose aujourd’hui de nombreuses ressources de calcul et d’entrepôts de données, répartis dans plusieurs centres nationaux et régionaux, des laboratoires, ou bien encore des plateformes type grille et cloud. L'idée aujourd’hui d'utiliser les conteneurs dans ces environnements hétérogènes a fait son chemin, de part leur portabilité, mais la plupart de ces centres sont encore en réflexion pour une généralisation de l'utilisation des conteneurs à la demande.

Dans la chaîne de distribution des conteneurs, un point central concerne le « hub », en l'occurrence la plateforme docker-hub[1] permet à n'importe qui de déposer une image et de la publier à l'ensemble de la communauté. Une personne expérimentée préfèrera toujours choisir une image dite « certifiée » offrant plus de garantie en stabilité, car souvent construite généralement par un éditeur important. Sur un autre type de hub, quay.io[2], un scan des images est régulièrement effectué permettant de chercher des vulnérabilités (CVE) dans des bases de données avec un rapport qui permet de voir les risques ou pas de déployer les images scannées. Côté calcul, il y a le singularity-hub[3] qui utilise la technologie de conteneurs Singularity[4], mais aujourd’hui il n’est plus maintenu officiellement.

Tous ces modèles ont des faiblesses en commun : ils sont tous centralisés (source d'attaque potentielle de type DDoS), ne proposent pas tous les mêmes fonctionnalités et services, ont des niveaux de sécurité plus ou moins forts et pour des périmètres d'utilisation différents. Afin de palier à ces dépendances, des structures institutionnelles et académiques proposent, à leur niveau, des aides à la construction, au déploiement ou à l'utilisation de conteneurs sur leurs ressources hébergées.

Aujourd’hui l’initiative du projet CSAN (Comprehensive Software Archive Network) est de proposer à la communauté ESRI un catalogue d'applications scientifiques open-source prêtes à l'emploi et optimisées pour les centres de calcul nationaux et les mésocentres. Le projet est composé d'une vingtaine de personnes issues de divers instituts de l’ESRI (CNRS, INRAE, INRIA, IFB, Université de Montpellier et Centrale Nantes) et de mésocentres (ceux de Montpellier et de l’institut de calcul intensif).

Cette proposition part du constat que les applications scientifiques dans les différents mésocentres sont souvent les mêmes selon les secteurs (bio-info, physique, etc.). La plateforme CSAN permettra aux auteurs de logiciels d’y déposer les versions de leurs sources (ou de pointer vers des dépôts versionnés). Ensuite, le groupe d’experts de CSAN traitera ce code et analysera la configuration, via des méthodes d’intégration et de développement continu, afin de le rendre accessible et installable sans effort sur différents systèmes d’exploitation.

En effet, dans le cadre de leurs analyses/simulations, les chercheurs et ingénieurs sont souvent amenés à installer eux-mêmes manuellement leurs propres programmes. Les sources de ces programmes se trouvent dans une forêt de sites web ou des dépôts de code publics et privés. Certains programmes sont empaquetés avec des outils dédiés (comme Brew, Conda, Spack, Guix, etc.) facilitant ainsi leur installation au niveau local. Mais cette diversité d’outils ajoute finalement des difficultés pour les utilisateurs et du travail supplémentaire pour les équipes de développement qui doivent se soumettre aux exigences spécifiques de ces outils et au suivi sans fin de leurs dernières versions au risque de laisser des brèches de sécurité et de négliger l’optimisation des codes. Cette étape chronophage fait que chaque programme supporte rarement plus de deux outils de packaging. Bien entendu, ce packaging peut être fait par de tierces personnes. Les programmes peuvent également être mis à disposition via des conteneurs sur une sorte de "Marketplace". Se pose alors le problème de qualité et de sécurité de ces solutions.

En effet, ces problèmes sont bien connus depuis des années par la communauté informatique. Des modèles de distributions éprouvés plus sécurisés et mieux contrôlés (QoS) existent ; c'est le cas par exemple des dépôts apt pour Debian ou encore ceux des Comprehensive Archive Network, tels que le CPAN[5] (Perl) ou le CRAN[6] (R) ou encore le CTAN[7] (TeX). De nombreux « miroirs » permettent de s'assurer que les ressources à télécharger sont toujours disponibles et accessibles rapidement.

Pour construire cette nouvelle base d’archives, celle-ci doit se baser sur un système de conteneurisation (type Singularity ou Docker) et éventuellement via un outil de packaging (type Guix ou Nix). En effet, la conteneurisation à elle seule ne peut apporter le principe de reproductibilité indispensable pour une science ouverte. Aussi le choix d’un outil de packaging comme Guix pourrait être motivé par le fait qu’il est l’un des rares à répondre au besoin de reproductibilité. Concernant Singularity, il est à ce jour la technologie de conteneurisation la plus répandue dans le monde HPC.

L’archive CSAN pourra ainsi se présenter sous la forme d’un portail de catalogue d’applications déployables dont chaque version renseigne des spécifications matérielles et logicielles (options de compilation, type de processeur, etc.) ainsi que les coordonnées d’un ou des mainteneur(s) et toutes les sources et recettes pour reproduire le package à partir de zéro. Les paquets pourront être consultés et évalués via une plateforme web sous forme d’un hub. Chaque paquet publié du catalogue devra être testé, optimisé et validé par un groupe d’experts composé d’un ou plusieurs référents scientifiques et techniques de manière à proposer à la communauté des applications vérifiées et validées dans des environnements de calcul scientifique identifiés.

Un premier démonstrateur basé sur le logiciel libre Harbor[8] a été mis en place, il propose d'ores et déjà le partage de conteneurs entre utilisateurs et équipes informatiques. Il permet de connecter plusieurs registres d'images, de répliquer l'image sur un autre registre, d'accéder de manière authentifiée au travers d'un annuaire LDAP, de définir des accès basés sur les rôles, de scanner et signer les images, de rajouter les étiquettes et d'y accéder par une API restful.

CSAN est aujourd'hui opérationnelle et accessible à l'adresse https://csanhub.org/. Un premier partenariat a été conclu avec la coopération du Mésocentre de Montpellier pour l'hébergement de ce service. Ainsi aujourd’hui, il est possible aussi bien pour un centre de calcul ou toute personne de confiance, de partager ses images de conteneurs avec les labels désirés, en indiquant par exemple une compatibilité avec un type d'architecture matérielle et logicielle, tout en publiant sur son propre registre sécurisé. Le registre étant ensuite relié à Harbor, permettant ainsi un partage et une capitalisation des pratiques. Par ailleurs, l'outil Harbor étant décentralisé, il sera possible de faire communiquer plusieurs Harbor, permettant ainsi un maillage bien plus large et une résilience plus forte de l'architecture.

Le portail CSAN offrira donc un service stratégique aux développeurs, aux utilisateurs finaux et aux administrateurs système. Ce service permettra d’aboutir à un gain de temps substantiel pour tous. Il permettra aussi une meilleure diffusion des logiciels produits tout en favorisant la notion de reproductibilité et de partage dans la communauté.