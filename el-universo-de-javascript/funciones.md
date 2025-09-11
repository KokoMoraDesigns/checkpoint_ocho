---
description: >-
  ¿Cuáles son las diferencias entre const, let y var? ¿Qué es una función de
  flecha?
---

# Funciones

Una función consiste en un bloque de código cuyo fin es llevar a cabo una tarea en específico; para ello, se sirve de los parámetros de entrada y del código que debe ejecutar, y, con esto, nos da un retorno, un resultado.&#x20;

Supongamos que vamos a rediseñar nuestro dormitorio. Nuestra función se definiría de la siguiente manera:



* [ ] Tarea que queremos cumplir: rediseñar el dormitorio.
* [ ] Utensilios que necesitamos para cumplirla: un bote de pintura y un rodillo.
* [ ] Acciones que debemos tomar para cumplirla: pintar las cuatro paredes.
* [ ] Resultado: nuestro dormitorio ahora es rosa.



Ahora, volvamos a la codificación:



* [ ] Definición de la tarea que queremos cumplir --> pasa a llamarse 'nombre de la función'.
* [ ] Utensilios que necesitamos para cumplirla --> parámetros de entrada.
* [ ] Acciones que debemos tomar para cumplirla --> código a ejecutar.
* [ ] Resultado --> retorno



De esta manera, nuestra función, ahora en términos de programación, se define de la siguiente manera:

<pre><code>function nombre(parámetro(s) de entrada) {
    
    código a ejecutar
    
    return retorno_deseado
    
}

<strong>llamamos a la función --> nombre(); --> output:retorno_deseado
</strong></code></pre>

Asimismo, para ser capaces de ejecutar el código, muchas veces necesitamos contar con algo que denominamos <mark style="background-color:purple;">variables:</mark> contenedores que almacenan datos que necesitaremos para el correcto funcionamiento de la función. Por ejemplo:

```
 var razasPerros = ['mestizo de Pitbull', 'Chihuahua', 'Doberman'];
```

<figure><img src="https://desarrolloweb.com/storage/article_featured_images/MaQ6mbAWDZnfyZMSEcXOfeZtkVwnTdVUV4TZOZhO.png" alt=""><figcaption></figcaption></figure>

En este tramo de código, _razasPerros_ es el contenedor (la variable) de los datos 'mestizo de Pitbull', 'Chihuahua' y 'Doberman'; y _var_ es la palabra clave que hemos utilizado para declarar la variable, del mismo modo que podríamos haber usado una de las otras dos palabras clave que existen: _let_, o _const_. Sin embargo, ¿son intercambiables estas palabras claves? ¿Podemos hacer un uso indistinto de ellas?

No.&#x20;

Cada una de ellas será apropiada o inapropiada para cada contexto particular, en dependencia de sus atributos y, por ende, del contexto en que deseemos declarar una función. Empecemos por la palabra clave _var_.





Ahora, volviendo a las funciones. Podemos usar una función tradicional, con la estructura que hemos visto al principio, o podemos usar una función de flecha.



\
