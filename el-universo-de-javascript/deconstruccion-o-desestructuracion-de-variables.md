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

<details>

<summary>objetos</summary>

```
let usuario = {nombre: "Maite", edad: 28, ciudad: "La Habana"};
```



Cómo accederíamos a los valores <mark style="background-color:$primary;">sin deconstruirla</mark>:

```
console.log(`su nombre es ${usuario.nombre}, de ${usuario.edad} años, con origen en ${usuario.ciudad}`);


Resultado:

"su nombre es Maite, de 28 años, con origen en La Habana"
```



Cómo accedemos a los valores <mark style="background-color:yellow;">después de deconstruirla:</mark>

```
let { nombre, edad, ciudad } = usuario; --> la deconstruimos


console.log(`su nombre es ${nombre}, de ${edad} años, con origen en ${ciudad}`); --> accedemos a sus valores



Resultado: 

"su nombre es Maite, de 28 años, con origen en La Habana"
```



**También podemos** alterar el nombre de las variables:

```
let { nombre, edad: años, ciudad: origen } = usuario;

console.log(`su nombre es ${nombre}, de ${años} años, con origen en ${origen}`);


Resultado: 

"su nombre es Maite, de 28 años, con origen en La Habana"
```



**También podemos** usarlo en bucles:

```
let usuarios = [
    { nombre: 'Maite', edad: 28, ciudad: 'La Habana' },
    { nombre: 'Koko', edad: 28, ciudad: 'San Sebastián' },
    { nombre: 'Aleida', edad: 60, ciudad: 'La Habana' },
    { nombre: 'Imala', edad: 60, ciudad: 'San Sebastián' }
];


for (let { nombre, edad: años, ciudad: origen } of usuarios) {

    console.log(`su nombre es ${nombre}, de ${años} años, con origen en ${origen}`);
}


Resultado:

"su nombre es Maite, de 28 años, con origen en La Habana"
"su nombre es Koko, de 28 años, con origen en San Sebastián"
"su nombre es Aleida, de 60 años, con origen en La Habana"
"su nombre es Imala, de 60 años, con origen en San Sebastián"
```



**También podemos** asignarle valores por defecto:

```
let usuarios = [

  { nombre: "Maite", suscrita: true },
  { nombre: "Amatxito" },
  
];


for (let { nombre, suscrita = true } of usuarios) {

    console.log(`¿${nombre} está suscrita? ${suscrita}`);
}



Resultado:

"¿Maite está suscrita? true"
"¿Amatxito está suscrita? true" --> si no especificamos lo contrario al definir este usuario, el valor por defecto será true.
```



**También podemos** realizar deconstrucciones anidadas:

```
let persona = {
  nombre: 'Maite',
  pasiones: {
    literatura: 'terror',
    musica: 'r&b'
  }
},

let {
  nombre,
  pasiones: {literatura, musica}
} = persona;


console.log(`a 

console.log(nombre);        // "Laura"
console.log(titulo);        // "Desarrolladora"
console.log(departamento);  // "IT"

```

</details>

