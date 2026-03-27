---
description: DateTime, Timespan et ListViews
---

# DateTime, Timespan et Listviews

## ✅ DateTime

Le **`DateTime`** est une **structure** de l'espace de nom `System` qui permet de représenter **un moment précis** dans un **calendrier** grégorien.
C'est un calendrier qui comment du `0001-01-01 00:00:00` jsuqu'au `9999-12-31-23:59:59`. 

### ✨ Initialisation

L'initialisation du **`DateTime`** est simple:

```csharp
// 01 janvier 0001, 00:00:00
DateTime nonInitialisée = new DateTime();

// 16 Mars 2024, 00:00:00
DateTime dateSpécifiquee = new DateTime(2024, 3, 16);

// 16 Mars 2024, 10:30:00
DateTime dateEtHeureSpécifiquee = new DateTime(2024, 3, 16, 10, 30, 0);
```
### ⏱️ Maintenant

Il est possible d'obtenir la date et l'heure actuelle de la machine sur laquelle notre programme est exécuté.

```csharp
// Maintenant!
DateTime nonInitialisée = DateTime.Now;
``` 
### 📅 🕐 Les éléments d'une date

Il est possible de récupérer individuellement les éléments d'une date avec les propriétés appropriées:

```csharp
DateTime uneDate = DateTime.Now; // Obtient la date et l'heure actuelle.
int année = uneDate.Year; // par exemple 2020
int mois = uneDate.Month; // par exemple 3, pour le mois de mars
int jour = uneDate.Day;  // par exemple 30, pour le trentième jour
int heure = uneDate.Hour; // un nombre entre 0 et 23 inclusivement
int minute = uneDate.Minute; // un nombre entre 0 et 59 inclusivement
int seconde = uneDate.Second; // un nombre entre 0 et 59 inclusivement
```

### 🧮 Calculs

La structure **`DateTime`** nous permet aussi d'effectuer certain calculs pour nous:

```csharp
bool estHeureAvancée = DateTime.Now.IsDaylightSavingTime();
bool estAnnéeBissextile = DateTime.IsLeapYear(DateTime.Now.Year);

int nombreDeJours = DateTime.DaysInMonth(2020, 2); // 29 jours en février 2020

DateTime uneDate = DateTime.Now.AddHours(-48); // 2 jours avant maintenant
uneDate = DateTime.Now.AddDays(7); //  Dans une semaine
uneDate = DateTime.Now.AddMonths(-18); // Il y a un an et demi
uneDate = DateTime.Now.AddYears(20); // Dans 20 ans

```

### 📝 Analyser et formater

Nous retrouvons le même principe de conversion d'une chaîne de caractères pour laquelle nous sommes familiers. (int.Parse et int.TryParse):
```csharp
// System.FormatException !
DateTime uneString = DateTime.Parse("2022-63-12"); 

// bool = false et sansException = "0001-01-01 00:00:00"
DateTime sansException = DateTime.Now;
bool réussi = DateTime.TryParse("2000-33-44", out sansException);
```

Afin d'écrire une date dans une chaîne de caractère, nous allons nous limiter à ces deux formats:
```csharp
string dateFormatée = uneDate.ToString("yyyy-MM-dd");
string dateFormatée = uneDate.ToString("yyyy-MM-dd HH:mm:ss");
```


### 📆 Le DateTimePicker (WinForms)

[👉 Lien vers la classe DateTimePicker](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/datetimepicker-control-windows-forms)

Un controle très utile dans Windows Forms existe pour visualizer et choisir une date, c'est le **`DateTimePicker`**.

:::warning
Le préfixe pour un **`DateTimePicker`** est **`dtp`**.
:::

On peut le retrouver dans la boîte à outil sous le nom de **`DateTimePicker`**
![Boîte à outil et DateTimePicker](@site/static/img/R16/datetimepicker.png)

...et voici à quoi il ressemble en action:

![DateTimePicker en action](@site/static/img/R16/datetimepickerOuvert.png)

Il est possible de manipuler sa valeur directement dans le code. Ici, nous prenons la valeur du DateTimePicker pour lui ajouter cinq (5) jours.
Notez que la valeur est en **`DateTime`**! Aucune conversion à faire! 🥳
```csharp
DateTime dateApresCinqJours = dtpDate.Value;

dateApresCinqJours.AddDays(5);

dptDate.Value = dateApresCinqJours;
```

## ✅ Timespan

Le **`TimeSpan`** est une **structure** de l'espace de nom `System` qui permet de représenter une **durée** ou un **intervalle** de temps. Son unité de mesure est le **tick**. Il est très utile pour calculer des différences entre deux dates.

(1 tick équivaut à 100 nanosecondes)

