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
### 📜 Définition

## ✅ Héritage vs Interface

### 🖼️ Tableau des différences

|Héritage|Interface|
|--------|---------|
|Réutilise du code|Définit un contrat|
|Relation “est-un”|Capacité / comportement|
Une seule classe parente|Plusieurs interfaces