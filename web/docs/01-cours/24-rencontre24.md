---
description: Polymorphisme (suite)
---
# Polymorphisme (suite)

## 🎯 Objectifs de la séance

À la fin de cette séance, vous serez capable de :

- maitriser les concepts de classe abstraite et d'interface
- mettre en pratique ces concepts en C# à l'aide des mots clés ``abstract`` et ``interface``

---


## 🧠 Mise en situation
Dans le cours précédant nous avons vu comme exemple l'utilisation d'un bouton pour introduire le concept de polymorphisme. On a créé un ``Bouton`` de base et dérivé deux boutons ``Intérupteur`` et ``Alarme``. Puisque l'action du bouton de base n'est pas concrète et utile, il est possible qu'un bouton dérivé de cette classe décide de ne pas **surcharger** la méthode ``Appuyer``. 

Considérez ce nouvel exemple :

<Row>
<Column>

```csharp

public class Forme
{
    public Forme() {}

    public virtual double Aire
    {
        get { return 0.0; }
    }
}

```

</Column>

<Column>

```csharp

public class Rectangle : Forme
{
    private double Hauteur { get; set; }
    private double Largeur  { get; set; }
    
    public Rectangle( double pHauteur, double pLargeur )
    {
        Hauteur = pHauteur;
        Largeur = pLargeur;
    }

    public override double Aire
    {
        get { return Hauteur * Largeur; }
    }
}

```

</Column>

</Row>

:::tip

Tout comme les méthodes d'une classe, les propriétés de celle-ci peuvent être aussi polymorphiques. Il ne suffit que d'utiliser les mots clés ``virtual`` et ``override`` tel que vu dans le dernier cours.

:::


Est-ce possible d'empêcher un utilisateur de notre librairie de classes de créer des ``Forme`` vides ? Ou encore, est-ce possible de forcer l'implémentation spécifique à toutes les classes qui dériveront de ``Forme`` ? **Oui !** 

Pour faire cela, il faut utiliser le concept de **classe abstraite**.

## Classe abstraite
Une classe abstraite est une classe dont l’implémentation est incomplète du fait qu’une partie ou l’ensemble de ses méthodes sont déclarées, mais ne sont pas définies. Les méthodes qui ne sont pas définies sont uniquement identifiées par leur signature. 

Ces méthodes incomplètes sont appelées des méthodes abstraites. 

**Éléments importants**
- Si une classe contient au moins une méthode ou propriété abstraite, la classe devra être définie avec le mot-clé abstract.
- Une classe abstraite ne peut pas être instanciée. (``new``…)
- Une propriété ou méthode abstraite n’a pas de code associé.  Il n’y a que la signature.
- La classe dérivée devra surcharger (``override``) **obligatoirement** la méthode ou la propriété.  **Si elle ne le fait pas**, la classe dérivée devra devenir **abstraite également**.
- Il n’y a pas de problème à ce qu’une classe abstraite contienne plusieurs méthodes ou propriétés qui ne sont pas abstraites. 

## Dans quel cas une méthode ou une propriété devrait être abstraite ?

Des méthodes ou propriétés pour lesquelles il nous est impossible de définir le comportement exacte seront alors définies comme abstraite avec le mot-clé ``abstract``.  Il reviendra donc aux classes dérivées de définir le comportement qui est plus spécialisé.

## Retour sur l'exemple de ``Forme`` et ``Rectangle``
Voici une implémentation des classes plus adéquate.

<Row>
<Column>

```csharp

public abstract class Forme
{
    public Forme() {}

    public abstract double Aire { get; } // aucune implémentation pour le get
}

```
:::info

Notez les présences du mot clé ``abstract`` au niveau de la déclaration de la classe et de la déclaration de la propriété ``Aire``.

:::

</Column>

<Column>

```csharp

public class Rectangle : Forme
{
    private double Hauteur { get; set; }
    private double Largeur  { get; set; }
    
    public Rectangle( double pHauteur, double pLargeur )
    {
        Hauteur = pHauteur;
        Largeur = pLargeur;
    }

    public override double Aire
    {
        get { return Hauteur * Largeur; }
    }
}

```

</Column>

</Row>

### Exemples d'utilisation

```csharp

Forme formeVide = new Forme();      // ERREUR: Impossible de créer une classe abstraite

Forme rectangle = new Rectangle(5,10);  // OK: Le rectangle implémente bien la propriété abstraite

Console.WriteLine($"L'aire d'un rectangle de {rectangle.Largeur} x {rectangle.Hauteur} est {rectangle.Aire}");

```
