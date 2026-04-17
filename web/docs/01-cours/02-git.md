---
description: Pondération 10%
---

# Git et TP1 (Partie 1)
## Qu'est-ce qu'un gestionnaire de code source

Un **gestionnaire de code source** (souvent appelé système de gestion de versions — VCS/SCM en anglais) est un outil qui permet de suivre **l’historique des modifications** d’un projet (code, documents, configuration), de **travailler à plusieurs** sans écraser le travail des autres, et de **revenir à une version antérieure** en cas d’erreur. C’est un peu comme un « **Ctrl+Z illimité** » et **collaboratif**, avec un **journal détaillé** de qui a changé quoi, quand, et pourquoi.

**Pourquoi?**

- **Suivre l'évolution de son code source.** Un système de contrôle de version est une catégorie de logiciel qui permet à une équipe de développement de gérer les changements du code source en tout temps. Il enregistre l’évolution du projet en gardant une trace de toutes les versions d’un fichier. Chaque fois qu’on valide des modifications, le gestionnaire de code source enregistre une image (snapshot) avec une référence afin d’y accéder par la suite. L’historique du projet consiste alors en une séquence d’images (snapshots). Git est l’exemple de logiciel de contrôle de versions décentralisé le plus populaire.

![](@site/static/img/R02/SCV.png)


- **Collaborer dans le cadre d'un projet d'équipe.** Lorsqu’on collabore dans le cadre d’un projet, les membres de l’équipe partagent le code source dans un référentiel ou encore dépôt distant (remote repository). Chaque membre peut avoir sa copie (clone) dans son dépôt local (local repository) pour ajouter de nouvelles fonctionnalités ou corriger des bogues et tester avant de le pousser (push) vers le dépôt distant. Le dépôt est une copie (clone) de l’ensemble des fichiers d’un projet dans un gestionnaire de versions.

![](@site/static/img/R02/DepotLocalEtDistant.png)

## Git et GitHub

### Git
**Git** est un **logiciel de gestion de code source**. C'est un outil essentiel pour la gestion des dépôts Git. C'est un logiciel qui est utilisé en ligne de commande. Cependant, il existe des logiciels graphiques plus conviviaux, tels que:
    - GitHub Desktop
    - GitKraken
    - Sourcetree
    - QGit
    - Tortoise Git

Pour les besoins du cours, nous allons utiliser **GitHub Desktop** que l'on peut retrouver ici: https://desktop.github.com/download/

:::tip
Notez que Git est intégré dans Visual Studio et Visual Code. Bien que très pratique, il est pertinent d'apprendre à utiliser un outil indépendant.
:::

### GitHub

GitHub est une **plateforme en ligne** qui utilise Git pour l'hébergement de dépôts. Ceci permet d'avoir une copie distante de nos projets et facilite la collaboration.

Pour y avoir accès, vous aurez besoin de créer votre compte étudiant.
https://education.github.com/pack


![](@site/static/img/R02/educationBenefits.png)

Vous pouvez vous référer à cette capsule vidéo pour vous guider:

