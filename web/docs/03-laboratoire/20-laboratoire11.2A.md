---
title: Héritage
---
# 🧪 Labo 11.2A 

:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R22-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---
### Télécharger la solution de départ contenant les différents exercices du laboratoire 11.2A

Disponible ici 👉 [Laboratoire11_2A](../../static/files/laboratoires/Laboratoire11_2A.zip)

---

### 🎯 Objectif 
L’objectif de ces exercices est de vous familiariser avec le concept d'héritage.

---

### 🟢 Exercice 1 : HeritageClassique

Définir une classe de base **`Personne`** et deux classes dérivées : la classe **`Employe`** et la classe **`Etudiant`**.

### 📋 Structure des classes
Voici les classes et la structure hiérarchique que vous devez respecter : 
![Diagramme des classes](@site/static/img/R22/heritageClassique.png)

### 📋 Liste des TODOs à compléter:

Complétez les TODOs du fichier **`FrmPrincipal.cs`**  :

- TODO 01 : Vous devez définir 3 classes :
1. La classe ``Personne`` avec uniquement un nom et une date de naissance;
2. La classe ``Etudiant`` qui devra hériter de la classe ``Personne`` en plus d'avoir sa propre propriété ``Matricule``;
3. La classe ``Employe`` qui devra également hériter de la classe ``Personne`` en plus d'avoir sa propre propriété ``Salaire``.
- TODO 02 : Enlever les commentaires ci-dessous et faire fonctionner le code
- TODO 03 : Ajouter des méthodes ToString() dans chacune de vos classes afin de ne pas répéter le code.



---



### 🟢 Exercice 2 : MontrePlus

Définir une classe **`MontrePlus`** et compléter les TODOs.

### 📋 Structure des classes
Voici les classes et la structure hiérarchique que vous devez respecter : 

![Diagramme des classes](@site/static/img/R22/montrePlus.png)


### 📋 Liste des TODOs à compléter:

Complétez les TODOs du fichier **`FrmPrincipal.cs`**  :

- TODO 01 : En vous référant au diagramme de classe de cet exercice, ajouter la classe ``MontrePlus``
- TODO 02 : Compléter le code des constructeurs
- TODO 03 : Compléter le code de la méthode ToString() de la classe ``MontrePlus``
- TODO 04 : Modifier le type l'objet montre pour utiliser la classe ``MontrePlus``
- TODO 05 : Modifier le mode d'affichage de l'objet de la classe ``MontrePlus``