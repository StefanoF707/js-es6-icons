// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

$(document).ready(
    function() {

        // Definisco l'array di oggetti
        const icons = [
            {
            name: "dog",
            prefix: "fa-",
            type: "animal",
            family: "fas"
            },
            {
            name: "fish",
            prefix: "fa-",
            type: "animal",
            family: "fas"
            },
            {
            name: "tractor",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
            {
            name: "hippo",
            prefix: "fa-",
            type: "animal",
            family: "fas"
            },
            {
            name: "spider",
            prefix: "fa-",
            type: "animal",
            family: "fas"
            },
            {
            name: "apple-alt",
            prefix: "fa-",
            type: "vegetable",
            family: "fas"
            },
            {
            name: "carrot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas"
            },
            {
            name: "lemon",
            prefix: "fa-",
            type: "vegetable",
            family: "fas"
            },
            {
            name: "dragon",
            prefix: "fa-",
            type: "animal",
            family: "fas"
            },
            {
            name: "pepper-hot",
            prefix: "fa-",
            type: "vegetable",
            family: "fas"
            },
            {
            name: "space-shuttle",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
            {
            name: "truck-monster",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
            {
            name: "wheelchair",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
            {
            name: "tram",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
            {
            name: "fighter-jet",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
            {
            name: "helicopter",
            prefix: "fa-",
            type: "vehicle",
            family: "fas"
            },
        ];

        const iconsContainer = $(".wrapper-bottom");

        // Definisco l'array di colori
        let colors = [
            "#be0505",
            "#1900b5",
            "#ebff00",
        ];

        let types = getTypeFromArray (icons);

        let newIconsArray = createNewIconsArrayWithColors (icons, colors, types);

        printItemsInHtml (iconsContainer, newIconsArray);

    }
);

//------------------------------------------------------

// funzione che permette di stampare gli elementi dell'array icons nella pagina
function printItemsInHtml (container, array) {

    array.forEach((element) => {

        const {name, family, prefix, color} = element;

        container.append(`
            <div class="item">
                <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                <h5 class="icon-name">${name.toUpperCase()}</h5>
            </div>
        `);
    });
}

// funzione che ci restituisce un nuovo array con solamente i 3 type dei vari elementi all'interno dell'array icons
function getTypeFromArray (array) {

    const typesArray = [];

    array.forEach( (element) => {
        const {type} = element;

        if (typesArray.includes(type) == false ) {
            typesArray.push(type);
        }
    } );

    return typesArray;
}

// funzione che ci restituisce una nuova array con l'aggiunta della chiave color, con il valore che viene assegnato in base al type dell'elemento
function createNewIconsArrayWithColors (iconsArray, colorsArray, typesArray) {

    const newArray = iconsArray.map ( (element) => {
        const index = typesArray.indexOf(element.type);
        const iconColor = colorsArray[index];

        const newObject = {
            ...element,
            color: iconColor,
        }
        return newObject;
    });

    return newArray;

}
