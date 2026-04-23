---
title: Interface
---
# 🧪 Labo 11.2B

---
### Télécharger la solution de départ contenant les différents exercices du laboratoire 11.2B

Disponible ici 👉 [Laboratoire11_2B](../../static/files/laboratoires/Laboratoire11_2B.zip)

---

### 🎯 Objectif 
L’objectif de ces exercices est de vous familiariser avec le concept d'interface :

* Apprendre à utiliser une interface qui existe déjà
* Définir et utiliser une nouvelle interface

---

### 🟢 Exercice 1 : IThermostat

Dans le projet `Exercice_1`, l’interface ``IThermostat`` vous est fournie. Elle représente le contrat à respecter pour modéliser un thermostat électronique.
Dans cet exercice, vous devez **implémenter l’interface** ``IThermostat`` à travers une nouvelle classe nommée ``Thermostat``.
La classe ``Thermostat`` doit vous permettre d'instancier un thermostat fonctionnel.


### 📋 Diagrammes de classes
Voici les diagrammes pour l'interface fournie `IThermostat` et la classe `Thermostat` à créer :
![Diagramme des classes](@site/static/img/R22/IThermostat.png)


:::note
**Diagramme IThermostat** : Les éléments y sont écrits en *italiques*, car ce sont des éléments *abstraits*. Ils ne contiennent pas de code, ce sont seulement des signatures.

**Diagramme Thermostat** : Notez le symbole au-dessus du diagramme qui indique que la classe ``Thermostat`` implémente l’interface ``IThermostat``.
Notez également la présence d’une méthode supplémentaire *ResetTempérature()* qui n’est pas exigée dans le contrat.

:::

### 📋 Liste des TODOs à compléter:

1. À partir des diagrammes de classes, créez une classe `Thermostat` qui implémente l'interface `IThermostat`.
2. Dans votre `Main()`, intanciez un nouvel objet  ``Thermostat unThermostat`` et ``IThermostat unAutreThermostat``.
3. Est-il possible d'appeler la méthode *AugmenterTemperature()* à partir des objets `unThermostat` et `unAutreThermostat` ? Si oui, pourquoi est-ce le cas ?
4. Est-il possible d'appeler la méthode *ResetTempérature()* à partir des objets `unThermostat` et `unAutreThermostat` ? **Astuce** : vous devrez utiliser le **transtypage** pour corriger l'erreur obtenu.

---

### 🟢 Exercice 2 : AppMontre

Dans le projet `AppMontre`, l’interface ``IMontre`` vous est fournie. Elle représente le contrat à respecter pour modéliser une montre.
Dans cet exercice, vous devez **implémenter l’interface** ``IMontre`` à travers une nouvelle classe nommée ``Montre``.
La classe ``Montre`` doit vous permettre de faire fonctionner l'application *WinForms* fournie.


### 📋 Diagrammes de classes
Voici les diagrammes pour l'interface fournie `IMontre` et la classe `Montre` à créer :
![Diagramme des classes](@site/static/img/R22/AppMontre.png)


### 📋 Liste des TODOs à compléter (dans `FrmPrincipal.cs`):

1. Dans le projet `AppMontre`, choisir l'option "Ajouter une classe et nommer le nouveau fichier "Montre.cs"

2. La première fois que nous avons construit la classe Montre nous avons utilisé un diagramme de classe (Labo 2.1). Dans ce projet il y a une interface nommée IMontre, elle contient les propriétés et méthodes que la montre devra implémenter.

3. Ajouter deux constructeurs à la classe Montre (impossible d'imposer les constructeurs dans une interface). Le constructeur devra avoir 3 paramètres soit : les heures, les minutes et les secondes.

4. Compléter le code la classe Montre. Vous pouvez vous référez au Labo 2.1

5. Dans ``FrmPrincipal.cs``, retirer les commentaires devant le code jusqu'à la fin et exécuter le programme. Il devrait fonctionner. 


---

### 🟢 Exercice 3 : ILecteurAudio

1.	À partir du diagramme de classe et de la classe ``LecteurAudio`` fournie :
    * Déterminer quelles propriétés et méthodes appartiennent au contrat minimal ``ILecteurAudio`` ;
    * Écrire l’interface ``ILecteurAudio`` correspondante.

2.	Modifier la déclaration de ``LecteurAudio`` pour qu’elle implémente cette interface.

3. Testez votre implémentation en instanciant un objet `ILecteurAudio monLecteur` dans votre `Main()` et assurez-vous que l'appel des méthodes *Jouer()* et *Pause()* soit fonctionnel.

### 📋 Diagrammes de classes
Voici les diagrammes pour l'interface `ILecteurAudio` et la classe `LecteurAudio` :
![Diagramme des classes](@site/static/img/R22/ILecteurAudio.png)



