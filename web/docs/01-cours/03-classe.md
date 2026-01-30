---
description: Définition des classes
---

# Définition des classes

## 🎯 Objectifs
1. Définir une classes

## ✅ Une classe
### 1. Définition


Une **classe** est un modèle (ou plan) permettant de définir un type d’objet.
Elle regroupe **des données** (champs) et **des comportements** (méthodes) qui décrivent et contrôlent l’objet.

En C#, le mot-clé **`class`** permet de définir une classe.
Chaque classe possède un **identificateur significatif**, choisi de manière à représenter clairement son rôle.

### Exemple de déclaration d’une classe

```csharp
public class CompteurHydro
{
    /// Définir un ou plusieurs champs
    /// Définir une ou plusieurs propriétés
    /// Définir un ou plusieurs constructeurs
    /// Définir une ou plusieurs méthodes
}
```

## 2. Exemple de classe et description des éléments

La classe `CompteurHydro` représente un compteur d’électricité permettant de mémoriser et de mettre à jour une consommation.

```csharp
 public class CompteurHydro
 {
     /// <summary>
     /// Constante : stocke le prix (en dollars) d'un KWh
     /// </summary>
     public const double PRIX_KWH = 0.6905;

     /// <summary>
     /// Champ : stocke la consommation actuelle du compteur.
     /// </summary>
     private int m_consommationActuelle;

     /// <summary>
     /// Propriété : permet d'accéder à la consommation actuelle du compteur.
     /// </summary>
     public int ConsommationActuelle
     {
         // Accès en lecture uniquement
         get { return m_consommationActuelle; }
     }

     /// <summary>
     /// Constructeur : initialise une nouvelle instance de la classe CompteurHydro.
     /// </summary>
     public CompteurHydro()
     {
         // Initialisation du champ
         m_consommationActuelle = 0;
     }

     /// <summary>
     /// Méthode : ajoute une quantité d'électricité à la consommation actuelle.
     /// </summary>
     /// <param name="pQuantitéKwh">
     /// Quantité d'électricité (en kWh) à ajouter.
     /// </param>
     public void Consommer(int pQuantitéKwh)
     {
         // Mise à jour du champ
         m_consommationActuelle += pQuantitéKwh;
     }
     /// <summary>
     /// Méthode : Calcule le cout de la consommation
     /// </summary>
     /// <returns>coût (en dollars) de la consommation actuelle</returns>
     public double CoutConsommation()
     {
         
         return PRIX_KWH * m_consommationActuelle/100;
     }
 }
```

Une classe est composée de plusieurs éléments permettant de **stocker des informations** et de **définir des comportements**.

### 🔹 Constante (variable membre)

La constante est un champ de classe **statique et immuable**. Sa valeur est fixe et partagée par toutes les instances de la classe.
Elle est accessible via le nom de la classe : **ComteurHydro.PRIX_KWH.
Dans cet exemple, PRIX_KWH stocke le prix d’un kilowattheure (en dollars).


```csharp
    public const double PRIX_KWH = 0.6905;
```

---

### 🔹 Champ (variable membre)

Un **champ** est une **variable membre privée** qui sert à stocker une information propre à l’objet.
Il n’est accessible qu’à l’intérieur de la classe.
Dans cet exemple le champ m_consommationActuelle sert à stocker la consommation actuelle du compteur.

```csharp
private int m_consommationActuelle;
```

---

### 🔹 Propriété

Une **propriété** permet de **donner accès à un champ** en lecture et/ou en écriture, tout en contrôlant cet accès.
Dans cet exemple, la propriété ConsommationActuelle permet uniquement la **lecture** de la consommation actuelle.

```csharp
public int ConsommationActuelle
{
    // Accès en lecture
    get { return m_consommationActuelle; }
}
```

---

### 🔹 Constructeur

Un **constructeur** est une méthode particulière appelée lors de la création d’un objet.
Il sert à **initialiser tous les champs** (variables membres) de la classe.
Dans cet exemple, le constructuer CompteurHydro initialise le champ m_consommationActuelle à zéro.

```csharp
public CompteurHydro()
{
    m_consommationActuelle = 0;
}
```

---

### 🔹 Méthode

Une **méthode** définit un comportemnent de l'objet. Elle permet d’**effectuer un traitement** ou une action sur un ou plusieurs champs de la classe.

Dans cet exemple, la méthode Consommer permet de **modifier la consommation** en ajoutant une quantité donnée.

```csharp
public void Consommer(int pQuantitéKwh)
{
    m_consommationActuelle += pQuantitéKwh;
}
```
La méthode CoutConsommation permet de calculer et retourner le coût de la consommation.

```csharp
public double CoutConsommation()
{
    
    return PRIX_KWH * m_consommationActuelle/100;
}
```
---

👉 Cet exemple montre comment une classe regroupe **données** (champ), **accès** (propriété) et **comportements** (méthode) dans une même structure cohérente.
### ✅ Récapitulatif

| Élément      | Rôle                                                  |
| ------------ | ----------------------------------------------------- |
| Champ        | Stocker une information  (l’état interne de l’objet)  |
| Propriété    | Accéder aux champs de manière contrôlée               |
| Constructeur | Initialiser les champs lors de la création de l’objet |
| Méthode      | Manipuler les champs et définir le comportement       |


---
### 1. Instanciation d’une classe

L’instanciation d’une classe est le processus qui consiste à **créer** un **objet** à partir d’une **classe**.
La classe sert de **modèle**, et l’objet est une **instance** concrète de ce modèle en **mémoire**.


#### Rôle du constructeur

Lors de l’instanciation, le constructeur de la classe est automatiquement appelé.
Il permet :
* d’allouer l’espace mémoire nécessaire à l’objet
* d’initialiser ses variables membres

#### Syntaxe d'instanciation

CompteurHydro compteur = new CompteurHydro();
```csharp
CompteurHydro compteur = new CompteurHydro();
```
##### Explication

* CompteurHydro : type de la classe
* compteur : variable qui va contenir la référence vers l’objet créé
* **new** : mot-clé qui crée une nouvelle instance
* CompteurHydro() : appel du constructeur

Dans la classe CompteurHydro, le constructeur initialise la consommation à zéro.



## 📚 Ressources supplémentaires

👉 Notions C# : [Instanciation objet](https://info.cegepmontpetit.ca/notions-csharp/documentation/instanciation-objet)


Vous devez réaliser le labo suivant :
 [🧪 Labo 2.1](/laboratoire/laboratoire2.1)

---
