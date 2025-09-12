---
description: ¿Qué hacen async y await por nosotros?
---

# async & await

A menudo, cuando estamos desarrollando una tarea, en algún momento debemos <mark style="background-color:blue;">esperar a que algún evento externo suceda</mark> antes de poder proseguir con la tarea. Por ejemplo, digamos que nos disponemos a diseñar y desarrollar el _front-end_ de una página web para un cliente; su curriculum, digamos. Antes de empezar a diseñarlo, primero le tenemos que preguntar a nuestro cliente: _¿qué sensaciones quieres transmitir con tu currículum? ¿Qué imagen quieres dar de ti?_ Esperaremos su respuesta y, en base a esta, elegiremos una gama de colores y de fuentes determinada. A partir de ahí, ya podremos seguir con nuestra tarea principal. Es decir:

**Tarea principal (o, en otras palabras: definición de nuestra función):** diseñar un curriculum e implementarlo en la web.

**Pasos:**

&#x20;       **\***

* [ ] crear un archivo 'variables.scss' con la gama de colores
* [ ] implementar las fuentes en el archivo 'index.html'
* [ ] diseñar la estructura con flexbox, grid, u otras opciones
* [ ] etc.

Pero, antes del primer paso, hay una pausa: la espera para que nuestro cliente nos diga, por ejemplo, 'quiero transmitir calma y fiabilidad'. En esta pausa (en el boceto la hemos señalado con un asterisco) entran en juego la función _<mark style="background-color:yellow;">async</mark>_ y la palabra clave _<mark style="background-color:purple;">await.</mark> <mark style="background-color:yellow;">Async</mark>_ significa 'te estoy avisando de que la siguiente función es asincrónica', y su presencia permite que _await_ pueda entrar en acción. _<mark style="background-color:purple;">Await</mark>_ significa 'voy a pausar un momento el flujo de esta función para poder realizar una tarea en segundo plano'; comúnmente, esa tarea suele ser esperar, por ejemplo, la respuesta de una API, y, cuando la respuesta llega, entonces la pausa termina y se puede ejecutar el resto de la función.

<details>

<summary>ESTRUCTURA BÁSICA</summary>

```

async function nombre_funcion() {

    const nombre = await promesa;
    
    return resultado;
    
}
    
```

Posicionamos _async_ antes de definir la función, y _await_ antes de la promesa por la que vamos a esperar.

{% hint style="warning" %}
No podemos usar la palabra clave _await_ sin antes haber precisado _async_.
{% endhint %}

</details>

Ahora, vamos a volver al tema que tratábamos al principio, pero, esta vez, con un ejemplo codificable. La 'tarea principal' en este caso será la de recoger los datos de los perfiles de usuario en una librería; para ello, primero vamos a simular la llamada a la API, dándole una demora de 4 segundos, y, tras la respuesta de esta llamada, necesitaremos que nos muestre la información que ha recogido.

```
function recogerPerfiles() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Esta sería toda la información que la API nos devuelva.');
        }, 4000);
    });
}



async function mostrarPerfiles() {
    console.log('Estoy buscando toda la información que tengo almacenada sobre los perfiles, un momento, por favor.');
    const perfiles = await recogerPerfiles();
    console.log(`Aquí están los perfiles que te interesan: ${perfiles}`);
}

```

Es decir, si llamamos a la función asíncrona _mostrarPerfiles_, esta ejecutaría la primera orden, devolviéndonos:

```
mostrarPerfiles();

"Estoy buscando toda la información que tengo almacenada sobre los perfiles, un momento, por favor."
```

Después, entraría en juego la palabra clave _await_, con lo que,  hasta que la función _recogerPerfiles_ no hubiese terminado su cometido (que en este caso tendría una demora fija de 4 segundos), _mostrarPerfiles_ no seguiría ejecutando el código restante.

```
mostrarPerfiles();

Resultado:

"Estoy buscando toda la información que tengo almacenada sobre los perfiles, un momento, por favor."

Y 4 segundos después:

"Aquí están los perfiles que te interesan: Esta sería toda la información que la API nos devuelva."
```



<details>

<summary>Promesas</summary>

Otro elemento que forma parte de las funciones asíncronas es la promesa: el objeto que <mark style="background-color:orange;">muestra el resultado de dicha función asíncrona</mark>, bien si este ha sido satisfactorio (te devuelvo los datos que me pedías) o bien si ha habido un error (te devuelvo el error). De este modo, una promesa puede tener tres estados: pendiente (operación en proceso), cumplida (operación culminada con éxito), o rechazada (operación culminada sin éxito).

<figure><img src="https://es.javascript.info/article/promise-basics/promise-resolve-reject.svg" alt=""><figcaption></figcaption></figure>

Usamos las promesas en los contextos de llamadas a APIs, intentos de acceder a bases de datos u otras acciones cuyo cumplimiento conlleve una demora indefinida en la que las funciones que dependan del resultado quedan detenidas hasta que dicho resultado llegue.



Veamos una **estructura básica de una promesa:**

```
miPromesa {

  .then((resultado) => {
  
    console.log(resultado);
    
  })
  
  .catch((error) => {
  
    console.error(error.message); 
    
  });
  
}
```

En el interior de _.then_ posicionamos la función que está esperando el resultado de la promesa para poder ejecutarse, mientras que _.catch_ sirve para manejar los potenciales errores que surjan si la promesa queda en estado de rechazo. Y, aunque no esté representado en el esquema anterior, también podríamos tener _.finally()_, que haría referencia a la función que se accionaría después de que la promesa devolviera un resultado, tanto si este fuera positivo, como si fuera negativo.

</details>
