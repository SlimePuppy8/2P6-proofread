---
description: Héritage et interfaces
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Héritage et interfaces

## 🎯 Objectifs
1. Définir une classes dérivée
2. Accèder à la classe de base par la classe dérivée
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
    public Couleur Pelage { get; set; }
    public void Aboyer()
    {
        // ...
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
    // 🤯
    toto.Nom = "Toto"; // ✅ ceci est possible puisque la classe chien hérite de la classe Animal.
}
```
    </TabItem>
</Tabs>

:::danger
Dans le langage de programmation que nous utilisons, **C#**, il n'est pas possible de faire de l'héritage avec plusieurs classes de bases. Nous sommes restreints à **une seule classe** de base.
:::


### 🤔 Pourquoi?

:::info
L'héritage ne sert pas seulement à réutiliser du code, mais principalement à fournir une **structure logique**. L'héritage servira aussi lorsque nous verrons le polymorphisme.
:::

### ⚠️ Limites et dangers
L’héritage est puissant… mais parfois mal utilisé.

❌ Mauvais usage :
- Juste pour partager du code
- Hiérarchie trop profonde
- Relation “a-un” au lieu de “est-un”

:::tip
👉 Règle classique :  Favoriser la composition plutôt que l’héritage
:::
### ☎️ Base
```csharp

public class Chien: Animal
{
    public Chien(string pNom) : base(string pNom)
    {

    }
}

```

### ⛔ Public, private et protected!

Nous sommes familié avec deux niveaux d'accès aux éléments d'une classe, soit **`public`** et **`private`**. Un troisième niveau vient s'ajouter, le niveau **`protected`**.

🔓 Le comportement de **`public`** ne change pas et restera le même. Tous éléments ayant le préfix public sera accessible de partout. Il n'y a aucune restriction. Ce qui veut dire que dans le cas de l'héritage, les éléments de la classe de base seront accessible par la classe dérivée. 

🔒 Idem pour le comportement du préfix **`private`**. Aucun des éléements ayant ce préfix ne sera accessible. La classe dérivée n'aura donc pas accès aux éléments ayant le préfixe **`private`**.

🔐 Parcontre, il existe une situation où l'on voudrait garder la restriction d'accès **`private`**, mais où on voudrait quand-même réutiliser ces éléments restreints à l'intérieur de notre classe dérivée. C'est exactement le rôle du préfixe **`protected`**.

#### 🔑 Accès aux membres
|Mot-clé|Accessible par la classe enfant|
|-------|-------------------------------|
|public|✅|
|protected|✅|
|private|❌|

### 💥 Override

### 📖 Exemples

## ✅ Interface

Dans la section précédente, nous avons vu que *l’héritage* permet d’établir une relation de type « **est un** » entre une classe *enfant* et une classe *parent* (ex. Chien **est un** Animal). Cela permettait à la classe Chien d’hériter de l’ensemble des constantes, variables membres, propriétés et méthodes implémentées dans la classe Animal.

👉 L’héritage permet donc principalement de **réutiliser du code**.


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


### Utiliser une interface existante


1)  Au moment de définir une nouvelle classe, complétez l’identificateur de la classe par « **:** » suivi du nom de l'interface (comme pour l'*héritage* !)
    
    >> Si le nom de l’interface est souligné en *rouge*, c’est normal à ce stade : le contrat n’est pas encore respecté ! Pour satisfaire le compilateur, il faut implémenter les propriétés et les méthodes de l'interface. 
    
    :::tip
     Positionnez votre souris sur l'erreur du compilateur > Faites dérouler les *Actions rapides* > Cliquez sur **Implémenter l’interface**. Ceci génère le squelette d’une classe qui satisfait le contrat de `ICreationDivine`.
    

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


### Définir une nouvelle interface

Pour définir une nouvelle interface, cliquez sur votre **projet** dans l'*Explorateur de solution* avec le bouton droit de votre souris. Choisissez **Ajouter**, puis **Nouvel élément...** . Vous pourrez alors sélectionner l'élément **Interface** et le renommer en respectant la nomenclature.

:::note
Par défaut, l'interface nouvellement créée aura une visibilité `internal`. N'hésitez pas à l'adapter au besoin.
:::



:::danger
**AJOUTER IMPLÉMENTATION D'INTERFACES MULTIPLES ? L'AJOUT DE MÉTHODES QUI NE SONT PAS DÉFINIES DANS L'INTERFACE ?**
:::

## ✅ Héritage vs Interface

### 🖼️ Tableau des différences

|Héritage|Interface|
|--------|---------|
|Réutilise du code|Définit un contrat|
|Relation “est-un”|Capacité / comportement|
Une seule classe parente|Plusieurs interfaces