---
description: Héritage et interfaces
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Héritage et interfaces

## 🎯 Objectifs
1. Définir une classe dérivée
2. Accéder à la classe de base par la classe dérivée
3. Gérer les accès à la classe
4. Surcharger des éléments d'une classe dérivée
5. Définir et utiliser une interface

## ✅ Héritage



### 📜 Définition
L’héritage est un mécanisme qui permet à une nouvelle classe, que l'on va appeler classe dérivée ou enfant, d'acquérir automatiquement les caractéristiques d'une classe existante, que l'on va appeler classe de base ou parente. 

L’héritage est un mécanisme fondamental de la programmation orientée objet qui permet de créer une nouvelle classe à partir d’une classe existante (classe de base ou parente). La classe dérivée va donc recevoir (hériter 😉) tous les champs, constantes, propriétés et méthodes de la classe d’initiale. Ceci nous permet d'éviter d'écrire du code redondant.

La classe dérivée hérite :
- Constantes
- Variables
- Propriétés
- Méthodes

<Tabs>
    <TabItem value="parent" label="Base (parent)" default>
```csharp
public class Animal
{
    public string Nom { get; set; }

    public void Danser()
    {
        // ...
    }
}
```
    </TabItem>
    <TabItem value="enfant" label="Dérivée (enfant)">
```csharp
public class Chien : Animal
{
    const bool TERRESTRE = true;

    public Couleur Pelage { get; set; }
    public string Aboyer()
    {
        return "Woof!";
    }
}
```
    </TabItem>
    <TabItem value="exemple" label="exemple">
```csharp
public void Test()
{
    Chien toto = new Chien();
    toto.Pelage = Couleur.Gris;
    console.log(toto.Aboyer()); // 📢 Woof! 

    // Classe de base (Animal)
    if(Animal.TERRESTRE) // ✅ ceci est possible puisque la classe chien hérite de la classe Animal.
    {
        toto.Nom = "Toto"; // ✅ Toto! 🐶
        toto.Danser(); // ✅ 🕺olé! 💃
    }
}
```
    </TabItem>
</Tabs>

:::danger
Dans le langage de programmation que nous utilisons, **C#**, il n'est pas possible de faire de l'héritage avec plusieurs classes de bases. Nous sommes restreints à **une seule classe** de base.
:::


### 🤔 Pourquoi?

L’héritage permet notamment de :
- ✅ Réduire la duplication de code
- ✅ Favoriser la réutilisation
- ✅ Structurer les classes de façon hiérarchique
- ✅ Faciliter la maintenance et l’évolution du programme


:::info
L'héritage ne sert pas seulement à réutiliser du code, mais principalement à fournir une **structure logique**. L'héritage servira aussi lorsque nous verrons le **polymorphisme**.
:::

Voici un exemple où l'héritage devient un outil intéressant. On remarque que les trois classes **`Chien`**, **`Chat`** et **`Lapin`** sont initialisées de la même façon.
Le code est redondant et pourrait être amélioré. En utilisant l'héritage, la méthode **`Initialiser`** n'est plus répétée. 🥳
<Tabs>
    <TabItem value="probleme" label="❌ Code redondant" default>
```csharp
public class Chien
{
    // ...
    public void Initialiser(int pNombrePattes, Couleur pFourrure, bool pPossedeQueue)
    {
        NombrePattes = pNombrePattes;
        Fourrure = pFourrure;
        PossedeQueue = pPossedeQueue;
    }
}

public class Chat
{
    // ...
    public void Initialiser(int pNombrePattes, Couleur pFourrure, bool pPossedeQueue)
    {
        NombrePattes = pNombrePattes;
        Fourrure = pFourrure;
        PossedeQueue = pPossedeQueue;
    }
}

public class Lapin
{
    // ...
    public void Initialiser(int pNombrePattes, Couleur pFourrure, bool pPossedeQueue)
    {
        NombrePattes = pNombrePattes;
        Fourrure = pFourrure;
        PossedeQueue = pPossedeQueue;
    }
}
```
    </TabItem>
    <TabItem value="solution" label="✅ Code hérité">
