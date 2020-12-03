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

        icons.forEach((element) => {
            const iconsContainer = $(".wrapper-bottom");

            iconsContainer.append(`
                <div class="item">
                    <i class="${element.family} ${element.prefix}${element.name}"></i>
                    <h5 class="icon-name">${element.name.toUpperCase()}</h5>
                </div>
            `);
        });

    }
);




//------------------------------------------------------



//         const iconsContainer = $(".wrapper-container");
//         printItemsInHtml (iconsContainer, icons);
//         console.log(printItemsInHtml(iconsContainer, icons));

//
// //------------------------------------------------------
//
// function printItemsInHtml (container, array) {
//
//     array.forEach((element) => {
//
//         const {name, family, prefix} = element;
//
//         container.append(`
//             <div class="item">
//                 <i class="${family} ${prefix}${name}"></i>
//                 <h5 class="icon-name">${name.toUpperCase()}</h5>
//             </div>
//         `);
//     });
//
// }
