---
title: Classes Forme et Calculateur
---
# 🧪 Labo 12.1A – Classes Forme et Calculateur

---

## Exercice 1 – Création de diagramme de classes

### 🎯 Objectif 
L’objectif de cet exercice est de créer le diagramme de classe l'aide des descriptions de classes fournis. 

Nous avons besoin de calculer l'aire totale d'une illustration composée de formes géométrique. Certaines formes sont ajoutées à l'illustration tandis que d'autres sont soustraites afin de créer des 'trous'. Par exemple si l'on veut créer la forme de 'beigne' suivante, nous devons tout d'abord ajouter une grand cercle et ensuite retirer une plus petit cercle à l'intérieur. Pour déterminer l'aire de ce 'beigne', nous devons prendre l'aire du plus grand cercle et soustraire l'aire du plus petit cercle.

![Beigne](@site/static/img/R21/beigne.jpg)

Afin de pouvoir calculer l'aire totale d'illustrations beaucoup plus complexe, la classe ``Calculateur`` sera implémenté afin de calculer l'aire automatiquement à l'aide des formes. Ces formes devront être fourni à la classe afin de calculer l'aire totale. Les formes peuvent être additionnées et soustraites entres-elles. 

Un forme de base ``Forme`` doit être utilisée. La ``Forme`` possède une propriété qui permet de déterminer si elle peut être additionnée ou soustraire à l'illustration. Les classes suivantes seront dérivées de celle-ci : ``Rectangle``, ``Cercle``, ``Triangle``, ``Hexagone``. Il est possible aussi d'utiliser la classe ``CercleFractionnée`` qui sera dérivée de la classe ``Cercle``. Cette dernière pourra permettre de faire des illustration comme ceci :

![Smiley](@site/static/img/R21/smiley.jpg)

### 🛠️ Instructions

À l'aide visio, créez le diagramme de classes du programme. Assurez-vous de bien identifier toutes les classes et les relations entre-elles.

---


## Exercice 1 – Relation entre les classes du projet

### 🎯 Objectif 
L’objectif de cet exercice est d'illustrer adéquatement une relation entre plusieurs classes.

### 🛠️ Instructions

Commençez par récuperer le projet de départ. 
Par la suite consultez les descriptions de classes afin de les créer dans le projet ``Modèles``.
Finalement, faites usage du projet de tests unitaires afin de valider votre implémentation.

## Calcul d'aire pour les formes
| Forme     | Aire                  |
|-----------|-----------------------|
| Rectangle | Largeur &sdot; Hauteur     |
| Triangle  | &frac12; &sdot; Base &sdot; Hauteur      |
| Cercle    | &pi; &sdot; Rayon<sup>2</sup>     |
| Hexagone  | &frac12; &sdot; 3 &sdot; &radic;3 &sdot; Côté<sup>2</sup>     |



# Descriptions des classes

## Classe ``Forme``
La classe de base pour les formes.

### Constructeur

#### ``Forme( ModeOpération pMode )``
Permet de construire une ``Forme`` en lui fournissant son mode d'opération.

### Propriété(s)

#### ``ModeOpération``
Permet de déterminer si la forme doit ajouter ou retirer de l'illustration.

#### ``Aire``
Propriété calculée retournant l'aire de la forme.

## Classe ``Triangle``
La classe dérivée de ``Forme`` permettant de représenter un triangle.

### Constructeur

#### ``Triangle( ModeOpération pMode, double pBase, double pHauteur )``
Permet de construire une ``Triangle`` en lui fournissant son mode d'opération, une base et une hauteur.

### Propriété(s)

#### ``Base``
Propriété représentant la longueur de la base.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Hauteur``
Propriété représentant la longueur de la hauteur.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Aire``
Propriété calculée retournant l'aire du triangle.

## Classe ``Rectangle``
La classe dérivée de ``Forme`` permettant de représenter un rectangle.

### Constructeur

#### ``Rectangle( ModeOpération pMode, double pLargeur, double pHauteur )``
Permet de construire une ``Rectangle`` en lui fournissant son mode d'opération, une largeur et une hauteur.

### Propriété(s)

#### ``Largeur``
Propriété représentant la longueur de la largeur.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Hauteur``
Propriété représentant la longueur de la hauteur.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Aire``
Propriété calculée retournant l'aire du rectangle.

## Classe ``Rectangle``
La classe dérivée de ``Forme`` permettant de représenter un rectangle.

### Constructeur

#### ``Hexagone( ModeOpération pMode, double pCôté )``
Permet de construire une ``Hexagone`` en lui fournissant son mode d'opération et une longueur de côté.

### Propriété(s)

#### ``Côté``
Propriété représentant la longueur d'un des 6 côtés de l'hexagone.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Aire``
Propriété calculée retournant l'aire de l'hexagone.


## Classe ``Cercle``
La classe dérivée de ``Forme`` permettant de représenter un cercle.

### Constructeur

#### ``Cercle( ModeOpération pMode, double pRayon )``
Permet de construire une ``Cercle`` en lui fournissant son mode d'opération et un rayon.

### Propriété(s)

#### ``Rayon``
Propriété représentant la longueur du rayon.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Aire``
Propriété calculée retournant l'aire du cercle.

## Classe ``CercleFractionné``
La classe dérivée de ``Cercle`` permettant de représenter une fraction de cercle.

### Constructeur

#### ``Rectangle( ModeOpération pMode, double pRayon, double pFraction )``
Permet de construire une ``Rectangle`` en lui fournissant son mode d'opération, un rayon et une fraction.

### Propriété(s)

#### ``Fraction``
Propriété représentant la fraction du cercle.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative ou dépasse 1.

#### ``Hauteur``
Propriété représentant la longueur du rayon.
Doit lancer une exception ``ArgumentOutOfRangeException``  si la valeur 0 ou négative.

#### ``Aire``
Propriété calculée retournant l'aire du cercle fractionné. **Vous devez faire usage de la propriété ``Aire`` de la classe parent ``Cercle``.**


## Classe ``Calculateur``
Cette classe sert à calculer l'aire total à l'aide de plusieurs formes.

### Attribut(s)

#### ``ListesFormes`` (privé)
Contient l'ensemble des formes qui doivent être appliquées lors du calculs de l'aire totale.

### Propriété(s)

#### ``AireTotale``
Propriété calculée retournant l'aire totale à l'aide des formes et leur mode d'opération.

### Méthode(s)

#### ``Appliquer( Forme pForme )``
Permet d'appliquer une forme à l'illustration. Garde en mémoire la ``Forme`` fournie et l'ajoute à la liste de formes.


---

## Exercice 3 – Calcul d'aire total

### 🎯 Objectif 
L’objectif de cet exercice est de calculer les aires totales des illustrations suivantes à l'aide de la librairie de classe que vous venez de compléter.

### 🛠️ Instructions

Pour chacune des illustrations, 
- Créez un fonction
- Créez un objet ``Calculateur``
- Créez les formes nécessaires pour reproduire l'illustration. Attention de mettre le bon mode d'opération.
- Appliquez les formes à l'objet ``Calculateur``
- Écrire à la console la valeur de l'aire totale.

#### Illustration 1
![Illustration1](@site/static/img/R21/illustration1.jpg)

#### Illustration 2
![Illustration2](@site/static/img/R21/illustration2.jpg)

#### Illustration 3
![Illustration3](@site/static/img/R21/illustration3.jpg)


### Exemple de résultat attendu dans la console:

```
L'aire totale de l'illustration 1 est 16.96460032938488
L'aire totale de l'illustration 2 est 31.200276485650665
L'aire totale de l'illustration 3 est 110.68049437891702

```
