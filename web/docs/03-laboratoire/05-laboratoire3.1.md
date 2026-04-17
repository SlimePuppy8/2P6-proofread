---
title: Type par énumération
---

# 🧪 Labo 3.1 – Type par énumération

---
:::danger
Ce laboratoire doit être développé à l'aide du logiciel **Git**. Vous devrez **créer un nouveau dépôt dans GitHub** 
et **inviter votre professeur** en tant que collaborateur.

Voici le format du dépôt exigé: **H26-2P6-R05-MATRICULE**

Il devrait y avoir **un commit** pour **chaque** exercice.

:::

---
### Télécharger la solution contenant les différents exercices de ce laboratoire.

Disponible ici 👉 [Laboratoire3_1](../../static/files/laboratoires/Laboratoire3_1.zip)

---

:::warning
Prenez la peine de vous assurer que personne ne peut briser vos classes. **Valider vos paramètres**, ne faites confiance en personne. Lors des TP et des examens, nous nous ferons un malin plaisir à briser vos classes. 🦹 Testez, testez, testez...
:::
---
## 🟢 Exercice 1 - ÉcriveurFichierCSV
### 🎯 Objectifs 
* Écrire une classe
* Utiliser l'énumération
* Utiliser la condition `switch-case`
* Reconnaître l'initialiseur d'objet 

### 🛠️ Instructions
Écrire une classe qui permet de sauvegarder ligne par ligne un fichier csv en spécifiant le chemin d'accès, le nom du fichier et le type de délimiteur. Votre programme devra écrire **trois
fichiers csv** ayant un délimiteur différent pour chacun. 

Voici les trois **délimiteurs** qui devront être supportés: `|`, `;` et `,`.

Utilisez la liste de colonnes déjà fournie pour écrire vos fichiers:
```csharp
Console.WriteLine("Écriture des trois fichiers csv...");
List<string[]> texteDepart = new List<string[]>()
{
    new string[3] {"Prénom", "Nom", "Note" },
    new string[3] {"Jamil", "Gammoudi", "95" },
    new string[3] {"David", "Gagné-Leroux", "90" },
    new string[3] {"Jimmy", "Beaubien", "88" },
    new string[3] {"Philippe", "Martel", "32" },
};
```
Vous n'êtes pas obligé de fournir un menu pour cet exercice.

### 📊 Diagramme de classes

![](@site/static/img/R05/ecrivainFichierCSV.png)

### 📋 Énumérations
* **`TypeDelimiteur`** Un `enum` ayant pour option `Virgule`, `PointVirgule` et `LigneVerticale`.
---

### 📋 Structure de la classe **`EcriveurFichierCSV`**

#### Constantes
* **Chemin par défaut (`CHEMIN_PAR_DEFAUT`)** Valeur string qui vaut `c:/EspaceLabo`.
* **Nom du fichier par défaut (`NOM_FICHIER_DEFAUT`)** Valeur string qui vaut `monFichier.csv`.
---

#### Champs
* **m_type** Le type de délimiteur choisi `TypeDelimiteur`.
---
#### Propriétés
* **`CheminAccess`** Garde en mémoire le répertoire où sera enregistré le fichier. (C:/EspaceLabo). Cette propriété est en lecture seule à l’extérieur de la classe. Si le chemin n'existe pas, la propriété devrait retourner le `CHEMIN_PAR_DEFAUT`.
* **`NomFichier`** Garde en mémoire le nom du fichier qui sera enregistré. (fichierVirgule.csv). Cette propriété est en lecture seule à l’extérieur de la classe. Si le fichier n'est pas valide (longueur plus petite que zéro?), la propriété devrait retourner le `NOM_FICHIER_DEFAUT`.
* **`Delimiteur`** Une propriété calculée qui retourne la valeur string en fonction du délimiteur contenu dans `m_type`.

#### Constructeur
* Un seul constructeur où l'on spécifie le chemin d'accès, le nom du fichier et l'enum `TypeDelimiteur`.

#### Méthodes
* **`EcrireLigne`** méthode sans retourn qui permet d'écrire une ligne. Elle prend en paramètre un tableau de colonnes de type `string[]`.


### 🏁 Résultat attendu
Trois fichiers CSV dans `C:/EspaceLabo`:
* `fichierLigneVerticale.csv`  séparé par des lignes verticales `|`.
* `fichierPointVirgule.csv`  séparé par des points-virgules `;`.
* `fichierVirgule.csv` séparé par des virgules `,`.


---
## 🟡 Exercice 2 - Animal
### 🎯 Objectifs 
* Écrire une classe
* Utiliser l'énumération
* Utiliser la condition `switch-case`

### 🛠️ Instructions
Écrire une classe qui permet de déterminer le son des quatre animaux suivant: le chat 🐈 (*Miaou*), le chien 🐕 (*Wouf*), le lion 🦁 (*Roar*) et le serpent 🐍(*Ssss*). De plus, la classe doit supporter les animaux inconnus 👻(*????).*

:::note
Pensez à utiliser une énumération pour les cinq types supportés.
:::

Dans votre main, vous pouvez instancier vos animaux de cette façon:
```csharp
Animal[] animaux =
{
    new Animal("Ghost", (Animal.TypeAnimal)99),
    new Animal("Mia", Animal.TypeAnimal.Chat),
    new Animal("Snoopy", Animal.TypeAnimal.Chien),
    new Animal("Simba", Animal.TypeAnimal.Lion),
    new Animal("Gary", Animal.TypeAnimal.Serpent)
};
```
### 📊 Diagramme de classes