```csharp
public class Animal
{
    // ...
    public void Initialiser(int pNombrePattes, Couleur pFourrure, bool pPossedeQueue)
    {
        NombrePattes = pNombrePattes;
        Fourrure = pFourrure;
        PossedeQueue = pPossedeQueue;
    }
}

public class Chien : Animal
{
    // Sans avoir à l'écrire, la méthode Initialiser existe maintenant dans cette classe dérivée!
}

public class Chat : Animal
{
    // Sans avoir à l'écrire, la méthode Initialiser existe maintenant dans cette classe dérivée!
}

public class Lapin : Animal
{
    // Sans avoir à l'écrire, la méthode Initialiser existe maintenant dans cette classe dérivée!
}
```
    </TabItem>
    <TabItem value="exemple" label="🔎 Exemple">
```csharp
public class Program
{
    static void Main(string[] args)
    {
        Chien toto = new Chien();
        Chat garfield = new Chat();
        Lapin bugsBunny = new Lapin();

        toto.Initialiser(4, Couleur.Brun, true);
        garfield.Initialiser(4, Couleur.Orange, true);
        bugsBunny.Initialiser(4, Couleur.Gris, true);
    }
}
```
    </TabItem>
</Tabs>

### ⚠️ Héritage ou composition?

Dernièrement, nous avons appris la **composition** d'objet. Nous avons vu qu'un objet peut posséder un autre objet. 
Une personne **a-un** ou plusieurs animaux. 

L'**héritage** nous apporte un nouveau défi. Il sera difficile de choisir entre implémenter l'**héritage** ou la **composition**.

Un truc très utile est le test du langage naturel. Nous devons comparer les deux classes et verbaliser leur relation. Lorsque nous sommes en mesure de dire 
qu'une classe **a-un**, nous utiliserons la **composition**. Parcontre, nous devrions considérer l'héritage lorsque la réponse pourrait être un **est-un**.

Si la phrase correcte est :

Un objetA **a-un** objetB, alors on utilise la composition.

✅ Exemples :
- Une Voiture **a un** Moteur
- Un Cours **a un** Enseignant
- Un Ordinateur **a un** Processeur


✅ Héritage → **est-un**
Si la phrase suivante est vraie sans ambiguïté :

Un **`objetA`** est un **`objetB`**, alors l’héritage est possible.

✅ Exemples valides :
- Un Chien **est un** Animal
- Un Étudiant **est un** Humain
- Un CompteÉpargne **est un** Compte

❌ Exemples douteux :
- Une Voiture **est un** Moteur ❌
- Un Professeur **est un** Département ❌
- Un Ordinateur **est un** Clavier ❌


L’héritage est puissant… mais parfois mal utilisé.

❌ Mauvais usage :
- Juste pour partager du code
- Hiérarchie trop profonde
- Relation “a-un” au lieu de “est-un”

:::tip
👉 Règle classique :  Favoriser la composition plutôt que l’héritage
:::

### ☎️ Constructeur parent (Base)

En C#, il est possible d'appeler le constructeur de la classe de base avant d'appeler le constructeur de la classe dérivée. Ceci est très pratique pour compléter la
l'initialisation de notre nouvelle classe.

```csharp


class Animal
{
    protected string m_nom;

    public Animal(string pNom)
    {
        m_nom = pNom;
    }
}

class Chien : Animal
{
    private int m_age;
    public Chien(string pNom, int pAge) : base(pNom)
    {
        // Nous n'avons pas à initialiser le nom du chien
        // puisque nous appelons le constructeur 
        // d'Animal avec base(pNom)
        m_age = pAge;
    }
}
```

### ⛔ Public, private et protected!

Nous sommes familié avec deux niveaux d'accès aux éléments d'une classe, soit **`public`** et **`private`**. Un troisième niveau vient s'ajouter, le niveau **`protected`**.

🔓 Le comportement de **`public`** ne change pas et restera le même. Tous les éléments ayant le préfixe public seront accessibles de partout. Il n'y a aucune restriction. Ce qui veut dire que, dans le cas de l'héritage, les éléments de la classe de base seront accessibles par la classe dérivée. 

🔒 Idem pour le comportement du préfix **`private`**. Aucun des éléements ayant ce préfixe ne seront accessibles. La classe dérivée n'aura donc pas accès aux éléments ayant le préfixe **`private`**.

🔐 Parcontre, il existe une situation où l'on voudrait garder la restriction d'accès **`private`**, mais où on voudrait quand même réutiliser ces éléments restreints à l'intérieur de notre classe dérivée. C'est exactement le rôle du préfixe **`protected`**.

#### Prenons l'exemple suivant:

