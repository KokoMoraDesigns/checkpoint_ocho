---
description: ¿Qué hacen async y await por nosotros?
---

# async & await

A menudo, cuando estamos desarrollando una tarea, en algún momento debemos <mark style="background-color:blue;">esperar a que algún evento externo suceda</mark> antes de poder proseguir con la tarea. Por ejemplo, digamos que nos disponemos a diseñar y desarrollar el _front-end_ de una página web para un cliente; su curriculum, digamos. Antes de empezar a diseñarlo, primero le tenemos que preguntar a nuestro cliente: _¿qué sensaciones quieres transmitir con tu currículum? ¿Qué imagen quieres dar de ti?_ Esperaremos su respuesta y, en base a esta, elegiremos una gama de colores y de fuentes determinada. A partir de ahí, ya podremos seguir con nuestra tarea principal. Es decir:

**Tarea principal (o, en otras palabras: definición de nuestra función):** diseñar un curriculum e implementarlo en la web.

**Pasos:**

* [ ] crear un archivo 'variables' con la gama de colores
* [ ] implementar las fuentes en el archivo 'index'
* [ ] diseñar la estructura con flexbox, grid, u otras opciones
* [ ] etc.

Pero, antes del primer paso, hay una pausa: la espera para que nuestro cliente nos diga, por ejemplo, 'quiero transmitir calma y confiabilidad'. En esta pausa entra en juego la palabra clave _async,_ que significa 'te estoy avisando de que la siguiente función es asincrónica'
