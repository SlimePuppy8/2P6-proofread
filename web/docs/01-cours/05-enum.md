---
description: Type par énumération
---

# Type par énumération

## 🎯 Objectifs
1. Définir une classes
<!-- 
Comprendre le principe d'encapsulation
Comprendre l’importance de préserver l’intégrité d’un objet.
Utiliser les accesseurs get et set
Ajouter des règles de validation dans l’accesseur set.
Définir des propriétés automatiques.
Définir des propriétés calculées. -->

## enum

## switch

## IntelliSense et les énumérations

### exposer différents paramètres de configuration par des enums
Cas : format de sortie, stratégie, mode de fonctionnement
```csharp

public enum FormatRapport { Pdf, Html, Markdown }

public string GenererRapport(FormatRapport format)
{
    return format switch
    {
        FormatRapport.Pdf => "… génération PDF …",
        FormatRapport.Html => "<html>…</html>",
        FormatRapport.Markdown => "# …",
        _ => throw new ArgumentOutOfRangeException(nameof(format))
    };
}
```

### permissions, filtres, comportements
Cas : plusieurs options activables en même temps
```csharp
[Flags]
public enum OptionsRecherche
{
    Aucune = 0,
    IgnorerCasse = 1,
    IgnorerAccents = 2,
    MotEntier = 4
}

public void Rechercher(string texte, OptionsRecherche options)
{
    bool ignorerCasse = options.HasFlag(OptionsRecherche.IgnorerCasse);
    // …
}

```

usage côté appel

```csharp
Rechercher("csharp", OptionsRecherche.IgnorerCasse | OptionsRecherche.MotEntier);
```

Si c’est un Flags, utiliser des puissances de 2
1,2,4,8,16… sinon les combinaisons deviennent incohérentes.

### éviter les chiffres magiques dans les APIs (priorité, niveau, catégorie)

Cas : niveau de log, priorité de tâche, gravité d’erreur
```csharp
public enum NiveauLog { Trace, Debug, Info, Warning, Error, Critical }

public void Log(NiveauLog niveau, string message) { /* … */ }
```
Pourquoi

- Remplace des chiffres arbitraires (1,2,3…) ou strings.
- L’intention est explicite et robuste.

### modéliser un état fini
Cas : cycle de vie d’une entité
```csharp
public enum EtatInscription { Nouvelle, Validee, Refusee, EnAttentePaiement }

public void Traiter(EtatInscription etat)
{
    switch (etat)
    {
        case EtatInscription.Nouvelle: /* … */ break;
        case EtatInscription.Validee: /* … */ break;
        case EtatInscription.Refusee: /* … */ break;
        case EtatInscription.EnAttentePaiement: /* … */ break;
        default: throw new ArgumentOutOfRangeException(nameof(etat));
    }
}
```
Pourquoi

- Tu forces les transitions “autorisées” et tu évites des états “impossibles” encodés en texte.
- Super pertinent en contexte “gestion de processus”.

### représenter des codes d'un domaine (mais de manière sécuriséee)
Cas: type d'événements, catégories, rôles

```csharp
public enum RoleUtilisateur { Etudiant. Enseignant, Admin }
```
**BONNE PRATIQUE** : si les codes viennent d’une BD / d’un service externe et changent souvent, l’enum peut devenir une contrainte. Mais si c’est stable et “contrôlé”, c’est excellent.


### toujours prévoir un cas par défaut défensif.
Même avec un enum, quelqu’un peut caster un int arbitraire :

```csharp
var etat = (EtatInscription)999;
```

## Initialiseur d'objet et de collection
