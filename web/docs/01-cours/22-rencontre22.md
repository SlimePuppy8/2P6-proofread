---
description: Héritage et interfaces
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Héritage et interfaces
---

## 🎯 Objectifs

À la fin de cette séance, vous serez en mesure de :

1. Définir une classe dérivée
2. Accéder à la classe de base par la classe dérivée
3. Gérer les accès à la classe
4. Surcharger des éléments d'une classe dérivée
5. Utiliser une interface existante
6. Définir une nouvelle interface
---

## ✅ Héritage



### 📜 Définition

L’héritage est un mécanisme fondamental de la programmation orientée objet qui permet de créer une nouvelle classe (**classe dérivée ou enfant**) à partir d’une classe existante (**classe de base ou parent**). La classe dérivée va donc recevoir (ou hériter 😉) de tous les champs, constantes, propriétés et méthodes de la classe de base. Ceci nous permet d'éviter d'écrire du code redondant.

L'exemple suivant illustre comment une classe dérivée *Chien* hérite des membres d'une classe de base *Animal*. Notez que la classe dérivée peut tout de même avoir ses propres propriétés et méthodes.

<Tabs>
    <TabItem value="parent" label="Base (parent)" default>
```csharp
public class Animal
{
    public string Nom { get; set; }

    public void Danser()
    {
        Console.WriteLine("Olé!");
    }
}
```
    </TabItem>
    <TabItem value="enfant" label="Dérivée (enfant)">
```csharp
 public class Chien : Animal
 {
     public const bool TERRESTRE = true;

     public Couleur Pelage { get; set; }
     public string Aboyer()
     {
         return "Woof!";
     }
 }
```
</TabItem>
    <TabItem value="enum" label="enum">
```csharp
public enum Couleur
{
    Gris,
    Brun,
    Noir,
    Blanc,
    Orange
}
```
    </TabItem>
    <TabItem value="exemple" label="exemple">
```csharp
static void Main()
{
   
    Chien toto = new Chien();

    // Membres hérités de Animal
    toto.Nom = "Toto";
    Console.WriteLine(toto.Nom); // ✅ Toto
    toto.Danser(); // ✅ 🕺 Olé! 💃

    // Membres propres à Chien
    toto.Pelage = Couleur.Gris;
    Console.WriteLine(toto.Aboyer()); // 📢 Woof! 
    if (Chien.TERRESTRE)
    {
        Console.WriteLine("Le chien est un animal terrestre.");
    }
}
```
    </TabItem>
</Tabs>

:::danger
Avec le langage de programmation C#, il n'est pas possible de faire de l'héritage avec plusieurs classes de bases. Nous sommes restreints à **une seule classe** de base.
:::

---

### 🤔 Pourquoi utiliser l'héritage ?

L’héritage permet notamment de :
- ✅ Réduire la duplication de code
- ✅ Favoriser la réutilisation
- ✅ Structurer les classes de façon hiérarchique
- ✅ Faciliter la maintenance et l’évolution du programme


:::info
L'héritage ne sert pas seulement à réutiliser du code, mais principalement à fournir une **structure logique**. L'héritage servira aussi lorsque nous verrons le **polymorphisme**.
:::

Voici un exemple où l’héritage devient particulièrement utile. On remarque que les trois classes **`Chien`**, **`Chat`** et **`Lapin`** contiennent une méthode ``Initialiser`` identique. Cette duplication de code est redondante et rend l’entretien plus difficile. 

En introduisant une classe de base **``Animal``**, on centralise ce comportement commun. La méthode ``Initialiser`` est définie une seule fois dans cette classe, puis automatiquement héritée par les classes dérivées. On évite ainsi la répétition, on simplifie le code et on le rend plus facile à maintenir. 🥳
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


---

### ⚠️ Héritage ou composition?

Dernièrement, nous avons exploré la **composition** d'objets. Nous avons vu qu’un objet peut en contenir un autre : par exemple, une personne **a un** ou plusieurs animaux. 

