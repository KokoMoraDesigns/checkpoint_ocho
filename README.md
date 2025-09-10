---
description: ¿Qué hacen async y await por nosotros?
---

# async & await

A menudo, cuando estamos desarrollando una tarea, en algún momento debemos <mark style="background-color:blue;">esperar a que algún evento externo suceda</mark> antes de poder proseguir con la tarea. Por ejemplo, digamos que nos disponemos a diseñar y desarrollar el _front-end_ de una página web para un cliente; su curriculum, digamos. Antes de empezar a diseñarlo, primero le tenemos que preguntar a nuestro cliente: _¿qué sensaciones quieres transmitir con tu currículum? ¿Qué imagen quieres dar de ti?_ Esperaremos su respuesta y, en base a esta, elegiremos una gama de colores y de fuentes determinada. A partir de ahí, ya podremos seguir con nuestra tarea principal. Es decir:

**Tarea principal (o, en otras palabras: definición de nuestra función):** diseñar un curriculum e implementarlo en la web.

**Pasos:**

&#x20;       **\***

* [ ] crear un archivo 'variables' con la gama de colores
* [ ] implementar las fuentes en el archivo 'index'
* [ ] diseñar la estructura con flexbox, grid, u otras opciones
* [ ] etc.

Pero, antes del primer paso, hay una pausa: la espera para que nuestro cliente nos diga, por ejemplo, 'quiero transmitir calma y confiabilidad'. En esta pausa (en el boceto anterior, la hemos señalado con un asterisco) entran en juego la función _<mark style="background-color:yellow;">async</mark>_ y la palabra clave _<mark style="background-color:purple;">await.</mark> <mark style="background-color:yellow;">Async</mark>_ significa 'te estoy avisando de que la siguiente función es asincrónica', y su presencia permite que _await_ pueda entrar en acción. _<mark style="background-color:purple;">Await</mark>_ significa 'voy a pausar un momento el flujo de esta función para poder realizar una tarea en segundo plano'; comúnmente, esa tarea suele ser esperar, por ejemplo, la respuesta de una API, y, cuando la respuesta llega, entonces la pausa termina y se puede ejecutar el resto de la función.

<details>

<summary>ESTRUCTURA BÁSICA</summary>

```

async function nombre_funcion() {

    const nombre = await promesa;
    
    return resultado;
    
}
    
```

Posicionamos _async_ antes de definir la función, y _await_ antes de la promesa por la que vamos a esperar.

{% hint style="info" %}
No podemos usar la palabra clave await sin haber Al llamar a la función, también debemos poner _await_ justo antes de la llamada.
{% endhint %}

</details>

Ahora, vamos a codificar nuestro ejemplo anterior:



Cuando usamos funciones asincrónicas, estamos posibilitando el hecho de que se desarrollen tareas en segundo plano sin parar el flujo de trabajo de la aplicación.

