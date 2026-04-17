---
description: Type par énumération
---

# Type par énumération

## 🎯 Objectifs
1. Définir une énumération **`enum`**
2. Définir la condition **`switch`** / **`case`**
3. Définier l'initilisateur d'objet et collection


## ✅ L'énumération **`enum`**
### 📜 Définition
Une énumération est un **type de valeur** spécial que l'on appelle **`enum`**. Elle permet de définir une suite
de constantes d'**entier nommées**.

### 🔢Valeurs par défaut
Les noms définis sont liés à une valeur numérique entière et elle **commence à 0 par défaut**:
```csharp
public enum ChoixAlignement 
{
    Gauche, // commence à zéro
    Droit,  // 1
    Centre  // 2
}
```

### #️⃣ Valeur de départ spécifiée
Il est possible de spécifier la valeur de départ qui va augmenter de 1 par la suite:
```csharp
public enum ChoixAlignement 
{
    Gauche = -1,
    Droit,  // 0
    Centre  // 1
}
```

### *️⃣ Valeurs toutes spécifiées
Il est aussi possible de spécifier toutes les valeurs:
```csharp
public enum ChoixAlignement 
{
    Gauche = 2, 
    Droit = 4,
    Centre = 6
}
```

## ✅ La condition **`switch`**

### 📜 Définition
La structure de contrôle de sélection **`switch`** est une condition C# qui permet de facilement
illustré plusieurs conditions d'évaluation sur une valeur. Cette structure offre beaucoup de lisibilité
aux développeurs, contrairement une longue liste de conditions **`if-else`**.

```csharp
int choix = cboChoix.SelectedIndex;
 
switch (choix)
{
    case 0:
        txtVotreChoix.Text = "Alignement à gauche";
        break;
    case 1 :
        txtVotreChoix.Text = "Alignement à droite";
        break;
    case 2 :
        txtVotreChoix.Text = "Alignement au centre";
        break;
}
```

### 🛠️ Énumérations et la structure **`switch-case`**
Cette structure fait un excellent duo avec les énumérations:

```csharp
ChoixAlignement choix = (ChoixAlignement)cboChoix.SelectedIndex;
 
switch (choix)
{
    case ChoixAlignement.Gauche:
        txtVotreChoix.Text = "Alignement à gauche";
        break;
    case ChoixAlignement.Droit:
        txtVotreChoix.Text = "Alignement à droite";
        break;
    case ChoixAlignement.Centre:
        txtVotreChoix.Text = "Alignement au centre";
        break;
}
```


## ✅ Initialiseur d'objet et de collection

### 📜Définition
Pour économiser du temps, c# nous permet d'initialiser des objets directement lors de leurs créations. Il est donc possible
de garder ce qui est strictement nécessaire d'initialisation dans le constructeur et de quand même rapidement
créer un objet complet.

### 💡 Exemples
Voici un exemple d'initialisation d'un objet avec un constructeur vide":
```csharp
// Quelques fois, on ne dispose pas d'un constructeur avec plusieurs paramètres.
// Mais il est tout de même possible de fournir des valeurs aux propriétés
// au moment de l'instanciation, en utilisant un initialiseur d'objet comme suit :

m_objMontre = new Montre() { Heures = 12, Minutes = 20, Secondes = 55 }
```


Il est aussi possible d'effectuer cette initialisation avec des collections d'objets tels que la liste:
```csharp
m_colPersonnes = new List<Personne>() { 
    new Personne() { Nom = "Robert Lapointe", Nas = "276187261" },
    new Personne() { Nom = "Louise Tremblay", Nas = "527189354" },
    new Personne() { Nom = "Denis Verreau", Nas = "782356273"} 
};
```

## ✅ Exemples d'utilisation

Explorons quelques exemples d'utilisations de ce que nous avons appris aujourd'hui:
### 🎭 Exposer différents paramètres de configuration
Les énumérations et les ``switch-case`` sont très pratiques lorsqu'on veut exposer
des options. Avec IntelliSense, les ``enum`` peuvent exposer très clairement
des fonctionnalités sans pour autant s'enchaîner avec la gestion de ``string`` ou
de chiffres magiques. 

