---
title: Gestion de personnes
---

# 🧪 Labo 5.1A – Formatif

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R09-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::
---
### Télécharger la solution contenant les différents exercices de ce laboratoire.

Disponible ici 👉 [Laboratoire5_1](../../static/files/laboratoires/Laboratoire5_1.zip)

---

# 📊 Critères d’évaluation

* Exactitude du fonctionnement
* Respect des validations
* Respect des standards
* Qualité du code : Lisibilité et organisation

---
    
## 🟡 Exercice A – Gestion de personnes
### 🎯 Objectifs 
* Instanciation et utilisation d'un objet
* Manipulation des listes d'objets
* Lecture / écriture de fichiers csv
* Utilisation des énumérations
* Parcours avec `foreach`
* Définition de méthodes

### 🛠️ Instructions

Vous devez développer un ensemble de méthodes permettant de gérer une collection d’objets `Personne`: charger, filtrer, ajouter, supprimer et sauvegarder des données.

La classe `Personne` et le type par énumération `TypeRecherche` sont fournies. Il ne faut pas les modifier. 

:::success

* Il existe des tests de validation dans le projet que vous pouvez décommenter pour vérifier vos méthodes.

* Ces tests ne sont pas exhaustifs et ne couvrent pas tous les cas possibles.

* Vous devez donc penser à tester vos méthodes vous-mêmes avec différents scénarios pour vous assurer qu’elles fonctionnent correctement.

* Les tests fournis sont un point de départ pour vous aider à détecter certaines erreurs, mais la responsabilité de la robustesse du code vous incombe.
:::danger
⚠ Les tests de validation fournis **ne fonctionneront pas** si vous ne respectez pas les signatures des méthodes (types de paramètres, ordre, type de retour, static/non-static).  
Assurez-vous donc de concevoir vos méthodes conformément aux indications générales de l’énoncé.
:::
:::

### 📊 Diagramme de classes

La classe `Personne` et le type par énumération `TypeRecherche` sont fournies. Il ne faut pas les modifier. 

La classe est déjà documentée dans le code. Vous devez l'observer et la comprendre. Cette étape vous permet de savoir quelles propriétés et méthodes sont disponibles pour l’utiliser correctement dans le reste du programme.

![](@site/static/img/R09/personne.png)

---
### 🧩 Méthodes à implémenter

#### 1️⃣ `EstDansLaListe`

On veut savoir si une personne existe déjà dans la liste à partir de son NAS.

##### 📥 Paramètres nécessaires

* Un NAS à rechercher
* Une liste de personnes

##### 📤 Retour attendu

* Un booléen indiquant si la personne est présente ou non

##### ✅ Contraintes

* La comparaison doit être insensible à la casse
* Si la liste est null → retourner false
* Si le NAS est vide ou null → retourner false

---
#### 2️⃣ `AjouterPersonne`
On veut ajouter une nouvelle personne dans la liste.

##### 📥 Paramètres nécessaires

* NAS
* Prénom
* Nom
* Âge
* Liste de personnes

##### 📤 Retour attendu

* Un booléen indiquant si l’ajout a réussi

##### ✅ Constraintes et validations obligatoires

* NAS : minimum 9 caractères
* Nom : minimum 3 caractères
* Âge : supérieur à 0
* Le NAS ne doit pas déjà exister
* La liste ne doit pas être null
* Si l’une des validations échoue, la personne ne doit pas être ajoutée et la méthode doit retourner false
* Le nom doit être enregistré en MAJUSCULES

---

#### 3️⃣ `SupprimerPersonne`

On veut supprimer une personne selon sa position dans la liste.

##### 📥 Paramètres nécessaires

* Position (index)
* Liste de personnes

##### 📤 Retour attendu

* Booléen indiquant si la suppression a réussi

##### ✅ Validations

* L’index doit être valide
* La liste ne doit pas être null

---

#### 4️⃣ `FiltrerSelonTrancheAge`
Obtenir une nouvelle liste contenant uniquement les personnes dont l’âge est compris entre deux valeurs.

##### 📥 Paramètres nécessaires

* Âge minimum
* Âge maximum
* Liste de personnes

##### 📤 Retour attendu

* Une nouvelle liste de personnes

##### ✅ Validations

* Si la liste est null → retourner une liste vide
* La liste originale ne doit pas être modifiée

---

#### 5️⃣ `MoyenneAge`

Calculer la moyenne d’âge des personnes dans la liste.

##### 📥 Paramètres nécessaires

* Liste de personnes

##### 📤 Retour attendu

* Un nombre réel (double) représentant la moyenne

##### ✅ Validations

* Si la liste est null → retourner 0
* Si la liste est vide → retourner 0

---

#### 8️⃣ `Recherche` 
Trouver une personne dans une liste selon un critère de recherche (Nom, Prénom ou NAS).

##### 📥 Paramètres nécessaires

* Une liste de personnes
* Le type de recherche à effectuer (Nom, Prénom ou NAS)
* La valeur à rechercher

##### 📤 Retour attendu

* L’objet `Personne` correspondant à la première occurrence trouvée
* `null` si aucune correspondance n’est trouvée

##### ✅ Validations

* Comparaison insensible à la casse
* Si la liste est null → retourner null
* Si la valeur recherchée est vide ou null → retourner null
---

#### 6️⃣ `SauvegarderListe`

Enregistrer les personnes dans un fichier texte.

##### 📥 Paramètres nécessaires

* Nom du fichier
* Liste de personnes

##### 📤 Retour attendu

* Aucun
##### 📌 Format obligatoire du fichier

Chaque ligne doit respecter :

```
NAS,Prénom,Nom,Age
```

Exemple :

```
100000001,Jean,DUPONT,30
```
---
#### 7️⃣ `ChargerPersonnes`

Lire un fichier texte et remplir une liste de personnes.

##### 📥 Paramètres nécessaires

* Nom du fichier
* Liste à remplir

##### 📤 Retour attendu

* Aucun (modifie la liste reçue en paramètre)

##### ✅ Validations

* Vérifier que le fichier existe

---


