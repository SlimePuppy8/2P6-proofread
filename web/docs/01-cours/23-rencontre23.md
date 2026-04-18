---
description: Polymorphisme - intro
---
# Polymorphisme - Introduction

## 🎯 Objectifs de la séance

À la fin de cette séance, vous serez capable de :

- maitriser le concept de polymorphisme en orienté objet
- mettre en pratique le concept en C# à l'aide des mots clés ``virtual`` et ``override``
- prédire le comportement d'une méthode virtuelle

---

:::info

Polymorphisme : Du grec ancien polús (plusieurs) et morphê (forme) ⇾ Plusieurs formes.

:::

## 🧠 Mise en situation
Débutons par une petite analogie.
Quel est l'objet suivant et à quoi il sert ?

![](@site/static/img/R23/bouton-lumiere.jpg)

Il s'agit d'un **intérrupteur** qui permet d'**allumer ou éteindre la lumière** lorsqu'on **appuie** sur le **bouton**.

Quel est l'objet suivant et à quoi il sert ?

![](@site/static/img/R23/bouton-pompiers.jpg)

Il s'agit d'une **alarme de feu** qui permet d'appeler les pompiers lorsqu'on **appuie** sur le **bouton**.

Finalement, quel est l'objet suivant et à quoi il sert ? 

![](@site/static/img/R23/bouton-mystere.jpg)

C'est un autre **bouton**. Mais que fait-il lorsqu'on **appuie** dessus? Pas facile de déterminer son usage...

Qu'est-ce que ces boutons ont en commun ? Est-ce que le diagramme suivant vous dit quelque chose du cours précédent ?

![](@site/static/img/R23/arbre.jpg)

Ces objets sont liés par l'héritage. De plus, ils offrent tous la même **méthode unique** d’activation. On peut **appuyer** sur le bouton. L'effet d'**appuyer** prend **plusieurs formes** selon le **type** de bouton.

## ✅ Contexte en orienté objet
<Row>
<Column>
**La classe de base offre une méthode commune.**

**``Bouton``** 
- Méthode d’activation: ``Appuyer``
</Column>
<Column>
**Les classes dérivées offrent leur propre implémentation.**

**``Intérupteur``** 
    
Action résultante d'``Appuyer`` -> Allumer/éteindre la lumière

**``Alarme``**
    
Action résultante d'``Appuyer`` -> Appeler les pompiers

</Column>
</Row>

<Row>
<Column>

La classe de **base** peut définir et implémenter des **méthodes virtuelles** à l'aide du mot clé ``virtual``.

</Column>

<Column>

Les classes **dérivées** peuvent substituer (ou surcharger) l'implémentation de base, en fournissant leur **propre implémentation** à l'aide du mot clé ``override``.

</Column>

</Row>

## Exemples
<Row>
<Column>

```csharp

public class Base {    
  // méthode virtuelle
    public virtual void Méthode() {
	// implémentation de base
    }
}

```

:::info

Notez la présence du mot clé ``virtual`` au niveau de la déclaration de ``Méthode`` afin d'informer que la méthode peut être surchargée par des classes enfants.

:::

</Column>
<Column>

```csharp

public class Dérivée : Base {
    // méthode substituée
  public override void Méthode() {
// implémentation dérivée
  }
}

```


:::info

Notez la présence du mot clé ``override`` au niveau de la déclaration de ``Méthode`` afin d'informer que la classe ``Dérivée`` surcharge la méthode avec sa propre implémentation.

:::

</Column>

</Row>

## Exemple pour les boutons de l'analogie
<Row>
<Column>

```csharp

public class Bouton {    
  // méthode virtuelle
    public virtual void Appuyer() {
	    Console.WriteLine("Bouton de base activé!");
    }
}

```

</Column>

<Column>

```csharp

public class Intérupteur : Bouton {
    // méthode substituée
  public override void Méthode() {
    Console.WriteLine("Et la lumière fût!");
  }
}

public class Alarme : Bouton {
    // méthode substituée
  public override void Méthode() {
    Console.WriteLine("Les pompiers sont en route!");
  }
}

```

</Column>

</Row>

## Exemple d'utilisation

<Row>
<Column>

```csharp

List<Bouton> listeBoutons = new List<Bouton>();

listeBoutons.Add( new Bouton() );
listeBoutons.Add( new Intérupteur() );
listeBoutons.Add( new Alarme() );

foreach( Bouton bouton in listeBoutons )
{
    bouton.Appuyer(); // le résultat sera différent pour chacun des boutons!
}

```

</Column>

</Row>