![](@site/static/img/R05/animal.png)

### 📋 Énumérations
* **`TypeAnimal`** Un `enum` ayant les cinq types possibles.
---
### 📋 Structure de la classe **`Animal`**

#### Champs (privés)
* **`m_nom`** Le nom de l'animal.
* **`m_type`** Le type de l'animal de l'énumération. (ex.: `TypeAnimal.Chat`)
---
#### Propriétés
* **`Type`** Le type de l'animal de l'énumération en lecture seul. (ex.: `TypeAnimal.Chat`) Vérifiez que l'`enum` ne sort pas des options possible. Affectez le type `TypeAnimal.Inconnu` si la valeur n'est pas valide.
* **`Nom`** Le nom de l'animal en lecture seul.
* **`Son`** Une propriété calculée qui retourne le son d'un animal en fonction de son type. ("Miaou", "Wouf", "Roar", "Ssss", "????")
* **`Espece`** Une propriété calculée qui retourne le nom de l'espèce de l'animal en chaîne de caractère en fonction de son type.

#### Constructeur
* Un seul constructeur où l'on spécifie le nom et le type de l'animal.

#### Méthodes
* **`Parler`** Une méthode sans paramètre qui retourne une chaîne de caractère construite en fonction du nom et de l'espèce de l'animal (Ex.: Le chat Mia parle tout doucement: "Miaou!").
* **`Crier`** Une méthode sans paramètre qui retourne une chaîne de caractère construite en fonction du nom et de l'espèce de l'animal (Ex.: Le chat Mia CRIE de toutes ses forces: "MIAOU!!!").


### 🏁 Résultat attendu
```
Voici les animaux qui PARLENT:
Le ???? Ghost parle tout doucement: "????!"
Le chat Mia parle tout doucement: "Miaou!"
Le chien Snoopy parle tout doucement: "Wouf!"
Le lion Simba parle tout doucement: "Roar!"
Le serpent Gary parle tout doucement: "Ssss!"


Voici les animaux qui CRIENT:
Le ???? Ghost CRIE de toutes ses forces: "????!!!"
Le chat Mia CRIE de toutes ses forces: "MIAOU!!!"
Le chien Snoopy CRIE de toutes ses forces: "WOUF!!!"
Le lion Simba CRIE de toutes ses forces: "ROAR!!!"
Le serpent Gary CRIE de toutes ses forces: "SSSS!!!"
```

---
## 🔴 Exercice 3 - Distributrice
### 🎯 Objectifs 
* Écrire une classe
* Utiliser l'énumération
* Utiliser la condition `switch-case`
* Programmer par soi-même! 🏋️

### 🛠️ Instructions
Écrire un programme qui simule une distributrice de breuvage. La distributrice offre du jus d'orange, du jus de raisin, du jus de pomme et du thé glacé. Pour chaque sorte, la distributrice peut contenir une quantité maximale de cinq (5) unités.

Votre distributrice devra:
* Avoir ses cinq breuvages initialisés à une quantité de zéro unité.
* Permettre d'indiquer si la distributrice est vide, qu'elle n'a plus aucun breuvage. 
* Indiquer la quantité d'unité restante pour un breuvage spécifié.
* Éjecter/consommer un breuvage spécifié.
* Vérifier la disponibilité d'un breuvage spécifié.
* Permettre de recharger tous ses breuvages à la quantité maximale.

Vous aurez besoin d'implémenter un menu. Pour votre menu, ne vous cassez pas la tête à convertir les choix en chiffre entier. Vous pouvez comparer directement vos choix avec une chaîne de caractère:
```csharp
switch (choix)
{
    case "1":
        Consommer(distributrice, SorteBreuvage.JusOrange);
        break;
    // ...
    case "q":
    case "Q":
        quitter = true;
        break;
}
```
### 📊 Diagramme de classes

![](@site/static/img/R05/distributrice.png)

### 📋 Structure de la classe **`Distributrice`**
C'est à vous de déterminer la structure de votre classe.

L'exercice se prête facilement à l'utilisation des énumérations et des `switch-case`.

Vous aurez à implémenter:
* Une énumération des breuvages.
* Une constante maximale.
* Garder un champ privé de la quantité de chaque breuvage offert.
* Une propriété booléenne calculée `EstVide`.
* Un constructeur.
* Une méthode pour :
    * Recharger tous les breuvages à une quantité de cinq.
    * Obtenir la quantité d'un breuvage.
    * Éjecter/consommer un breuvage.
    * Vérifier si le breuvage est disponible.

### 🏁 Résultat attendu
Distributrice vide
```
==============================
La distributrice est vide.

Jus d'orange:   0
Jus de raisin:  0
Jus de pomme:   0
Thé glacé:      0
==============================


--- Menu ---
1 - Consommer un jus d'orange
2 - Consommer un jus de raisin
3 - Consommer un jus de pomme
4 - Consommer un thé glacé
5 - Recharger la distributrice
Q - Quitter

Veuillez faire un choix: 1

Opération impossible, il ne reste plus assez de quantité pour cette sorte.
Veuillez appuyer sur entrée pour continuer...

```
Distributrice remplie:
```
==============================
La distributrice

Jus d'orange:   5
Jus de raisin:  5
Jus de pomme:   5
Thé glacé:      5
==============================


--- Menu ---
1 - Consommer un jus d'orange
2 - Consommer un jus de raisin
3 - Consommer un jus de pomme
4 - Consommer un thé glacé
5 - Recharger la distributrice
Q - Quitter

Veuillez faire un choix:
```