### 🤏 Calculer un intervalle
Avec le **`TimeSpan`**, il est maintenant possible de calculer et mémoriser l'intervalle entre deux dates:
```csharp
DateTime dateDebut = new DateTime(2020, 1, 1); // le 1 janvier 2020
DateTime dateFin = new DateTime(2020, 3, 1); // le 1 mars 2020
 
TimeSpan intervalle = dateFin - dateDebut; // dans ce cas l'intervalle est de 60 jours
```

Un intervalle de temps est bien pratique, mais il nous sert à rien sans les outils pour nous aider à calculer.
Il est possible de facilement obtenir le détail d'un intervalle de temps grâce à ces méthodes:
```csharp
DateTime dateDebut = new DateTime(2020, 1, 1, 12, 15, 30); // le 1 janvier 2020 à 12:15:30
DateTime dateFin = new DateTime(2020, 1, 2, 12, 15, 30); // le 2 janvier 2020 à 12:15:30
 
TimeSpan intervalle = dateFin - dateDebut; // dans ce cas l'intervalle est 1 jour
  
int heures = intervalle.Hours; // le résultat est de 0 heure
double totalHeures = intervalle.TotalHours; // le résultat est de 24 heures
int minutes = intervalle.Minutes; // le résultat est de 0 minute
double totalMinutes = intervalle.TotalMinutes; // le résultat est de 1440 minutes
int secondes = intervalle.Seconds; // le résultat est de 0 minute
double totalSecondes = intervalle.TotalSeconds; // le résultat est de 86400 secondes
```

### ➕ Utiliser les intervalles avec les dates
On comprend bien que les intervalles de temps et les dates font un excellent duo. Il est même possible d'ajouter des intervalles directement
à une date de cette façon:
```csharp
DateTime uneDate = DateTime.Now.Add(new TimeSpan(3, 2, 0, 0)); // Dans 3 jours et 2 heures
```

## ✅ ListView

[👉 Lien vers la classe ListView](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/listview-control-windows-forms)

Le **`ListView`** est un contrôle de l'interface graphique très utile qui nous permet d'afficher et de sélectionner différents items 
d'une collection. Sa forme la plus courrante est une liste de rangées divisées par des colonnes.

:::warning
Le préfixe pour une **`ListView`** est **`lsv`**.
:::

### 🎛️ Configurer
Il est possible de venir modifier la **`ListView`** dans la conception avec le petit triangle au dessus à droite du contrôle, mais il est aussi
possible de venir configurer dans la fenêtre **Propriété (F4)**. La propriété **`Columns`** nous permet d'ajouter des colonnes, tandis que la propriété **`Items`** nous permet d'ajouter directement des lignes.
![Boîte à outil et DateTimePicker](@site/static/img/R16/listViewConception.png)

### 🏛️ Ajouter des colonnes
Notez ici que le nom des colonnes doit commencer par le préfix **`clh`**:

![DateTimePicker en action](@site/static/img/R16/listViewAjouterColonnes.png)

### 🛶 Ajouter des rangées
Les rangées d'une **`ListView`** sont emmagasinées dans une liste d'items appelée **`Items`**. Cette propriété possède les mêmes méthodes d'une liste. Pour ajouter une rangée, il suffit d'utiliser **`Add`** pour que l'élément soit ajouté et placé dans la première colonne:
```csharp
lsvExemple.Items.Add("Texte de l'élément");

// ou on peut créer un objet de type ListViewItem 
ListViewItem objItem = new ListViewItem("Allo");
lsvExemple.Items.Add(objItem);

// Puisque les items sont une liste, il est facillement possible de compter le nombre de rangée.
int nbRangées = lsvExemple.Items.Count; 
```

Pour ajouter un objet ListViewItem contenant plusieurs sous-items, il faudra ajouter plusieurs colonnes à la rangée dans **`SubItems`**:
```csharp
ListViewItem objItem = new ListViewItem("Colonne 1");
objItem.SubItems.Add("Colonne 2");
objItem.SubItems.Add("Colonne 3");
objItem.SubItems.Add("Colonne 4");
 
lsvExemple.Items.Add(objItem);
```
### ☝️ Sélectionner des indices

Obtenir l'index du premier élément sélectionné se fait par l'utilisation de la propriété **`SelectedIndices`**. 
Noter qu'il n'y pas de propriété SelectedIndex pour le ListView. Ceci permet la sélection multiple de plusieurs rangées. 
Le résultat sera dans un tableau.
```csharp
int selectedIndex = -1;
if (lsvExemple.SelectedIndices.Count > 0) // vrai si un élément est sélectionné
{   // SelectedIndices est une collection des index des éléments sélectionnés
    selectedIndex = lsvExemple.SelectedIndices[0];
}

int nbRangéeSélectionnée = lsvExemple.SelectedIndices.Count;
```