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

### 🛠️ Instructions

La nouvelle classe fournie, la classe ``Etoile``, permet d’instancier une étoile à l’aide de son nom (ex : Soleil) et d’une liste de planètes lui étant associées (ex : l’ensemble des planètes du système solaire). Complétez la logique de l’interface graphique afin d’assurer le déroulement suivant :

1. **Lorsque le formulaire est en chargement**, charger un jeu de données initial représentant le système solaire et/ou un système stellaire fictif. Votre jeu de données doit inclure des planètes, des satellites et minimalement une étoile.
2. La ComboBox **cboEtoiles** doit permettre de sélectionner une étoile parmi une liste déroulant.
[👉 Lien vers ComboBox](https://info.cegepmontpetit.ca/2P6/cours/rencontre13#combobox)

3. Lorsqu’une étoile est sélectionnée, afficher ses planètes dans la ListBox **lstPlanetes**.
[👉 Lien vers ListBox](https://info.cegepmontpetit.ca/2P6/cours/rencontre13#listbox)

4. Lorsqu’une planète est sélectionnée, afficher ses satellites dans la ListBox **lstSatellites**.
5. Permettre à l’utilisateur d’ajouter une planète à l’étoile sélectionnée à l’aide du bouton **btnAjouterPlanete**.
6. Permettre à l’utilisateur d’ajouter un satellite à la planète sélectionnée à l’aide du bouton **btnAjouterSatellite**.
7. Valider les entrées de l’utilisateur. 
8. Si une exception est levée, afficher son message dans une **MessageBox**.