Nous voulons **restreindre l'accès** de la propriété **`Son`** à l'**extérieur** de la classe dérivée. Notre chien doit aboyer avec un beau **"Wouf!"**.
Regardons ce qui se passe lorsque l'on change le **préfixe** de la propriété **`Son`**:
<Tabs>
    <TabItem value="public" label="🔓 Public" default>
     
```csharp
    public class Animal
    {
        // Accès public 🔓
        public string Son { get; set; }

        public string Parler()
        {
            return Son;
        }

        public Animal()
        {
            Son = "Grrr!";
        }
    }
    public class Chien : Animal
    {
        public Chien() : base() 
        {
            Son = "Wouf!"; // ✅ grâce au public 🔓
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Chien toto = new Chien();

            toto.Son = "Miaou!"; // ❌ Propriété public🔓 
            // Oups! Nous sommes capables de changer la propriété...

            Console.Write(toto.Parler()); // ❌ "Miaou!" 
            // Un chien, ça ne miaule pas 🙄
        }
    }
```
    </TabItem>
    <TabItem value="private" label="🔒 Private">    
```csharp
    public class Animal
    {
        // Accès privé 🔒
        private string Son { get; set; }

        public string Parler()
        {
            return Son;
        }

        public Animal()
        {
            Son = "Grrr!";
        }
    }
    public class Chien : Animal
    {
        public Chien() : base() 
        {
            Son = "Wouf!"; // ❌ Erreur de compilation, propriété privée🔒
            // Nous ne sommes pas en mesure de changer la valeur, la
            // restriction est trop sévère... 😔
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Chien toto = new Chien();

            toto.Son = "Miaou!"; // ✅⛔ Erreur de compilation, propriété privée🔒
            // Nous avons réussi à restreindre la propriété Son.

            Console.Write(toto.Parler()); // ❌ "Grrr!" 😮 
            // Remarquez que même si la propriété n'est pas accessible par la 
            // classe dérivée, elle existe quand-même avec une valeur!
        }
    }
```
    </TabItem>
    <TabItem value="Protected" label="🔐 Protected" > 
```csharp
    public class Animal
    {
        // Accès protected 🔐
        protected string Son { get; set; }

        public string Parler()
        {
            return Son;
        }

        public Animal()
        {
            Son = "Grrr!";
        }
    }
    public class Chien : Animal
    {
        public Chien() : base() 
        {
            Son = "Wouf!"; // ✅ grâce au protected 🔐
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Chien toto = new Chien();

            toto.Son = "Miaou!"; // ✅⛔ Erreur de compilation, propriété protected 🔐
            // Nous gardons ici la possibilité de restreindre l'accès 
            // à la propriété à l'extérieur de la classe dérivée! 🥳

            Console.Write(toto.Parler()); // ✅ "Wouf!" 🐶
        }
    }
```
    </TabItem>
</Tabs>

#### 🔑 Tableau résumé des accès aux membres
|Mot-clé|Accessible par la classe enfant|
|-------|-------------------------------|
|public|✅|
|protected|✅|
|private|❌|

### 🧑‍🤝‍🧑 Virtual et Override

Le mot-clé **virtual** est utilisé dans la classe de base pour indiquer qu'il est possible de redéfinir cette méthode dans la classe dérivée.

Le mot‑clé **override** est utilisé dans une classe dérivée pour redéfinir le comportement d’une méthode (ou propriété) héritée de la classe de base.

Ces deux mots-clés sont d'excellents amis et se retrouvent souvent ensemble. Ceux-ci permettent à une classe dérivée de fournir sa propre version 
d'une méthode définie dans la classe parente.

<Tabs>
    <TabItem value="parent" label="Base (parent)" default>
```csharp
public class Animal
{
    public virtual void Parler()
    {
        Console.WriteLine("Bruitage générique");
    }
}
```
    </TabItem>
    <TabItem value="enfant" label="Dérivée (enfant)">
```csharp
public class Chien : Animal
{
    public override void Parler()
    {
        Console.WriteLine("Aboiement");
    }
}
```
    </TabItem>
    <TabItem value="exemple" label="exemple">
```csharp
public void Test()
{    
    Chien a = new Chien();
    a.Parler(); // "Aboiement"
}
```
    </TabItem>
</Tabs>

## ✅ Interface
### 📜 Définition

## ✅ Héritage vs Interface

### 🖼️ Tableau des différences

|Héritage|Interface|
|--------|---------|
|Réutilise du code|Définit un contrat|
|Relation “est-un”|Capacité / comportement|
Une seule classe parente|Plusieurs interfaces