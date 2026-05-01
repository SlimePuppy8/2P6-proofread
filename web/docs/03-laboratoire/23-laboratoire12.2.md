---
title: Classes Abstraite et Carte Bancaire
---
# 🧪 Labo 12.2A – Pratique de classe abstraite et de surcharge

---

## Exercice 1 – Modifier la classe ``Forme`` pour la rendre abstraite

### 🎯 Objectif 
Comme il n'est pas désirable de laisser un utilisateur créer une forme générique, nous connaissons déjà le mechanisme en C# pour ceci. L’objectif de cet exercice est de modifer la classe ``Forme`` afin de la rendre abstraite.

### 🛠️ Instructions

Reprennez votre projet du labo 12.1 et faites les modifications à la classe ``Forme`` afin de la rendre abstraite. Pour confirmer que la classe est abstraite faite un teste en essayant de créer une instance de ``Forme``.

Le projet du laboratoire 12.1 est disponible ici 👉 [Laboratoire12_1](../../static/files/laboratoires/Laboratoire12_1.zip)

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
- une méthode ``AppliquerIntérêt`` qui ajoute au solde un montant calculé en fonction du ``TauxIntérêt`` de la carte. A ce moment le ``Solde`` peut dépasser la ``Limite``. Mais il ne sera plus possible de faire d'emprunt tant que le ``Solde`` n'est pas redescendu sous la ``Limite``.
- une propriété ``Avantage`` (voir le détail pour chacune des cartes)

### La carte régulière
A un taux d'intérêt fixe annuel et n'offre d'autre de particulier.
Les info de la carte devrait être inscrit dans la méthode ``ToString``. Ex: "Carte Régulière - Taux: 3% - Limite 1000.00$".

### La carte Boni
Elle offre une accumuluation de points lors des achats en fonction d'un pourcentage fixe par client. Ce pourcentage varie d'une carte à une autre mais se situe toujours entre 2% et 10% inclusivement.
Les points bonis sont des entiers qui s'accumule à chaque achat. Ils représentent un pourcentage des achats. Par exemple, si la carte boni est 2%, sur un achat de 100$, 2pts seront accumulé. Les points sont toujours arrondi au plus bas entier. Par exemple, un achat de 105$ donne en théorie 2.1 pts mais une fois arrondi vers le bas c'est 2pts qui s'accumule sur la carte. Le type de carte doit être représenté dans la méthode ``ToString``. Ex: "Boni 2%". Le 2% représente le pourcentage d'accumulation de points.

Lorsque l'utilisateur de la carte fait un remboursement, le montant du remboursement est tout d'abord appliqué. S'il reste un solde, un remoursement supplémentaire est appliqué en convertissant les points accumulés. Chaque point équivait à un dollar. 
Par exemple, 
    - si on essai de rembourser 100$ sur un solde de 200$ et que la carte a 5 points, le nouveau solde devient 95$ (200$-100$-5$). Tous les points ont été convertis. 
    - si on essai de rembourser 100$ sur un solde de 103$ et que la carte a 5 points, le nouveau solde devient 0$ (103$-100$-3$). Seul 3 points sont convertis. Il reste donc 2 points.
    - si on essai de rembourser 100$ sur un solde de 100$ et que la carte a 5 points, le nouveau solde devient 0$ (100$-100$). Aucun point n'est converti car le solde est à zéro. Il reste donc 5 points.

Le nombre de points devrait être disponible dans la propriété ``Avantage``. Ex: "Point(s) Boni(s): 100.".

### La carte VIP
Tout comme la carte Boni, la carte VIP offre aussi une accumulation de points lors des achats mais cette fois le pourcentage utilisé varie en fonction du montant d'emprunt (voir table).
Le type de carte doit être représenté dans la méthode ``ToString``. Ex: "VIP 2%". Le 2% représente le pourcentage d'accumulation de points.

