---
title: Documenter son code
---

# Bien documenter son code

## 🎯 Objectif
1. Améliorer la lisibilité et la compréhension du code
2. Faciliter la maintenance
3. Faciliter la collaboration
4. Réeduire les erreurs


## Ajouter des commentaires
Documenter son code est un processus simple mais essentiel. Il facilite grande la compréhension et évite des erreurs d'ambiguïtées.

Considérons le constructeur suivant, il est facile de deviner l'intentino des paramètres. Parcontre, si l'on regarde la classe, qu'est ce quelle devrait contenir?
```csharp
public Personnage(string nom, int age, char classe)
{
    //...
}
```

Comparons maintenant avec l'ajout des commentaires. Nous comprenons maintenant un peu plus ce que nous devons ajouter dans le paramètre classe.

```csharp
/// <summary>
/// Constructeur nous permettant de créer un personnage.
/// </summary>
/// <param name="nom">Le nom du personnage</param>
/// <param name="age">L'âge du personnage</param>
/// <param name="classe">La classe du personnage qui doit être soit: "G" pour un guerrier, "M" pour un mage ou 
/// "V" pour un voleur.</param>
public Personnage(string nom, int age, char classe)
{
    // ...
}
```

## Où commenter?
- Les constantes
- Les champs
- Les propriétés
- Les constructeurs
- Les méthodes
- Vos classes

## Comment commenter?
Lorsque votre méthode est bien écrite et que vous êtes certain de sa structure, il est temps de commenter.

Très simplement, placer vous sur la ligne juste au dessus de votre méthode et tappée trois barre oblique `///`. Visual Studio va reconnaître votre code et proposer un bloque de commentaire à compléter.

![](@site/static/img/extra/commentaire.gif)