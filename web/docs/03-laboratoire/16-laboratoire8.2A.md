---
title: 🟢 ManipulerDates
---
# 🧪 Labo 8.2A – 🟢 ManipulerDates

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R16-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---
### Télécharger la solution contenant les différents exercices de ce laboratoire.

Disponible ici 👉 [Laboratoire8_2](../../static/files/laboratoires/Laboratoire8_2.zip)

---

### 🎯 Objectifs 
* Se familiariser avec la structure **`DateTime`** 
* Se familiariser avec la structure **`TimeSpan`**
* Compléter les fonctionnalités d'un projet Windows Forms

### 🛠️ Instructions
Vous aurez à compléter le projet **`ManipulerDates`** en suivant les neuf (9) TODOs qui se retrouvent dans le fichier **`FrmPrincipal.cs`**. Les contrôles
existent déjà et les événements ont déjà été créés.

![Fenêtre de l'application ManipulerDates](@site/static/img/R16/manipulerDates.png)

### 📋 Liste des TODOs à compléter:
- TODO 01 : Aujourd'hui, dans une heure
- TODO 02 : Hier, même heure
- TODO 03 : Demain, une heure de plus
- TODO 04 : Il y a 4 semaines (-28 jours)
- TODO 05 : Dans 2 mois
- TODO 06 : Il y a 10 ans
- TODO 07 : Dans 20 ans, même jour, même heure
- TODO 08 : Afficher la nouvelle date en respectant le format d'affichage de la démo
- TODO 09 : Vous devez calculer et afficher l'intervalle de temps entre les deux dates (voir démo)

### ☝️ ComboBox

[👉 Lien vers la classe ComboBox](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.combobox?view=windowsdesktop-10.0)

Dans ce projet, un contrôle de menu déroulant est utilisé pour choisir une action. Ce contrôle est une classe **`ComboBox`**.

:::warning
Le préfixe pour un **`ComboBox`** est **`cbo`**.
:::

![combobox](@site/static/img/R16/comboBox.png)

La propriété **`SelectedIndex`** est utilisée pour identifier la sélection de l'utilisateur:
```csharp
switch (cboMoments.SelectedIndex)
{
    case 1: // TODO 01 : Aujourd'hui, dans une heure
        break;
    case 2: // TODO 02 : Hier, même heure
        break;
    case 3: // TODO 03 : Demain, une heure de plus
        break;
    case 4: // TODO 04 : Il y a 4 semaines (-28 jours)
        break;
    case 5: // TODO 05 : Dans 2 mois
        break;
    case 6: // TODO 06 : Il y a 10 ans
        break;
    case 7: // TODO 07 : Dans 20 ans, même jour, même heure
        break;
}
```

Il est possible de manipuler la collection d'items. La propriété **`Items`** est une liste d'objet avec les méthodes auxquelles ont peut s'attendre:
```csharp
cboMoments.Items.RemoveAt(index);
cboMoments.Items.Add("Maintenant");
```