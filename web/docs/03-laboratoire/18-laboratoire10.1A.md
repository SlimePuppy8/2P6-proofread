---
title: Classes Planète et Satellite
---
# 🧪 Labo 10.1A – Classes Planète et Satellite

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-Integration-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---

## Exercice 1 – Implémentation des classes Planete & Satellite

### 🎯 Objectif 
L’objectif de cet exercice est d'implémenter des classes et une énumération à l'aide des diagrammes et descriptions de classes fournis. Vous aurez à manipuler :

* des champs
* des propriétés (incluant des propriétés de navigation, des propriétés calculées et des propriétés automatiques)
* des constructeurs
* des méthodes
* une énumération
* des exceptions

---

### 🛠️ Instructions

Commençez par créer un nouveau projet d’**application console**. Dans la même solution, ajoutez une **bibliothèque de classe**. À l’aide des diagrammes de classes suivants, implémentez les classes ``Planete`` et ``Satellite``, ainsi que l’énumération ``TypePlanete``. Placez-les dans votre bibliothèque de classe.

<Row>
<Column>
![Diagrammes de classes](@site/static/img/R19/Classe_Planete.png)
</Column>
<Column>
![Diagrammes de classes](@site/static/img/R19/Classe_Satellite.png)
</Column>
<Column>
![Diagrammes de classes](@site/static/img/R19/Enum_TypePlanete.png)
</Column>
</Row>


## Classe Planete
### Attributs
La classe doit contenir les attributs privés suivants :
* **m_nom** : nom de la planète, sous forme de chaîne de caractères.
* **m_masse** : masse de la planète, sous forme de nombre décimal.

Ces attributs doivent être accessibles en lecture et en écriture à l’aide de propriétés publiques. L’accès en écriture doit être restreinte aux limites de la classe.

### Propriétés
#### ``Nom``
Représente le nom de la planète.
##### Validation à faire : 
* Si la valeur reçue est *null*, vide ou constituée uniquement d’espaces, vous devez lever une exception : 
```
ArgumentException
```
#### ``Masse``
Représente la masse de la planète.
##### Validation à faire : 
* Si la valeur reçue est inférieure ou égal à 0, vous devez lever une exception :
```
ArgumentException
```
#### ``Type`` : propriété automatique
#### ``Satellites`` : propriété (automatique) de navigation
#### ``NombreDeSatellites`` : propriété calculée
Retourne le nombre de satellites associés à la planète.

### Constructeur
Implémentez le constructeur suivant :
```csharp
public Planete(string nom, double masse, TypePlanete type)
```
Ce constructeur initialise une nouvelle planète à partir des informations fournies.

### Méthodes
#### ``AjouterSatellite(Satellite satellite)``
Ajoute un objet Satellite à la liste de satellites.
##### Validation à faire : 
* Si l’objet à ajouter est null, vous devez lever l’exception : 
```
ArgumentNullException
```

#### ``ToString()``
Retourne une chaîne de caractères indiquant le nom, le type, la masse et le nombre de satellites de la planète.

---

## Classe Satellite
### Attributs
La classe doit contenir les attributs privés suivants :
* **m_nom** : nom du satellite, sous forme de chaîne de caractères.
* **m_masse** : masse du satellite, sous forme de nombre décimal.

Ces attributs doivent être accessibles en lecture et en écriture à l’aide de propriétés publiques. L’accès en écriture doit être restreinte aux limites de la classe.

### Propriétés
#### ``Nom``
Représente le nom du satellite.
##### Validation à faire : 
* Si la valeur reçue est *null*, vide ou constituée uniquement d’espaces, vous devez lever une exception : 
```
ArgumentException
```
#### ``Masse``
Représente la masse du satellite.
##### Validation à faire : 
* Si la valeur reçue est inférieure ou égal à 0, vous devez lever une exception :
```
ArgumentException
```
### Constructeur
Implémentez le constructeur suivant :
```csharp
public Satellite(string nom, double masse)
```
Ce constructeur initialise un nouveau satellite à partir des informations fournies.

### Méthodes
#### ``ToString()``
Retourne une chaîne de caractères indiquant le nom et la masse du satellite.

---

## Exercice 2 – Relation entre les classes Planete et Satellite

### 🎯 Objectif 
L’objectif de cet exercice est d'illustrer adéquatement une relation entre deux classes.

### 🛠️ Instructions

D’après les informations fournies à l’exercice précédent, illustrez la relation entre les classes ``Planete`` et ``Satellite``. Expliquez vos choix concernant 1) **la direction** et 2) **la cardinalité** de cette relation. Vous pouvez utiliser votre logiciel de prédilection (drawio, visio, etc.).

---

## Exercice 3 – Navigation entre les objets des classes ``Planete`` et ``Satellite``

### 🎯 Objectif 
L’objectif de cet exercice est de tester l'implémentation de vos classes et d'utiliser efficacement les propriétés de navigation.


### 🛠️ Instructions

Dans une **application console**, écrivez un programme qui demande à l'utilisateur d'entrer le nom d'un satellite.

Le programme doit lui retourner :
 - La description du satellite (son nom et sa masse);
 - La planète qui lui est associée;

:::tip
Exigences : Vous devez utiliser adéquatement les boucles ``for``/``foreach``
:::

Utilisez les tableaux suivants pour construire votre jeu de données  :

#### Tableau des planètes du système solaire
| Nom      | Masse (kg)      | Type        | Satellites                         |
|----------|------------------|-------------|------------------------------------|
| Mercure  | 3.30 e23     | Tellurique  | Aucun                              |
| Vénus    | 4.87e24     | Tellurique  | Aucun                              |
| Terre    | 5.97e24     | Tellurique  | Lune                               |
| Mars     | 6.42 e23     | Tellurique  | Phobos, Deimos                     |
| Jupiter  | 1.9e27    | Gazeuse     | Io, Europe, Ganymède, Callisto     |
| Saturne  | 5.68e26     | Gazeuse     | Titan, Encelade, Rhéa              |
| Uranus   | 8.68e25     | Gazeuse     | Titania, Obéron, Ariel             |
| Neptune  | 1.02e26     | Gazeuse     | Triton, Néréide                    |
| Pluton   | 1.30e22    | Naine       | Charon                 |

#### Tableau des satellites du système solaire
| Nom       | Masse (kg)       |
|-----------|------------------|
| Lune      | 7.35e22    |
| Phobos    | 1.07e16     |
| Deimos    | 1.48e15     |
| Io        | 8.93e22     |
| Europe    | 4.80e22     |
| Ganymède  | 1.48e23    |
| Callisto  | 1.08e23     |
| Titan     | 1.34e23    |
| Encelade  | 1.08e20     |
| Rhéa      | 2.31e21     |
| Titania   | 3.53e21     |
| Obéron    | 3.01e21     |
| Ariel     | 1.35e21     |
| Triton    | 2.14e22     |
| Néréide   | 3.1e19      |
| Charon    | 1.59e21    |


### Exemple de résultat attendu dans la console:

```
Entrez le nom d'un satellite : io

Description du satellite :
Io - Masse: 8,93E+22 kg

Planète associée :
Jupiter - Type: Gazeuse - Masse: 1,9E+27 kg - Satellites: 4

```
