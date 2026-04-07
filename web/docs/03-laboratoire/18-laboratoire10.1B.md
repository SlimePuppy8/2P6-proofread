---
title: Logique d'interface graphique
---
# 🧪 Labo 10.1B – Logique d'interface graphique

---

## Exercice 4 - Logique d’interface graphique 

### 🎯 Objectifs
Cet exercice vise à consolider les points suivants :

- Utiliser efficacement les propriétés de navigation;
- Compléter la logique d’une interface graphique *WinForms*;
- Rechercher des informations à partir de collections d’objets; 
- Ajouter des objets à des collections existantes;
- Gérer les erreurs avec la structure ``try-catch``;


---
### Téléchargez le projet de départ contenant la classe ``Etoile`` et l'interface graphique

:::important
Pour que la classe `Etoile` et l'interface graphique fonctionnent, vous devez intégrer les classes ``Planete`` et ``Satellite``, et l'énumération `TypePlanete` à la bibliothèque de classe `Modeles` de la présente solution.
:::

Disponible ici 👉 [Laboratoire10_1](../../static/files/laboratoires/Laboratoire10_1.zip)

### Téléchargez la démonstration du fonctionnement de l'interface graphique

Vous pouvez visualiser le fonctionnement de l'application en double-cliquant sur `Volet_2_3.exe`

Disponible ici 👉 [Demonstration10_1](../../static/files/demonstrations/Demonstration10_1.zip)

---

### 🛠️ Instructions

La nouvelle classe fournie, la classe ``Etoile``, permet d’instancier une étoile à l’aide de son nom (ex : Soleil) et d’une liste de planètes lui étant associées (ex : l’ensemble des planètes du système solaire). Complétez la logique de l’interface graphique afin d’assurer le déroulement suivant :

:::tip
La conception de l'interface graphique et les évènements ont déjà été créés pour vous. Il ne vous reste qu'à compléter la logique de chaque évènement !
:::

1. **Lorsque le formulaire est en chargement**, un jeu de données initial représentant le système solaire et/ou un système stellaire fictif est chargé en mémoire. Votre jeu de données doit inclure des planètes, des satellites et minimalement une étoile. Vous pouvez réutiliser et ajuster votre jeu de données de l'exercice 3.
2. La ComboBox **cboEtoiles** doit permettre de sélectionner une étoile parmi une liste déroulant.
[👉 Lien vers ComboBox](https://info.cegepmontpetit.ca/2P6/cours/rencontre13#combobox)

3. Lorsqu’une étoile est sélectionnée, ses planètes sont affichées dans la ListBox **lstPlanetes**.
[👉 Lien vers ListBox](https://info.cegepmontpetit.ca/2P6/cours/rencontre13#listbox)

4. Lorsqu’une planète est sélectionnée, ses satellites sont affichées dans la ListBox **lstSatellites**.
5. L’utilisateur doit pouvoir ajouter une planète à l’étoile sélectionnée à l’aide du bouton **btnAjouterPlanete**.
6. L’utilisateur doit pouvoir ajouter un satellite à la planète sélectionnée à l’aide du bouton **btnAjouterSatellite**.
7. Assurez-vous de valider les entrées de l’utilisateur. 
8. Si une exception est levée, un message d'erreur approprié doit apparaître dans une **MessageBox**.
