Rendre un tableau responsive.

## Utilisation
```JavaScript
makeTableResponsive(element, {
    columns: ["colonne 1", "colonne 2", ...],
    breakpoint: 991,
    onResized: function (table) {
        // console.log(table) // <table>
    }
});
```


## Options
**element**: _.classe_ ou _#id_ du tableau.\
**columns**: _Array_, citer les noms des colonnes.\
**breakpoint**: _integer_, activer la responsive à une largeur d'écran donnée.\
**onResized**: _Function_, executé lorsque la fenêtre a été redimensionnée.

## Démo
Ouvrez le fichier **index.html** pour afficher le démo.

![image](https://raw.githubusercontent.com/Mampionona/odl-table-responsive/dev/desktop.jpg)

![image](https://raw.githubusercontent.com/Mampionona/odl-table-responsive/dev/small.jpg)