| Montant |   Pourcentage     |
|---------|-------------------|
| [ 0, 100$ [     | base + 1% |
| [ 100$, 500$ [  | base + 2% |
| 500$ ou plus    | base + 3% |

Une fonction virtuelle ``DéterminerPointsBonis`` partagé avec la ``CarteBoni`` serait fort utile ici.

Finalement la carte VIP permet d'accumuler des points VIP pour chaque emprunt de **250$ et plus**. Les points VIP sont utilisé lorsque c'est le moment d'appliquer les intérêts. Pour chaque 5 points, le taux d'intérêt est réduit de 1%. Les points sont reduit à zéro lors de l'application des intérêts peut importe s'ils sont utilisés ou non.

Le nombre de points devrait être disponible dans la propriété ``Avantage``. Ex: "Point(s) Bonis: 100. Point(s) VIP: 1".

L’objectif de cet exercice est de modeliser une hierarchie de classes comportant une classe abstraite.

### 🛠️ Instructions

À l'aide de visio (ou autre logiciel), vous devez compléter le diagramme suivant. Le début de la hiearchie commence par une classe abstraite. Assurez-vous aussi de mettre les attributs, propriétés et méthodes au bon niveau selon les besoins de l'énoncé. Ça serait aussi bien de mettre des constantes dans vos classes pour les montants et limites.

![diagramme-cartes](@site/static/img/R23/diagramme-carte.png)

:::info

Dans un diagramme UML une flèche vide (blanche) indique la classe parent. Donc dans le diagramme précédent, ``CarteReguliere`` dérive (ou hérite) de ``Carte`` et ainsi de suite pour les autres cartes.

:::

---

## Exercice 3 – Implémentation

### 🎯 Objectif 
L’objectif de cet exercice est créer les classes des modèles précédents dans une librairie de classe.

### 🛠️ Instructions

Téléchargez le projet de départ ici 👉 [Laboratoire12_2](../../static/files/laboratoires/Laboratoire12_2.zip).

Les classes sont déjà présentes dans le projet ``Modeles``. Cependant vous devez les compléter. La classe abstraite ``Carte`` vous est aussi fournie et vous n'avez pas à la modifier.

De plus, un projet de tests unitaires est disponible afin de valider votre implémentation. Des classes de tests sont disponibles pour chacunes des carte. Il faut décommenter la première ligne lorsque sous serez prêt à tester. Voir :
1. ``//#define _TESTS_CARTE_REGULIERE`` dans le fichier de la classe ``TestCarteReguliere``.
2. ``//#define _TESTS_CARTE_BONI`` dans le fichier de la classe ``TestCarteBoni``.
3. ``//#define _TESTS_CARTE_VIP`` dans le fichier de la classe ``TestCarteVIP``.


Quelques éléments à garder en têtes:
- Vous devez mettre en place des exceptions dans les propriétés afin d'assurer une bonne encapsulation.
- Assurez-vous de bien utiliser les 3 niveaux de protections des attributs, propriétés et méthodes de vos classes (``public``, ``protected``, ``private``)
- Vos classes ne devrait pas contenir du copié-collé de code commun. Assurez-vous de le placer au bon endroit dans la hierarchie de classe. Faites usage du mot clé ``base`` pour accèder au code du parent.


---

## Exercice 4 – Intégration dans une application

### 🎯 Objectif 
L’objectif de cet exercice est d'utiliser vos classes dans une application WinForm.

### 🛠️ Instructions

Toujours à partir du projet fourni dans l'exercice précédent, complétez les TODOs suivants:

1. Dans le constructeur ``CreditApp``, créez 3 cartes.
    - Carte régulière avec une limite de 1000$ et un taux de 3%.
    - Carte bonis avec une limite de 2000$, un taux de 4.5% et un taux boni de 2%.
    - Carte VIP avec une limite de 5000$, un taux de 5.5% et un taux boni de 3%.
2. Toujours dans le constructeur ``CreditApp``, ajouter ces 3 cartes à ``lstCartes``.
3. Dans la méthode ``RaffraichirDetailsCarte``, mettre à jour les champs suivants à l'aide des propriétés de la carte sélectionnée:
    - ``txtTaux`` (doit s'afficher avec un pourcentage Ex: 3.5%)
    - ``txtLimite`` (doit s'afficher en format monétaire)
    - ``txtSolde`` (doit s'afficher en format monétaire)
    - ``txtAvantage``
4. Dans la méthode ``btnEmprunter_Click``, implémenter le code nécessaire pour faire un emprunt sur la carte active.
    - N'oubliez pas d'appeler ``RaffraichirDetailsCarte`` si l'opération est un succès
    - Dans le cas contraire, il faudrait afficher un message d'erreur à l'aide de ``MessageBox``
5. Dans la méthode ``btnEmprunter_Click``, implémenter le code nécessaire pour faire un remboursement sur la carte active.
    - N'oubliez pas d'appeler ``RaffraichirDetailsCarte`` si l'opération est un succès
    - Dans le cas contraire, il faudrait afficher un message d'erreur à l'aide de ``MessageBox``
6. Dans la méthode ``btnAjouterInterets_Click``, implémenter le code nécessaire pour appliquer les intérêt sur la carte active.

Une application démo est disponible à la racine du projet afin de valider votre implémentation.
