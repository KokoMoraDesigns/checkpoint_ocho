// Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

miLista = ['velma', 'exploradora', 'jane', 'john', 'harry']

for (let indice = 0; indice < miLista.length; indice++) {
    console.log(miLista[indice]);
}


// Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.

miLista = ['velma', 'exploradora', 'jane', 'john', 'harry']

let indice = 0;

while (indice < miLista.length) {
    console.log(miLista[indice]);
    indice++;
}




// Cree una función de flecha que devuelva "Hola mundo".

const saludo = () => console.log('hola, mundo');