L'appel d'une méthode générant un fichier du format `pdf` pourrait se faire comme suit:
```csharp
string rapportHTML = GenererRapport(FormatRapport.Pdf);
```
...et voici comme l'on pourrait implémenter la fonction en considérant le choix du format passé en paramètre:
```csharp
public enum FormatRapport { Pdf, Html, Markdown }

public string GenererRapport(FormatRapport format)
{
    string rapport = "";

    switch(format)
    {
        case FormatRapport.Pdf:
            rapport = GenererPDF();
            break;
        case FormatRapport.Html:
            rapport = GenererHTML();
            break;
        case FormatRapport.Markdown:
            rapport = GenererMarkdown();
            break;
    }

    return rapport;
}
```

### 🧑‍⚖️ Permissions, filtres et comportements
Il est possible de combiner des valeurs d'une énumération pour spécifier des choix multiples. Il faut s'assurer de faire des bons
de deux après la première valeur.

Voici un exemple d'options que vous risquez de souvent rencontrer lorsque vous utilisez la bibliothèque de Microsoft. Notez
l'utilisation de l'opérateur logique **`|`** pour combiner les valeurs.
```csharp
Rechercher("csharp", OptionsRecherche.IgnorerCasse | OptionsRecherche.MotEntier);
```

...et voici comment on pourrait implémenter la vérification des options choisies avec l'opérateur logique **`&`**.
```csharp
public enum OptionsRecherche
{
    Aucune = 1,
    IgnorerCasse = 2,
    IgnorerAccents = 4,
    MotEntier = 8
}

public void Rechercher(string texte, OptionsRecherche options)
{
    bool ignorerCasse = (options & OptionsRecherche.IgnorerCasse) != 0;
    bool ignorerAccents = (options & OptionsRecherche.IgnorerAccents) != 0;
    bool MotEntier = (options & OptionsRecherche.MotEntier) != 0;
    // …
}

```

:::warning
Si c’est un Flags, utiliser des puissances de 2 tel que
1,2,4,8,16… sinon les combinaisons deviennent incohérentes.
:::
### 🪄 Éviter les chiffres magiques

Si vous remarquez que votre application contient beaucoup de chiffres magiques, tentez de les remplacer
par des constantes et/ou des énumérations. L'intention derrière vos chiffres magiques devient explicite et robuste.
```csharp
public enum NiveauLog { Trace, Debug, Info, Warning, Error, Critical }

public void Log(NiveauLog niveau, string message) { /* … */ }
```


### ⚠️ Toujours prévoir un cas par défaut défensif.
Notez ici l'implémentation de rôles d'utilisateur:
```csharp
public enum RoleUtilisateur { Etudiant, Enseignant, Admin }
```
Prenez garde de toujours prévoir un cas par défaut défensif. Bien qu'il n'y ait que trois rôles possibles dans l'énumération, rien n'empêche
un programmeur de transformer un `int` en votre `enum` et tout briser.

Le rôle `999` n'existe pas et peut venir briser votre code:
```csharp
RoleUtilisateur roleDouteux = (RoleUtilisateur)999;
```

### ❌ Les enums et les tableaux

Il serait tenant de combiner les tableaux et les énumérations pour nommer nos indices de tableaux, mais ceci est une mauvaise pratique! 
```csharp
public enum NomColonne { Nom, Prenom, Solde }

string ligne = "Martel;Philippe;-45$";
string[] colonnes = ligne.Split(";");

// ❌ Mauvaise pratique et très dangereux.
Console.WriteLine($"{colonnes[(int)NomColonne.Prenom]} possède {colonnes[(int)NomColonne.Solde]} dollars.")
```

#### ✅ Utilisez plutôt un dictionnaire
Un dictionnaire est une collection d'objets. Cette collection est similaire à une liste **`List<>`**, mais elle a la particularité de lier une donnée à un identifiant de façon très sécuritaire.

```csharp
public enum NomColonne { Nom, Prenom, Solde }

Dictionary<NomColonne, string> colonnes = new Dictionary<NomColonne, string>()
{
    { NomColonne.Nom, "Martel" },
    { NomColonne.Prenom, "Philippe" },
    { NomColonne.Sold, "-45$" }
};


// ✅ Bonne pratique !
Console.WriteLine($"{colonnes[NomColonne.Prenom]} possède {colonnes[NomColonne.Solde]} dollars.")
``` 



## 📚 Ressources supplémentaires

👉 Notions C# : [Instanciation objet](https://info.cegepmontpetit.ca/notions-csharp/documentation/instanciation-objet)


Vous devez réaliser le labo suivant :
 [🧪 Labo 3.1](/laboratoire/laboratoire3.1)

---