L'**héritage** nous apporte un nouveau défi : comment choisir entre implémenter l'**héritage** ou la **composition**.

Un truc très utile est le test du langage naturel. Il consiste à verbaliser la relation entre deux classes à voix haute :

* Si l’on peut dire qu’une classe "**a un**" (ex. : une personne *a un* animal), on privilégie la composition.
* Si l’on peut dire qu’une classe "**est un**" (ex. : un chien *est un* animal), on privilégie l’héritage.


✅ Exemples de composition :
- Une Voiture **a un** Moteur
- Un Cours **a un** Enseignant
- Un Ordinateur **a un** Processeur


✅ Exemples valides d'héritage :
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
- Relation “*a un*” au lieu de “*est un*”

:::tip
👉 Règle classique :  Favoriser la composition plutôt que l’héritage
:::

---

### ☎️ Appel au constructeur de la classe parent (avec le mot-clé `base`)

En C#, il est possible d'appeler le constructeur de la classe **parent** avant d'appeler le constructeur de la classe **dérivée**. Ceci est très pratique pour compléter
l'initialisation de notre nouvelle classe.

```csharp


class Animal
{
    protected string m_nom;

    public Animal(string pNom) // Constructeur de la classe de base
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

---

### ⛔ Public, private et protected!

Nous sommes déjà familiers avec deux niveaux d’accès aux éléments d’une classe : **`public`** et **`private`**. Un troisième niveau vient s'ajouter, le niveau **`protected`**.

🔓 **`public`** : les éléments ayant le préfixe ``public`` sont accessibles de partout, sans restriction. Dans un contexte d’héritage, ils sont donc accessibles autant dans la classe de base que dans les classes dérivées. 

🔒 **`private`** : les éléments sont accessibles uniquement à l’intérieur de la classe qui les définit. Une classe dérivée n’y a donc pas accès..

🔐 Mais il existe une situation intermédiaire : on souhaite **restreindre l’accès au monde extérieur**, tout en permettant aux classes dérivées d’y accéder. C’est exactement le rôle de **``protected``**. Les éléments déclarés ``protected`` sont accessibles dans la classe de base **et** dans toutes ses classes dérivées, mais demeurent inaccessibles depuis l’extérieur.

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


---

### 🧑‍🤝‍🧑 Virtual et Override

Le mot-clé **virtual** est utilisé **dans la classe de base** pour indiquer qu’une méthode (ou propriété) peut être redéfinie dans une classe dérivée.

Le mot‑clé **override** est utilisé **dans une classe dérivée** pour fournir une nouvelle implémentation d’une méthode (ou propriété) héritée de la classe de base. Il permet ainsi de spécialiser ou modifier le comportement défini initialement.

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


---


## ✅ Interface

Dans la section précédente, nous avons vu que *l’héritage* permet d’établir une relation de type « **est un** » entre une classe *enfant* et une classe *parent* (ex. Chien **est un** Animal). Cela permettait à la classe Chien d’hériter de l’ensemble des constantes, variables membres, propriétés et méthodes implémentées dans la classe Animal.

Mais que faire si les objets qu’on souhaite regrouper ne respectent pas une relation « **est un** » ? 

Exemples :

* Un robot *peut* avoir un nom et *peut* danser, mais **n’est pas** un animal.
* Un humain *peut* avoir un nom et *peut* danser, mais **n’est pas** un animal.

👉 Ici, l’héritage devient forcé et conceptuellement incorrect. Il convient alors de parler d'une relation «**peut faire**».


### 📜 Définition

Une interface est un *contrat* dans lequel il est précisé ce qu’un objet **peut faire**, mais **pas comment le faire**.

Concrètement, cela signifie que l'interface contient :
* des propriétés
>> Uniquement leur nom, leur type et leur mode d'accès minimal (*get/set*)
* des méthodes
>> Uniquement leur signature incluant les paramètres et leur type, ainsi et que le type de retour de la méthode

L'interface ne contient :

❌ aucune implémentation

❌ aucun champ (ou variable membre)

👉 En d'autres mots, l'interface impose une **structure globale**, mais pas d'implémentation spécifique.

Voici à quoi ressemblerait *Animal* sous forme d'interface :

```csharp
interface IAnimal
{
    string Nom { get; set; } // Aucune implémentation

