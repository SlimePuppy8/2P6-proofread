---
title: 🟢 HeritageClassique
---
# 🧪 Labo 11.1A – 🟢 HeritageClassique

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R22-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---
### Télécharger la solution contenant les différents exercices de ce laboratoire.

Disponible ici 👉 [Laboratoire11_1](../../static/files/laboratoires/Laboratoire11_1.zip)

---

### 🎯 Objectif 
L’objectif de cet exercice est de vous familiariser avec :

* Se familiariser avec le concept d'héritage

### 🛠️ Instructions

Définir une classe **`Personne`** et ensuite dériver deux autres classes. Une classe **`Employé`** et une classe **`Étudiants`**.

### 📋 Structure des classes
Voici les classes et leur structure que vous devrez créer:
![Diagramme des classes](@site/static/img/R22/heritageClassique.png)

### 📋 Liste des TODOs à compléter:

Complétez les TODOs du fichier **`FrmPrincipal.cs`**  :

- TODO 01 : Vous devez définir 3 classes. La classe Personne avec uniquement un nom et une date de naissance, la classe Etudiant qui devra hériter de la classe Personne et ajouter une propriété Matricule. Finalement définir la classe Employe qui devra également hériter de la classe Personne et ajouter la propriété salaire.
- TODO 02 : Enlever les commentaires ci-dessous et faire fonctionner le code
- TODO 03 : Ajouter des méthodes ToString() dans chacune de vos classes afin de ne pas répéter le code.