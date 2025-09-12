---
description: ¿Qué es la programación orientada a objetos?
---

# Programación orientada a objetos

Para explicar el concepto de programación orientada a objetos, imaginemos una cena familiar, a la que van a acudir, pongamos, diez persona diferentes. Esa cena se ha organizado de manera que, en lugar de una sola persona tener que pasar varios días organizándolo todo y cocinando para diez estómagos, cada una de las personas asistentes va a aportar algo: una  cocinará un pastel de chocolate, otra, un brownie de moras y chocolate, otra... y así hasta que cada una de ellas sea la encargada de un aspecto de la cena. Finalmente, la noche en cuestión, las creaciones de todas las personas se pondrán en común sobre una mesa de comedor y, así, cogerá forma el 'objetivo global', es decir: la cena.

Pues bien, eso es exactamente lo que facilita la programación orientada a objetos: dividir una aplicación o web en <mark style="background-color:blue;">diferentes agrupaciones de código (componentes)</mark>, cada una de ellas <mark style="background-color:blue;">con un cometido determinado</mark>, para <mark style="background-color:purple;">después interconectarlo todo</mark> y dar forma 'al objetivo global', es decir: la aplicación.

Algunos conceptos que debemos tener claros para comprender bien este sistema son:

<details>

<summary>Las clases y los objetos</summary>

Son una especie de plantillas genéricas que usamos para crear nuestros objetos: unas instrucciones que definen el comportamiento general que mantendrán los objetos que forman parte de esa clase.

Por ejemplo:

```
class Literatura {

    constructor(titulo, nombre) {
    
        this.titulo = titulo; --> propiedades
        this.nombre = nombre;
    }
    
    presentacion() { --> método
        console.log(`${this.nombre} ha escrito ${this.titulo}`);
    }
}

const terror = new Literatura('Casas Vacías', 'Brenda Navarro'); --> instancia

terror.presentacion(); --> resultado --> "Brenda Navarro ha escrito Casas Vacías"
        
```

En este ejemplo hemos utilizado la <mark style="background-color:orange;">palabra clave</mark> <mark style="background-color:orange;"></mark>_<mark style="background-color:orange;">class</mark>_ para declarar la clase Literatura. Dentro de ella nos encontramos con un <mark style="background-color:orange;">constructor</mark>, que se pondrá en marcha de manera automática cada vez que creemos una nueva instancia de la clase (ejecutará las instrucciones sobre qué atributos debe tener esa nueva instancia). Después, tenemos las <mark style="background-color:orange;">propiedades</mark> (las variables que contienen los datos), los <mark style="background-color:orange;">métodos</mark> (las funciones que delimitan cómo un objeto se va a comportar), y, finalmente, las <mark style="background-color:orange;">instancias</mark> (los objetos creados en esa clase).

En conclusión, la plantilla o el molde Literatura define un comportamiento según el que almacena un título literario y un nombre y junta ambos datos en la acción de devolvernos la  cadena 'nombre ha escrito título'. De modo que, cada vez que creemos un nuevo objeto, este comportamiento se activará.

<figure><img src="https://profile.es/wp-content/media/POO.jpg" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>La encapsulación</summary>

Visualiza la cerradura de tu puerta de entrada. Diariamente, tú coges la llave de tu casa, la introduces en la cerradura, y giras, a un lado para abrirla, o al otro para cerrarla. Lo que no ves son los engranajes internos que posibilitan, por una parte, que puedas generar esa acción y, por otra parte, que si alguien intenta 'internarse ilícitamente' en tu puerta con otra llave, no pueda hacerlo.&#x20;

La encapsulación es algo similar; por una parte, reúne las propiedades y métodos que forman parte de una clase, y, por otro lado, <mark style="background-color:orange;">protege el funcionamiento interno del sistema y esconde su complejidad</mark> permitiendo que desde fuera solamente se pueda acceder a una 'punta de iceberg' de todo lo que lo compone, a través de lo que llamaríamos <mark style="background-color:orange;">la interfaz de usuario</mark>.

<figure><img src="https://marcuscode.com/static_content/media/00/00/00/35/xOs7G5sR_1000.jpg" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>La herencia</summary>

<mark style="background-color:orange;">Permite el reciclaje de atributos y métodos</mark> entre varias clases jerarquizadas, de manera que las clases secundarias puedan <mark style="background-color:orange;">heredar partes del comportamiento de la clase principal y ampliarlos</mark>. Un ejemplo simple, si tuviéramos una clase primaria que coge el nombre de alguien y le devuelve una cadena con su nombre seguido de 'eres una persona maravillosa', podemos ampliar esa funcionalidad, en una clase secundaria, añadiendo otra línea a la cadena que se adapte según el momento del día. Entonces, recicla la funcionalidad de la clase principal, pero le añade: si es de día, pon después 'te deseo un buen día', y si es de noche, pon después 'te deseo una buena noche'.



<figure><img src="https://www.elvisualista.com/wp-content/uploads/2016/10/g-16.2-diagrama-herencia-prototipos.png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>El polimorfismo</summary>

La clase también podrá heredar un comportamiento, solo que, en este caso, lo modificará.&#x20;

Por ejemplo:

```
class Literatura {
    presentacion() {
        console.log('Esta autora ha escrito un libro');
    }
}

class Terror extends Literatura {
    presentacion() {
        console.log('Esta autora de terror ha escrito un libro');
    }
}

class Romance extends Literatura {
    presentacion() {
        console.log('Esta autora de romance ha escrito un libro');
    }
}

const libroTerror = new Terror(); 
const libroRomantico = new Romance(); 

libroTerror.presentacion(); --> resultado: "Esta autora de terror ha escrito un libro"
libroRomantico.presentacion(); --> resultado: "Esta autora de romance ha escrito un libro"
```

</details>

