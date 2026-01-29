---
description: Définition des classes
---

# Révision - Définition des classes

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
}
```

Une classe est composée de plusieurs éléments permettant de **stocker des informations** et de **définir des comportements**.


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

---

👉 Cet exemple montre comment une classe regroupe **données** (champ), **accès** (propriété) et **comportements** (méthode) dans une même structure cohérente.
### ✅ Récapitulatif

| Élément      | Rôle                                                  |
| ------------ | ----------------------------------------------------- |
| Champ        | Stocker une information                               |
| Propriété    | Accéder aux champs de manière contrôlée               |
| Constructeur | Initialiser les champs lors de la création de l’objet |
| Méthode      | Manipuler les champs et définir le comportement       |



Une classe est généralement constituée des éléments suivants :

* **Un ou plusieurs champs**
  Ce sont des **variables membres privées** qui stockent l’état interne de l’objet.

* **Une ou plusieurs propriétés**
  Elles permettent de **donner accès aux champs** de manière contrôlée (lecture et/ou écriture).

* **Un ou plusieurs constructeurs**
  Ils servent à **initialiser les champs** lors de la création d’un objet à partir de la classe.

* **Une ou plusieurs méthodes**
  Elles définissent les **actions** que l’objet peut effectuer et permettent de **manipuler les champs**.


---









## 📚 Ressources supplémentaires

👉 Notions C# : [Instanciation objet](https://info.cegepmontpetit.ca/notions-csharp/documentation/instanciation-objet)


Vous devez réaliser le labo suivant :
 [🧪 Labo 2.1](/laboratoire/laboratoire2.1)

---