- [Capsule vidéo compte GitHub](https://www.youtube.com/watch?v=dwauCcvJS7U&list=PLQUoc75aiWcQDZjP3Oy2XvG4f_QP0Ewer&index=3) : Créer mon compte GitHub et installer le Student Pack!

### Créer un dépôt


1.	Si ce n’est pas fait, vous devez créer un compte GitHub avec votre compte du cégep (matricule@cegepmontpetit.ca ). Regardez la capsule vidéo sur Moodle et accéder à cette page pour le créer et avoir le Student Service Pack : https://education.github.com/pack
2.	Connectez-vous à GitHub avec votre compte du cégep (matricule@cegepmontpetit.ca) 
3.	Créez un nouveau dépôt GitHub privé et nommez le selon ce format en mettant votre propre matricule. 
:::info
Exemple: **H26-2P6-R01Ex-MATRICULE** ou **H26-2P6-TP1-MATRICULE**
:::

![](@site/static/img/R02/nouveauDepot1.png)

4. Assurez-vous de choisir une **visibilité restreinte (🔒 Private)** et d'ajouter un fichier .gitignore selon le gabarit (template) **📄Visual Studio**.
![](@site/static/img/R02/nouveauDepot2.png)

:::note
Exceptionnellement, dans notre cours 2P6 on va utiliser ce format. Sinon, pour les autres cours, vous devez faire référence à la page Git du département et les consignes de votre professeur ! https://info.cegepmontpetit.ca/git
::: 

5.	Ajoutez votre professeur comme collaborateur à votre projet. (Sur votre repository, Onglet settings, Manage Access, Add a collaborator). Utilisez l’une des deux adresses courriel suivantes selon votre groupe :
    - Groupes 1010, 1020 	: jamil.gammoudi@cegepmontpetit.ca
    - Groupes 1030, 1040 	: david.gagne-leroux@cegepmontpetit.ca
    - Groupe 1050       	: philippe.martel@cegepmontpetit.ca
    - Groupe 1060           : jimmy.beaubien@cegepmontpetit.ca

![](@site/static/img/R02/inviterCollaborateurs.png)

### Cloner un dépôt
Il s'agit de faire une copie de travail de votre dépôt sur votre ordinateur. Cela permet de modifier des projets avec plusieurs fichiers, de travailler dans votre environnement de développement avant de sauvegarder vos modifications.

1. Cloner le dépôt sur votre ordinateur, le plus simple est de cliquer sur le bouton vert "Code" puis de choisir "Open with Github Desktop"

![](@site/static/img/R02/GitHubDesktopCloner.png)

2. Dans Github Desktop, choisir un dossier où cloner le repo

![](@site/static/img/R02/GitHubDesktopClonerVers.png)

### Enregistrer vos changements

Il est important de noter que vous travaillez sur un dépôt **LOCAL** et que vos modifications **DOIVENT** être poussées vers **GitHub**. Git va vous exiger un message décrivant les modifications apportées lorsque vous allez effectuer la commande "commit". 

Il est préférable de faire **plusieurs petits** "commits" au lieu d'un **~~gros~~**. 

Des indices pour déterminer quand pousser ses modifications:
- lorsqu'un **TODO est complété**
- atteintes de **points** dans la grille d'évaluation
- votre code **réussi de nouveaux tests** 
- ou tout simplement que vous devez **quitter**. 

Vous n'êtes pas obligé de réussir une fonctionnalité pour enregistrer vos changements, vous pouvez la terminer lors d'un prochain "commit". L'important, c'est documenter la progression.

Nous vous demandons de respecter la **convention** décrite sur le site web du programme: https://info.cegepmontpetit.ca/git

Pour ce faire:
1. Dans Github Desktop, vous verrez les fichiers modifiés
2. Vous pouvez ajouter un message pour expliquer les modifications
3. Cliquer sur "Commit to main"
4. Cliquer sur "Push origin" pour envoyer les modifications sur le serveur GitHub
5. Vous pouvez vérifier sur le site GitHub que les modifications ont bien été envoyées

:::danger
**ATTENTION** Dès que vous avez complété quelque chose d'utile, vous pouvez en faire un commit et le pousser sur GitHub. Cela vous permettra de ne pas perdre votre travail.
:::

### Les commandes de base

| Comamnde  | Description |
| --------- | ------------------ |
| **clone** | Crée une **copie locale** d'un dépôt Git existant. |
| **commit** | Crée un **noeud** dans le dépôt contenant les modifications apportées aux fichiers qui ont été placés à l'état "staged". Il faut spécifier un message aux changements apportés. |
| **branch** | Crée une **nouvelle branche** dans le dépôt. Ceci permet d'avoir une copie avec des changements isolés des autres branches. |
| **merge** | **Fusionne** une branche dans une autre. Cette opération peut être à l'origine de conflits que nous devons résoudre manuellement. |
| **push** | **Pousse** tous les noeuds locaux de la branche vers la branche du **dépôt distant**. Il est possible que cette opération produise des conflits. |
| **pull** | **Récupère** les modifications du **dépôt distant**. S'il y a une différence entre la branche locale et distante, les deux branches seront fusionnnées et une opération merge + commit se exécutée. |

## Liens utils
- [Lien vers GitHub](https://github.com/) : Lien vers GitHub
- [Lien vers GitHub Desktop](https://desktop.github.com/download/) : Télécharger GitHub Desktop
- [Capsule vidéo compte GitHub](https://www.youtube.com/watch?v=dwauCcvJS7U&list=PLQUoc75aiWcQDZjP3Oy2XvG4f_QP0Ewer&index=3) : Créer mon compte GitHub et installer le Student Pack!

