---
title: Type valeur vs Type référence
---

# 🧪 Labo 4.1 – Type valeur vs Type référence

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R07-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---

## 🟢 Exercice 1 – Type valeur

Complétez la trace du code suivant :

```csharp
static void Main(string[] args)
{
    int x = 10;
    int y = 20;

    x = y;
    x++;
}
```

| Ligne exécutée      | Effet | Valeur de x | Valeur de y |
| ---------- | ----- | ----------- | ----------- |
| int x = 10 |  Création de la variable *x* et assignation de la **valeur** 10.      |       10      |      ---       |
| int y = 20 |       |             |             |
| x = y      |       |             |             |
| x++        |       |             |             |


**Question :** La valeur de `y` change-t-elle lorsque la ligne `x++` est exécutée ? Pourquoi ?


---

## 🟢 Exercice 2 – Type référence

On considère la classe suivante :

```csharp
class Personne
{
    public string Nom { get; set; }
    public int Age { get; set; }

    public Personne(string nom, int age)
    {
        Nom = nom;
        Age = age;
    }
}
```

Complétez la trace du code ci-dessous :

```csharp
static void Main(string[] args)
{
    Personne p1 = new Personne("Michael", 21);
    Personne p2 = new Personne("Jason", 34);

    p1 = p2;
    p2.Nom = "Jonathan";
    p2.Age++;
}
```

| Ligne exécutée      | Effet | Champs de l'objet pointé par p1 | Champs de l'objet pointé par p2 |
| ---------- | ----- | ----------- | ----------- |
| Personne p1 = new Personne("Michael", 21); |  Création d'un objet de la classe Personne. La variable *p1* reçoit la **référence** vers cet objet.     |    Nom = "Michael" Age = 21      |      ---       |
| Personne p2 = new Personne("Jason", 34); |       |             |             |
| p1 = p2;      |       |             |             |
| p2.Nom = "Jonathan";        |       |             |             |
| p2.Age++;        |       |             |             |

**Question :** Combien d’objets sont accessibles après l'exécution de `p1 = p2` ?

---

## 🟢 Exercice 3 – Type référence

Considérez le code suivant :

```csharp
static void Main(string[] args)
{
    Personne p3 = new Personne("Nathan", 10);
    Personne p4 = new Personne("Nathan", 10);

    bool comparaison1 = (p3.Age == p4.Age);

    bool comparaison2 = (p3 == p4);

    p3 = p4;

    bool comparaison3 = (p3 == p4);
}
```
**Questions :**
1. Quelle valeur prendra *comparaison1* ? Pourquoi ?
2. Quelle valeur prendra *comparaison2* ? Pourquoi ?
3. Lorsque `==` est utilisé entre *p3* et *p4*, que sommes-nous en train de comparer  ?
4. Quelle valeur prendra *comparaison3* ? Pourquoi ?