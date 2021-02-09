Rendre un tableau responsive

## Usage
```JavaScript
makeTableResponsive(element, {
    columns: ["colonne 1", "colonne 2", ...],
    breakpoint: 991,
    onResized: function (table) {
        // console.log(table)
    }
});
```


## Options
**element**: _.classe_ ou _#ID_ du tableau
**columns**: _Array_, citer les noms des colonnes.\
**breakpoint**: _integer_, activer la responsive à une largeur d'écran donnée.\
**onResized**: _Function_, executé lorsque la fenêtre a été redimensionnée.

## Démo
Ouvrez le fichier **index.html** pour afficher le démo.
