---
description: Héritage et interfaces
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Héritage et interfaces

## 🎯 Objectifs
1. Définir une classes dérivée

## ✅ Héritage



### 📜 Définition
L’héritage est un mécanisme qui permet à une nouvelle classe (appelée classe dérivéee ou enfant) d'acquérir automatiquement les caractéristiques (attributs et méthodes) d'une classe existante (appelée classe de base ou parente). 

L’héritage est un mécanisme fondamental de la programmation orientée objet qui permet de créer une nouvelle classe (classe dérivée ou sous-classe) à partir d’une classe existante (classe de base ou parente).

La classe dérivée hérite :
- des attributs (variables),
- des méthodes (fonctions),

Définis dans la classe de base, et peut :
- en ajouter de nouveaux,
- en modifier certains (redéfinition),
- ou en spécialiser le comportement.

<Tabs>
    <TabItem value="parent" label="Parent" default>
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
    <TabItem value="enfant" label="Enfant" default>
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
</Tabs>

### ⚠️ Limites et dangers

### 👩‍👧‍👦 Classes parent et enfant 

### ☎️ Base

### 🔐 Public, private et protected✨!

### 💥 Override

### 📖 Exemples

## ✅ Interface
### 📜 Définition
