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

En este tramo de código, _razasPerros_ es el contenedor (la variable) de los datos 'mestizo de Pitbull', 'Chihuahua' y 'Doberman'; y _var_ es la palabra clave que hemos utilizado para declarar la variable, del mismo modo que podríamos haber usado una de las otras dos palabras clave que existen: _let_, o _const_.&#x20;

¿Son intercambiables estas palabras claves? ¿Podemos hacer un uso indistinto de ellas?

No.&#x20;

Cada una de ellas puede ser apropiada o inapropiada en diferentes circunstancias, <mark style="background-color:purple;">dependiendo de sus atributos y,</mark> por ende, <mark style="background-color:purple;">del contexto</mark> en que deseemos declarar la función. Los tres atributos en base a los que va a oscilar nuestra decisión son: <mark style="background-color:purple;">el alcance, el hoisting, y la reasignación</mark>.



Del <mark style="background-color:orange;">hoisting</mark> ya hemos hablado previamente:

{% embed url="https://koko-mora.gitbook.io/checkpoint_siete/javascript/declaracion-de-funcion-vs-expresion-de-funcion" %}

Pero, como breve recordatorio, el hoisting es el sistema de funcionamiento que sigue JavaScript según el que en primer lugar declara las funciones y las variables, y en segundo lugar les asigna sus valores. En este sentido, si declaramos la función con la palabra clave _var_, JavaScript lo elevará al comienzo con un valor de _undefined_, es decir, la función estará en funcionamiento, solo que con los valores todavía sin asignar. No obstante, si la declaramos con la palabra clave _let_ o _const_, se quedará en una zona muerta temporal, puesto que en este caso no funcionará hasta que no tenga los valores asignados.

Acerca del <mark style="background-color:orange;">alcance</mark>, _let_ y _const_ tienen un alcance que se limita al bloque del que forman parte, en cambio, _var_ puede alcanzar la función en que está integrada.

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-09-11 a la(s) 17.45.35.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://chatgpt.com/backend-api/estuary/content?id=file-HN9v6m4qaEjf7UwXdSLHww&#x26;ts=488219&#x26;p=fs&#x26;cid=1&#x26;sig=7d8aa7195871d496fadd6ee9434847ee7535fb33a42672f50e0a55fa29ecb4d2&#x26;v=0" alt=""><figcaption></figcaption></figure>

Veamos un ejemplo:

```
function alcance() {
  if (true) {
    var uno = "var dentro del bloque";
    let dos = "let dentro del bloque";
    const tres = "const dentro del bloque";

    console.log(uno); --> output: "var dentro del bloque"
    console.log(dos); --> output: "let dentro del bloque"
    console.log(tres); --> output: "const dentro del bloque"
  }

  console.log("Dentro de la función, fuera del bloque:" uno); --> output: "Dentro de la función, fuera del bloque:" "var dentro del bloque"
  console.log("Dentro de la función, fuera del bloque:" dos); --> output: Uncaught ReferenceError: dos is not defined 
  console.log("Dentro de la función, fuera del bloque:" tres); --> output: Uncaught ReferenceError: tres is not defined 
}


```

Y, finalmente, sobre <mark style="background-color:orange;">la reasignación y la redeclaración,</mark> _var_ se puede tanto reasignar como redeclarar:

```
var x = 1
console.log(x) --> output:1

var x = 2
console.log(x) --> output:2

x = 4000
console.log(x) --> output:4000
```

Mientras que _let_ no se puede redeclarar:

```
let y = 1
console.log(y) --> output:1

let y=2 
console.log(y) --> output:Uncaught SyntaxError: Identifier 'y' has already been declared 

y = 4000
console.log(y) --> output: 4000
```

Y _const_ no se puede redeclarar ni reasignar:

```
const a = 1
console.log(a) --> output:1

const a = 2
console.log(a) --> output:Uncaught SyntaxError: Identifier 'a' has already been declared 

a = 4000
console.log(a) --> output:Uncaught TypeError: Assignment to constant variable. 
```

{% hint style="info" %}
En conclusión, ¿cuál usamos en cada momento?

En la codificación moderna, debido a lo que hemos expuesto anteriormente sobre el hoisting y el alcance (las posibles complicaciones en las que puede derivar su falta de restricciones), _var_ ha dejado de estar en boga, mientras que se recomienda hacer uso de _let_ en caso de que tengas variables que necesitarás alterar más adelante, y de _const_ en caso de que sepas que no vas a necesitar reasignarlas.
{% endhint %}

Ahora, volviendo a las funciones. Podemos usar una función tradicional, con la estructura que hemos visto al principio, o podemos usar una función de flecha.



\
