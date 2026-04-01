---
title: 🟢 Exer01 CheckListBox
---
# 🧪 Labo 9.1A – 🟢 CheckListBox

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R17-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---
### Télécharger la solution contenant les différents exercices de ce laboratoire.

Disponible ici 👉 [Laboratoire9_1](../../static/files/laboratoires/Laboratoire9_1.zip)

---

### 🎯 Objectif 
L’objectif de cet exercice est de vous familiariser avec :

* la manipulation de la collection ``Items``
* l’utilisation des méthodes **SetItemChecked()** et **GetItemChecked()**
* la propriété ``CheckedItems``
* la gestion d’événements liés à une interface graphique

### 🛠️ Instructions

Dans cet exercice, vous devez compléter une application Windows Forms permettant de manipuler une CheckListBox contenant une liste de fruits et légumes. Les contrôles
existent déjà et les événements ont déjà été créés.

### 📋 Liste des TODOs à compléter:

Complétez les TODOs du fichier **`FrmPrincipal.cs`**  :

- TODO 01 : Ajouter 10 légumes dans votre CheckListBox
- TODO 02 : Cocher tous les items
- TODO 03 : Décocher tous les items
- TODO 04 : Cocher uniquement les items ayant un index pair
- TODO 05 : Afficher dans txtValeur le nombre d'items cochés dans le CheckListBox 
- TODO 06 : Construire une chaine de caractères contenant le texte des items cochés. Un item par ligne.
- TODO 07 : Supprimer les items cochés en utilisant la propriété ``CheckedItems``