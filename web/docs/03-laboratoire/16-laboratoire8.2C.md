---
title: 🟡 Montre
---
# 🧪 Labo 8.2C – 🟡 Montre

### 🎯 Objectifs 
* Création d'une classe
* Se familiariser avec la structure **`DateTime`** 
* Formater une date

### 🛠️ Instructions
Vous aurez à compléter le projet en créant la classe **`Montre`**. 
:::tip
Vous **n'avez pas** à créer une bibliothèque de classe pour cet exercice.
:::
![Fenêtre de l'application Montre](@site/static/img/R16/montre.png)

### 📊 Diagramme de classes

![diagramme de la classe montre](@site/static/img/R16/classeMontre.png)

---

### 📝 Description de la classe

#### Champs

* **m_heuresActuelle: DateTime**
  Stocke la date et l’heure courante de la montre.

---

#### Propriétés


* **HeuresActuelle : DateTime**
  Permet d’obtenir la date et l'heure de la montre. Cette propriété est en lecture seule à l’extérieur de la classe.

---

#### Constructeurs

* **Constructeur sans paramètres**
  Initialise une nouvelle montre à zéro. Le temps au départ est 00:00:00 à la date d'aujourd'hui.
* **Constructeur avec paramètres**
  Initialise une nouvelle montre avec une heure, des minutes et des secondes passées en paramètres. La date au départ est celle d'aujourd'hui.

---

#### Méthodes

* **AfficherHeure(): string**
    Retourne l’heure actuelle de la montre sous forme de texte formaté heures, minutes et secondes. (HH:MM:SS)
* **AvancerUneSeconde(): void**
    Avance d'une seconde exactement l'heure actuelle.
* **Initialiser(int pHeures, int pMinutes, int pSecondes): void**
    Initialise une nouvelle montre avec une heure, des minutes et des secondes passées en paramètres. La date au départ est celle d'aujourd'hui.