    void Danser(); // Aucune implémentation, strictement la signature
}

```

:::note
Par défaut, tout le contenu d'une interface est `abstract` et `public`. Nous aborderons la notion d'abstraction lors de l'introduction au *Polymorphisme* !
:::

:::important
Tous les identificateurs des interfaces débutent par la lettre **i** en majuscule.
:::

---

### Utiliser une interface existante


1)  Au moment de définir une nouvelle classe, complétez l’identificateur de la classe par « **:** » suivi du nom de l'interface (comme pour l'*héritage* !)
    
    >> Si le nom de l’interface est souligné en *rouge*, c’est normal à ce stade : le contrat n’est pas encore respecté ! Pour satisfaire le compilateur, il faut implémenter les propriétés et les méthodes de l'interface. 
    
    :::tip
     Positionnez votre curseur sur l'erreur du compilateur > Faites dérouler les *Actions rapides* > Cliquez sur **Implémenter l’interface**. Ceci génère le squelette d’une classe qui satisfait le contrat de `ICreationDivine`.
    

    ![Générer le squelette d'une classe qui satisfait le contrat de l'interface](@site/static/img/R22/implementer_interface.png)

    :::

2)	Complétez la classe pour la rendre fonctionnelle.



<Tabs>
    <TabItem value="interface" label="Interface" default>
```csharp
public interface ICreationDivine
{
    string Nom { get; set; }

    void Danser();

}

```
</TabItem>
    <TabItem value="robot" label="Classe Robot">
```csharp
public class Robot : ICreationDivine
{
    public string Nom { get; set; }

    public Robot(string nom)
    {
        Nom = nom;
    }

    public void Danser()
    {
        Console.WriteLine($"{Nom} est maître de Tecktonik.");
    }
}

```

    </TabItem>
    <TabItem value="humain" label="Classe Humain">
```csharp
public class Humain : ICreationDivine
{
    public string Nom { get; set; }

    public Humain(string nom)
    {
        Nom = nom;
    }

    public void Danser()
    {
        Console.WriteLine($"{Nom} effectue le moonwalk.");
    }
}

```
    </TabItem>
    <TabItem value="exemple" label="Main">
```csharp
public void Main()
{
    ICreationDivine robot = new Robot("R2D2");
    ICreationDivine humain = new Humain("Philippe");

    robot.Danser(); // Affichera "R2D2 est maître de Tecktonik."
    humain.Danser(); // Affichera "Philippe effectue le moonwalk."
    
}
```
    </TabItem>
</Tabs>

---

### Définir une nouvelle interface

Pour définir une nouvelle interface : 
1. Cliquez sur votre **projet** dans l'*Explorateur de solution* avec le bouton droit de votre souris
2. Choisissez **Ajouter**, puis **Nouvel élément...** 
3. Vous pourrez alors sélectionner l'élément **Interface** et le renommer en respectant la nomenclature.

![Ajouter une nouvelle interface](@site/static/img/R22/ajouter_interface.png)


:::note
Par défaut, l'interface nouvellement créée aura une visibilité `internal`. N'hésitez pas à l'adapter au besoin.
:::

---

## ✅ Héritage vs Interface

### 🖼️ Tableau des différences

|Héritage|Interface|
|--------|---------|
|Permet de réutiliser du code|Définit un contrat à respecter|
|Relation “*est un*” entre classe *enfant* et classe *parent*| Relation "*peut faire*" entre une classe et une interface|
|Une classe *enfant* ne peut hériter que d'une seule classe *parent*|Une même classe peut implémenter plusieurs interfaces

---

## 🧪 Laboratoire 11.1
Vous devez réaliser le labo suivant :
 [🧪 Labo 11.1](/laboratoire/laboratoire11.1A)

---
