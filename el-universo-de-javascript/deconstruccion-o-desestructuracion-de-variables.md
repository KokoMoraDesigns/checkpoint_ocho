---
description: ¿Qué es la deconstrucción de variables?
---

# Deconstrucción (o desestructuración) de variables

Imaginemos que tenemos un pastel enorme (24cm de diámetro) que vamos a comer solo nosotros; por muy de chocolate que sea, digerirlo de una sola vez puede resultarnos una tarea demasiado compleja, con lo que, usualmente, <mark style="background-color:purple;">cortaríamos ese pastel tan grande en, pongamos, ocho piezas.</mark> Y entonces, una a una, nos comeríamos en momentos diferentes cada una de esas piezas.&#x20;

En otras palabras: deconstruiríamos el pastel de 24cm de diámetro en ocho pasteles más pequeños, para hacer su ingesta más manejable.

Pues bien, ahora el pastel es una colección de datos formada por un conjunto de distintas tuplas, arrays, u objetos, y, para convertirlo en algo más digerible (en términos de programación: más manejable), queremos deconstruirlo en distintos pedazos, es decir, queremos 'cortar' / 'desempaquetar' el contenedor de la colección y asignar su contenido o sus propiedades a distintas variables.

{% hint style="info" %}
Además de facilitar un código más manejable, la desestructuración de variables también está ligada a las buenas prácticas en programación, puesto que proporciona un código más legible y fácil de mantener, así como menos reiterativo.
{% endhint %}

Veamos como funciona la deconstrucción de variables en diferentes elementos.

<details>

<summary>arrays</summary>

```
let alimentacion = ['pancake y zumo de pomelo', 'huevos rotos y yogur', 'pimientos con hamburguesa de atún y helado'];
```



Cómo accederíamos a los valores <mark style="background-color:$primary;">sin deconstruirla</mark>:

```
console.log(`desayuno: ${alimentacion[0]}, comida: ${alimentacion[1]}, cena: ${alimentacion[2]}`);


Resultado:

"desayuno: pancake y zumo de pomelo, comida: huevos rotos y yogur, cena: pimientos con hamburguesa de atún y helado"

```



Cómo accedemos a los valores <mark style="background-color:yellow;">después de deconstruirla:</mark>

```
let [desayuno, comida, cena] = alimentacion; --> esta es la deconstrucción

console.log(desayuno); --> resultado: "pancake y zumo de pomelo"
console.log(comida); --> resultado: "huevos rotos y yogur"
console.log(cena); --> resultado: "pimientos con hamburguesa de atún y helado"
```



**También podemos** elegir los elementos que deseamos deconstruir:

```
let alimentacion = ['pancake y zumo de pomelo', 'huevos rotos y yogur', 'pimientos con hamburguesa de atún y helado'];

let [desayuno, , cena] = alimentacion


console.log(desayuno); --> resultado: "pancake y zumo de pomelo"
console.log(cena); --> resultado: "pimientos con hamburguesa de atún y helado"
```

</details>



