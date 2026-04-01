---
description: CheckListBox & ListView LargeIcon
---

# CheckListBox & ListView LargeIcon

---
### Télécharger la démonstration à compléter

Disponible ici 👉 [Demonstration9_1](../../static/files/demonstrations/Demo_9.1_A_COMPLETER.zip)

---

## 🎯 Objectifs de la séance

À la fin de cette séance, vous serez en mesure de :

- Comprendre le fonctionnement du contrôle **`CheckListBox`** et ses différences avec **`ListBox`**  
- Ajouter, retirer et manipuler des éléments dans une **`CheckListBox`** à partir du code  
- Gérer l’état des cases (cochées/décochées) et exploiter la collection **`CheckedItems`**  
- Configurer et utiliser un contrôle **`ListView`** en mode **LargeIcon**  

---

## ✅ CheckListBox

[👉 Lien vers la classe CheckListBox (Documentation officielle)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.checkedlistbox)

[👉 Lien vers la classe ListBox (Notions C#)](https://info.cegepmontpetit.ca/notions-csharp/documentation/gui-controles/listbox)

Dans le cours d'*Introduction à la programmation* (1P6), nous avons manipulé le contrôle **`ListBox`**. Ce contrôle permet d’afficher une liste d’éléments et offre à l’utilisateur la possibilité d’en sélectionner un ou plusieurs. Les éléments sont gérés sous forme de collection via la propriété `Items`.

Comme son nom l’indique, une **`CheckListBox`** est essentiellement une **`ListBox`** dans laquelle chaque élément possède une **case à cocher**, comme illustré ci-dessous :

![CheckListBox](@site/static/img/R17/CheckListBox.png)

En cliquant sur un élément du **`CheckListBox`**, celui-ci est sélectionné et sa case est cochée. Cliquer de nouveau sur un élément déjà coché permet de le décocher.

![CheckListBox avec un élément coché](@site/static/img/R17/CheckListBox_ElementCoche.png)

:::warning
Le préfixe recommandé pour une **`CheckListBox`** est **`clb`**.
:::

### Conception
Il est possible de modifier une **`CheckListBox`** directement dans l’espace de conception à l’aide du menu accessible via le petit triangle situé dans le coin supérieur droit du contrôle. Il est également possible de la configurer à partir de la fenêtre **Propriétés (F4)**.

L’option **Modifier les éléments...** permet d’ajouter des chaînes de caractères à la collection `Items` :

![Configuration CheckListBox](@site/static/img/R17/Configuration_CheckListBox.png)

### Ajouter des éléments à partir du code
Les éléments d'une **`CheckListBox`** sont stockés dans la collection `Items`, qui offre des méthodes similaires à celles d’une liste. Pour ajouter un élément, il suffit d'utiliser la méthode **`Add()`** :
```csharp
clbFruitsEtLegumes.Items.Add("Ananas");
clbFruitsEtLegumes.Items.Add("Banane");
clbFruitsEtLegumes.Items.Add("Cerise");

// Vous pouvez remplir une CheckListBox à partir d'un tableau avec la méthode 'AddRange()'
string[] fruits = { "Fraise", "Kiwi", "Mangue", "Patate", "Poire", "Pomme", "Tomate", "Canneberge" };
clbFruitsEtLegumes.Items.AddRange(fruits);

// Obtenir le nombre d’items
int nbItems = clbFruitsEtLegumes.Items.Count; 
```

### Retirer des éléments
Comme avec une liste, la suppression d’éléments peut se faire avec les méthodes **`Remove()`**, **`RemoveAt()`**, **`Clear()`**, etc.

```csharp
clbFruitsEtLegumes.Items.Remove("Patate");

// Vider la liste : clbFruitsEtLegumes.Items.Clear();
```

### Cocher / Décocher une case
Le contrôle **`CheckListBox`** possède la méthode **`SetItemChecked()`**, qui permet de modifier l'état d'un item à partir de son index. Le premier paramètre de **`SetItemChecked()`** représente l'index de l'item, le second paramètre représente l'état de l'item (``true`` = 'coché', ``false`` = 'décoché').

```csharp
clbFruitsEtLegumes.SetItemChecked(0, true); // Cocher l'item en position 0
clbFruitsEtLegumes.SetItemChecked(2, false); // Décocher l'item en position 2
```

### Obtenir l'état de la case d'un item
La méthode **``GetItemChecked()``** retourne un booléen indiquant si un item est coché. Elle prend en paramètre l'index de l'item à vérifier et retourne un booléen (`true`/`false`) selon l'état de la case.

```csharp
bool estCoche = clbFruitsEtLegumes.GetItemChecked(0);
```
### Collection des items cochés
Lorsqu'on travaille avec une **`CheckListBox`**, il peut être utile de connaître la collection des items cochés. Pour ce faire, utilisez la propriété `CheckedItems` :
```csharp
clbFruitsEtLegumes.CheckedItems;
```
---

## ✅ ListView + LargeIcon


[👉 Lien vers la classe ListView](https://info.cegepmontpetit.ca/2P6/cours/rencontre16#-listview)

Lors de la séance précédente, nous avons vu que le contrôle **`ListView`** permet d’afficher une liste d’éléments. Il est également possible d’y associer des images.

### Étapes à suivre

#### 1) Configurer le mode d'affichage

Une fois la **`ListView`** créée, assurez-vous que son affichage soit configurée à **LargeIcon**. Cette configuration peut se faire via la fenêtre **Propriété (F4)** ou directement dans le code en modifiant la propriété `View` :

```csharp
lsvPlanetes.View = View.LargeIcon;
```
Le mode **LargeIcon** permet d’afficher chaque item avec une **image** et un **texte**.


#### 2) Créer une ImageList

Puisque nous manipulons des images, nous aurons besoin de les stocker dans une **liste d'images**. Vous devez donc initialiser une **ImageList** :

```csharp
ImageList imageList = new ImageList();
imageList.ImageSize = new Size(120, 120); // ajustable selon préférence
imageList.ColorDepth = ColorDepth.Depth32Bit; // configuration standard pour l'affichage des couleurs
```
* ``ImageSize`` : dimension des images, ajustable selon votre préférence
* ``ColorDepth`` : profondeur de couleur (32 bits recommandé)

#### 3) Ajouter des images

Il est maintenant temps d'ajouter les images à la collection *Images* de votre **ImageList**. Pour ce faire, utilisez la méthode `Add(string key, Image image)` où chaque image est associée à une clé. Cette clé permettra de facilement récupérer l'image au moment venu.
```csharp
imageList.Images.Add("mercure", Image.FromFile("./images_planetes/mercure.jpg"));
```

#### 4) Assigner votre liste d'images à la propriété `LargeImageList` de votre **`ListView`** :

```csharp
lsvPlanetes.LargeImageList = imageList;
```

#### 5) Créer et ajouter des items 

À ce stade, vous devriez avoir une liste pleine d'images associée à votre **`ListView`**. Seul problème : votre **`ListView`** ne possède toujours pas d'items ! Il ne vous reste plus qu'à créer des objets items de type **ListViewItem** associant un texte à la clé d'une image :

```csharp
ListViewItem planeteMercure = new ListViewItem("Mercure", "mercure"); // Associe le texte "Mercure" à la clé "mercure" qui, elle, est associée à votre image ! Facile :)
```

... et à les ajouter à la collection *Items* de votre **`ListView`**:

```csharp
lsvPlanetes.Items.Add(planeteMercure);
```