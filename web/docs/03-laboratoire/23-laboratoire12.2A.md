---
title: Classes Forme et Calculateur
---
# 🧪 Labo 12.2A – De retour sur les classes Forme et Calculateur

---

## Exercice 1 – Modifier la classe ``Forme`` pour la rendre abstraite

### 🎯 Objectif 
Comme il n'est pas désirable de laisser un utilisateur créer une forme générique, nous connaissons déjà le mechanisme en C# pour ceci. L’objectif de cet exercice est de modifer la classe ``Forme`` afin de la rendre abstraite.

### 🛠️ Instructions

Reprennez votre projet du labo 12.1 et faites les modifications à la classe ``Forme`` afin de la rendre abstraite. Pour confirmer que la classe est abstraite faite un teste en essayant de créer une instance de ``Forme``.

---

## Exercice 2 – Modélisation avec classe abstraite

### 🎯 Objectif 
Une banque désire offir des nouvelles cartes de crédit à ses membres. Elle a 3 trois cartes en têtes avec des comportement différents.

À la base, toutes cartes fonctionnent de la même façon:
- ont une limite d'emprunt (``Limite`` ne peut pas être changé une fois la carte créé)
- ont un solde actuel (``Solde`` montant total emprunté jusqu'à présent)
- ont un taux d'intérêt annuel ( ``TauxIntérêt`` ne peut pas être changé une fois la carte créé)
- offrent une méthode pour faire des achats (``Emprunter``)
    - il n'est pas possible d'emprunter au dela de la limite de la carte*
    - la méthode doit retourne faux à ce moment là
- faire un remboursement (``Rembourser``)
    - il n'est pas possible de rebourser plus que le solde actuel
    - la méthode doit retourne faux à ce moment là

En plus de cela, les cartes doivent avoir:
- une méthode ``AppliquerIntérêt`` qui ajoute au solde un montant calculé en fonction du ``TauxIntérêt`` de la carte. A ce moment le ``Solde`` peut dépasser la ``Limite``.

### La carte régulière
A un taux d'intérêt fixe annuel et n'offre d'autre de particulier.
Les info de la carte devrait être inscrit dans la méthode ``ToString``. Ex: "Carte Régulière - Taux: 3% - Limite 1000.00$".

### La carte Boni
Elle offre une accumuluation de points lors des achats en fonction d'un pourcentage fixe par client. Ce pourcentage varie d'une carte à une autre mais se situe toujours entre 2% et 10% inclusivement.
Les points bonis sont des entiers qui s'accumule à chaque achat. Ils représentent un pourcentage des achats. Par exemple, si la carte boni est 2%, sur un achat de 100$, 2pts seront accumulé. Les points sont toujours arrondi au plus bas entier. Par exemple, un achat de 105$ donne en théorie 2.1 pts mais une fois arrondi vers le bas c'est 2pts qui s'accumule sur la carte. Les nombres de points devrait être inscrit dans la méthode ``ToString``. Ex: "Carte Boni 3% (22pts) - Taux: 3% - Limite 1000.00$".

Lorsque l'utilisateur de la carte fait un remboursement, un rabais est appliqué en convertissant les points. Pour chaque points, un dollar est soustrait au montant du remboursement avant de s'appliquer sur solde.

### La carte VIP
Elle offre aussi une accumulation de points lors des achats mais cette fois le pourcentage utilisé varie en fonction du montant d'emprunt (voir table).
Les nombres de points devrait être inscrit dans la méthode ``ToString``. Ex: "VIP 5% (100pts) - Taux: 3% - Limite 1000.00$".

De plus lors du remboursement, si le solde dépasse la moitié de la limite de la carte, les points sont comptés en double. Donc valent 2$ à la place. Une fonction ```ConvertirPoints``` serait utile ici :D (et à un autre endroit :P)

| Montant |   Pourcentage     |
|---------|-------------------|
| [ 0, 100$ [     | base + 1% |
| [ 100$, 500$ [  | base + 2% |
| Plus de 500$    | base + 3% |


L’objectif de cet exercice est de modeliser une hierarchie de classes comportant une classe abstraite.

### 🛠️ Instructions

À l'aide de visio (ou autre logiciel), identifié les classes requises pour modeliser le problème précédant. Assurez-vous d'identifier une classe abstraite et ses classes enfants. Assurez-vous aussi de mettre les attributs, propriétés et méthodes au bon niveau.


---

## Exercice 3 – Implémentation

### 🎯 Objectif 
L’objectif de cet exercice est créer les classes des modèles précédents dans une librairie de classe.

### 🛠️ Instructions

Téléchargez le projet de départ ici (). 
Ajoutez les classes dans le projet ``Modeles``.
Faites usage du projet de tests unitaires afin de valider votre implémentation.

Quelques éléments à garder en têtes:
- Vous devez mettre en place des exceptions dans les propriétés afin d'assurer une bonne encapsulation.
- Assurez-vous de bien utiliser les 3 niveaux de protections des attributs, propriétés et méthodes de vos classes (```public```, ```protected```, ```private```)
- Vos classes ne devrait pas contenir du copié-collé de code commun. Assurez-vous de le placer au bon endroit dans la hierarchie de classe. Faites usage du mot clé ```base``` pour accèder au code du parent.
