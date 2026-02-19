---
title: Gestion de personnes
---

# 🧪 Labo 5.1B – Formatif

---
    
## 🟡 Exercice B – Gestiomn de personnes
### 🎯 Objectifs 
* Instanciation et utilisation d'un objet
* Manipulation des listes d'objets
* Lecture / écriture de fichiers csv
* Utilisation des énumérations
* Parcours avec `foreach`
* Définition de méthodes

### 🛠️ Instructions

Vous devez développer un ensemble de méthodes permettant de gérer une collection d’objets `Personne`, charger, filtrer, ajouter, supprimer et sauvegarder des données.

La classe `Personne` et le type par énumération `TypeRecherche` sont fournies. Il ne faut pas les modifier. 

### 📊 Diagramme de classes

La classe `Personne` et le type par énumération `TypeRecherche` sont fournies. Il ne faut pas les modifier. 

La classe est déjà documentée dans le code. Vous devez l'observer et la comprendre. Cette étape vous permet de savoir quelles propriétés et méthodes sont disponibles pour l’utiliser correctement dans le reste du programme.

![](@site/static/img/R09/personne.png)

---
### 🧩 Méthodes à implémenter


## 1️⃣ Vérifier la présence d’un NAS

### 🎯 Besoin

On veut savoir si une personne existe déjà dans la liste à partir de son NAS.

### 📥 Paramètres nécessaires

* Un NAS à rechercher
* Une liste de personnes

### 📤 Retour attendu

* Un booléen indiquant si la personne est présente ou non

### ✅ Contraintes

* La comparaison doit être insensible à la casse
* Si la liste est null → retourner false
* Si le NAS est vide ou null → retourner false

---

## 2️⃣ Ajouter une personne

### 🎯 Besoin

On veut ajouter une nouvelle personne dans la liste.

### 📥 Paramètres nécessaires

* NAS
* Prénom
* Nom
* Âge
* Liste de personnes

### 📤 Retour attendu

* Un booléen indiquant si l’ajout a réussi

### ✅ Validations obligatoires

* NAS : minimum 9 caractères
* Nom : minimum 3 caractères
* Âge : supérieur à 0
* Le NAS ne doit pas déjà exister
* La liste ne doit pas être null

### 📌 Contraintes supplémentaires

* Le nom doit être enregistré en MAJUSCULES

---

## 3️⃣ Supprimer une personne

### 🎯 Besoin

On veut supprimer une personne selon sa position dans la liste.

### 📥 Paramètres nécessaires

* Position (index)
* Liste de personnes

### 📤 Retour attendu

* Booléen indiquant si la suppression a réussi

### ✅ Validations

* L’index doit être valide
* La liste ne doit pas être null

---

## 4️⃣ Filtrer selon une tranche d’âge

### 🎯 Besoin

Obtenir une nouvelle liste contenant uniquement les personnes dont l’âge est compris entre deux valeurs.

### 📥 Paramètres nécessaires

* Âge minimum
* Âge maximum
* Liste de personnes

### 📤 Retour attendu

* Une nouvelle liste de personnes

### ✅ Validations

* Si la liste est null → retourner une liste vide
* Si âge minimum > âge maximum → retourner une liste vide
* La liste originale ne doit pas être modifiée

---

## 5️⃣ Calculer la moyenne d’âge

### 🎯 Besoin

Calculer la moyenne d’âge des personnes dans la liste.

### 📥 Paramètres nécessaires

* Liste de personnes

### 📤 Retour attendu

* Un nombre réel (double) représentant la moyenne

### ✅ Validations

* Si la liste est null → retourner 0
* Si la liste est vide → retourner 0

---

## 6️⃣ Sauvegarder la liste dans un fichier

### 🎯 Besoin

Enregistrer les personnes dans un fichier texte.

### 📥 Paramètres nécessaires

* Nom du fichier
* Liste de personnes

### 📤 Retour attendu

* Aucun (méthode procédurale)

### 📌 Format obligatoire du fichier

Chaque ligne doit respecter :

```
NAS,Prénom,Nom,Age
```

Exemple :

```
100000001,Jean,DUPONT,30
```

### ✅ Contraintes

* Le fichier doit être écrasé s’il existe
* Le nom doit être sauvegardé en MAJUSCULES
* La liste ne doit pas être null

---

## 7️⃣ Charger les personnes depuis un fichier

### 🎯 Besoin

Lire un fichier texte et remplir une liste de personnes.

### 📥 Paramètres nécessaires

* Nom du fichier
* Liste à remplir

### 📤 Retour attendu

* Aucun (modifie la liste reçue en paramètre)

### ✅ Validations

* Vérifier que le fichier existe
* Vider la liste avant le chargement
* Ignorer les lignes mal formées
* Gérer les erreurs de conversion d’âge

---

# 📊 Critères d’évaluation

* Exactitude du fonctionnement
* Respect des validations
* Robustesse du code
* Respect du format demandé
* Qualité de la conception des signatures
* Lisibilité et organisation

---

# 🚫 Interdictions (si niveau débutant)

* Ne pas utiliser LINQ
* Ne pas modifier la classe `Personne`
* Ne pas utiliser de variables globales

---

# 🎓 Ce que vous devez démontrer

* Maîtrise des listes
* Boucles et conditions
* Validation de données
* Manipulation de fichiers
* Conception de méthodes

---

Si tu veux, je peux maintenant te faire :

* 🔥 Version examen officiel prête à imprimer
* 🔥 Version avec section “bonus”
* 🔥 Version avancée (avec exceptions obligatoires)
* 🔥 Version simplifiée pour niveau débutant
* 🔥 Grille de correction détaillée pour le prof

Tu donnes ça en labo ou en évaluation sommative ?

