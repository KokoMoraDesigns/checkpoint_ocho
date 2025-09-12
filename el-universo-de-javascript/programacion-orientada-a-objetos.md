---
description: ¿Qué es la programación orientada a objetos?
---

# Programación orientada a objetos

Para explicar el concepto de programación orientada a objetos, imaginemos una cena familiar, a la que van a acudir, pongamos, diez persona diferentes. Esa cena se ha organizado de manera que, en lugar de una sola persona tener que pasar varios días organizándolo todo y cocinando para diez estómagos, cada una de las personas asistentes va a aportar algo: una  cocinará un pastel de chocolate, otra, un brownie de moras y chocolate, otra... y así hasta que cada una de ellas sea la encargada de un aspecto de la cena. Finalmente, la noche en cuestión, las creaciones de todas las personas se pondrán en común sobre una mesa de comedor y, así, cogerá forma el 'objetivo global', es decir: la cena.

Pues bien, eso es exactamente lo que facilita la programación orientada a objetos: dividir una aplicación o web en <mark style="background-color:blue;">diferentes agrupaciones de código (componentes)</mark>, cada una de ellas <mark style="background-color:blue;">con un cometido determinado</mark>, para <mark style="background-color:blue;">después interconectarlo todo</mark> y dar forma 'al objetivo global', es decir: la aplicación.

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

</details>

<details>

<summary>La encapsulación</summary>

Visualiza la cerradura de tu puerta de entrada. Diariamente, tú coges la llave de tu casa, la introduces en la cerradura, y giras, a un lado para abrirla, o al otro para cerrarla. Lo que no ves son los engranajes internos que posibilitan, por una parte, que puedas generar esa acción y, por otra parte, que si alguien intenta 'internarse ilícitamente' en tu puerta con otra llave, no pueda hacerlo.&#x20;

La encapsulación es algo similar; por una parte, reúne las propiedades y métodos que forman parte de una clase, y, por otro lado, protege el funcionamiento interno del sistema y esconde su complejidad permitiendo que desde fuera solamente se pueda acceder a una 'punta de iceberg' de todo lo que lo compone, a través de lo que llamaríamos la interfaz de usuario.

<figure><img src="https://marcuscode.com/static_content/media/00/00/00/35/xOs7G5sR_1000.jpg" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>La herencia</summary>



</details>

<details>

<summary>El polimorfismo</summary>



</details>
