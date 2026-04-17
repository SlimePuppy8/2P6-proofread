---
description: Définition des classes
---

# Définition des classes

## 🎯 Objectifs
1. Définir une classes

## ✅ Une classe
### 📜 Définition


Une **classe** est un modèle (ou plan) permettant de définir un type d’objet.
Elle regroupe **des données** (champs) et **des comportements** (méthodes) qui décrivent et contrôlent l’objet.

En C#, le mot-clé **`class`** permet de définir une classe.
Chaque classe possède un **identificateur significatif**, choisi de manière à représenter clairement son rôle.

Pour s'imaginer la distinction entre une **classe** et un **objet**, on peut s'imaginer que la classe est la **recette** pour faire une pizza et que les quatre pizzas sont des instances différentes de la classe. La pizza **`aux pepperonis`**, la **`toute garnie`**, la **`aux tomates et basiliques`** et la **`fromage`** sont des **objets** de la **classe `RecettePizza`**.

![](@site/static/img/R03/recettePizzas.png)

### 💡 Exemple de déclaration d’une classe

```csharp
public class CompteurHydro
{
    /// Définir un ou plusieurs champs
    /// Définir une ou plusieurs propriétés
    /// Définir un ou plusieurs constructeurs
    /// Définir une ou plusieurs méthodes
}
```

### ✨ Création d'une classe

Afin de créer une classe, vous devrez ajouter un fichier **`.cs`** poutant son nom. 

À partir de l'explorateur de solution, cliquez avec le **bouton droit** de la souris sur le **projet** où vous voulez ajouter la classe. Choisissiez **`Ajouter`** et allez sélectionner **`Classe...`**.

![](@site/static/img/R03/ajouterClasse.png)

Dans la liste d'éléments affichés, choisissez **`Classe Élements C#`** et choisissez un nom pertinent.

![](@site/static/img/R03/nommerClasse.png)

**Visual Studio** va vous créer votre nouvelle classe dans un fichier **`.cs`** pourtant le même nom. Vous pouvez maintenant ajouter vos fonctionnalités!

![](@site/static/img/R03/positionClasse.png)

## ✅ Anatomie d'une classe

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
     /// Propriété : permets d'accéder à la consommation actuelle du compteur.
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

### ♾️ Constante (variable membre)

La constante est un champ de classe **statique et immuable**. Sa valeur est fixe et partagée par toutes les instances de la classe.
Elle est accessible via le nom de la classe : **`CompteurHydro.PRIX_KWH`**.
Dans cet exemple, **`PRIX_KWH`** stocke le prix d’un kilowattheure (en dollars).


```csharp
    public const double PRIX_KWH = 0.6905;
```

---

### 🤫 Champ (variable membre)

Un **champ** est une **variable membre privée** qui sert à stocker une information propre à l’objet.
Il n’est accessible qu’à l’intérieur de la classe.
Dans cet exemple le champ m_consommationActuelle sert à stocker la consommation actuelle du compteur.

```csharp
private int m_consommationActuelle;
```

---

### 📂 Propriété

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

### 🛠️ Constructeur

Un **constructeur** est une méthode particulière appelée lors de la création d’un objet.
Il sert à **initialiser tous les champs** (variables membres) de la classe. Il est possible d'avoir plus d'un constructeur. À ce moment,
les constructeurs sont différenciés par leurs paramètres.
Dans cet exemple, le constructeur CompteurHydro initialise le champ m_consommationActuelle à zéro.

```csharp
public CompteurHydro()
{
    m_consommationActuelle = 0;
}
```

---

### ⚙️ Méthode

Une **méthode** définit un comportement de l'objet. Elle permet d’**effectuer un traitement** ou une action sur un ou plusieurs champs de la classe.
Il est important de s'assurer de ne donner qu'une seule responsabilité à une méthode. Des méthodes courtes, simples et ciblées sont la clé du succès.

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
### 🤔💭 Récapitulatif

| Élément      | Rôle                                                  |
| ------------ | ----------------------------------------------------- |
| Champ        | Stocker une information  (l’état interne de l’objet)  |
| Propriété    | Accéder aux champs de manière contrôlée               |
| Constructeur | Initialiser les champs lors de la création de l’objet |
| Méthode      | Manipuler les champs et définir le comportement       |


---

## ✅ Modificateurs d'accès

Les modificateurs d'accès sont des mots clés limitant l'accessibilité d'une classe, d'une méthode, d'un champ, d'une propriété, etc.

### 👥 Publique (Public)
**`Public`** est un modificateur d'accès qui permet d'utiliser le code depuis une autre classe, un autre fichier, une autre méthode.

Voici un exemple:
```CSHARP
public class Chat
{
    public string Nom = "";
}

class Programme
{
    static void Main()
    {
        Chat monChat = new Chat();

        monChat.Nom = "Mia"; // ✅ L'accès à la variable est permise.

        Console.WriteLine($"Le nom de mon chat est: {monChat.Nom}.");
        // Console: Le nom de mon chat est : Mia.
    }
}
```

### 🚫 Privé (Private)
**`Private`** est un modificateur d'accès qui limite l'utilisation du code à l'intérieur de la classe. C'est un peu comme une variable locale qui est
limitée à l'intérieur de la méthode.

Voici un exemple où la variable ne serait pas accessible:
```csharp
public class Chien
{
    private string Nom = "";
}

class Programme
{
    static void Main()
    {
        Chien monChien = new Chien();

        monChien.Nom = "Snoopy"; // ❌ L'accès à la variable n'est pas permise. 
        // Ceci va causer une erreur de compilation.

        Console.WriteLine($"Le nom de mon chien est: {monChien.Nom}."); // ❌
        // ...erreur!
    }
}
```


## ✅ Instanciation d’une classe (création d'un objet)

L’instanciation d’une classe est le processus qui consiste à **créer** un **objet** à partir d’une **classe**.
La classe sert de **modèle**, et l’objet est une **instance** concrète de ce modèle en **mémoire**.


### 🛠️ Rôle du constructeur

Lors de l’instanciation, le constructeur de la classe est automatiquement appelé.
Il permet :
* d’allouer l’espace mémoire nécessaire à l’objet
* d’initialiser ses variables membres

### 📝 Syntaxe d'instanciation

CompteurHydro compteur = new CompteurHydro();
```csharp
CompteurHydro compteur = new CompteurHydro();
```
### Explication

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
