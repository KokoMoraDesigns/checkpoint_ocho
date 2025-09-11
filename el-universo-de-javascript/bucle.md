---
description: ¿Qué tipos de bucles hay en JS?
---

# Bucle

Los bucles son conjuntos de código que se repiten hasta que una condición determinada de antemano resulte ser falsa; esto los convierte en una herramienta tremendamente útil para simplificar y automatizar las tareas repetitiva.&#x20;

<figure><img src="https://lenguajejs.com/fundamentos/estructuras-de-control/flujo-de-ejecucion/bucles-flujo-repeticion.png" alt=""><figcaption></figcaption></figure>

En esencia, un bucle es un tramo de código que se repite reiteradamente, mientras la(s) condicion(es) que justifica(n) su existencia, existan (esto incluye la posibilidad de que bien puede no repetirse ni una sola vez); con esto dicho, existen diferentes maneras de fijar el punto de inicio y el punto de culminación de un bucle, y a estas maneras les llamamos 'tipos de bucles'.&#x20;

Ahora, vamos a desglosarlos:&#x20;

{% tabs %}
{% tab title="for" %}
<mark style="background-color:$success;">Sintaxis básica:</mark>

```
for (expresion_comienzo; condicion(es) iterable(s); expresion_final) {
    código a ejecutar en cada iteración;
```

_expresion\_comienzo_ equivale a la situación antes de que el bucle se haya ejecutado por primera vez, la _condición_ en un bucle _for_ tiende a ser un contador, y _expresion\_final_, equivale al resultado que nos queda después de haber ejecutado el bucle bien sobre la expresión de inicio, o bien sobre las expresiones actualizadas.&#x20;

Veámoslo en un ejemplo:

Nuestra intención con el siguiente tramo de código es ir representando en la consola el código html necesario para crear encabezados cada vez más reducidos:

```
for (h=1;h<=4;h++) { 
   	console.log("<h" + h + ">El título de este apartado tendrá un heading de " + h + "</h" + h + ">"); 
}

Resultado: 

"<h1>El título de este apartado tendrá un heading de 1</h1>"
"<h2>El título de este apartado tendrá un heading de 2</h2>"
"<h3>El título de este apartado tendrá un heading de 3</h3>"
"<h4>El título de este apartado tendrá un heading de 4</h4>"
```

**Traducción:** empezando por el encabezado 'h1', y siempre que h sea menor o igual a 4, incrementa el numeral de h y devuelve el resultado en la consola.

{% hint style="info" %}
Utilizamos este tipo de bucle cuando tenemos conocimiento del número de veces que queremos ejecutarlo.
{% endhint %}
{% endtab %}

{% tab title="while" %}
<mark style="background-color:$success;">Sintaxis básica:</mark>

<pre><code>while (condicion) {

  código a ejecutar mientras la condición sea verdadera;
<strong>
</strong><strong>}
</strong></code></pre>

Por ejemplo, queremos controlar el número de horchatas que tenemos en el desván:

```
let horchatas = 14;

while (horchatas > 1) {
  
    horchatas--;     
    
    console.log(`nos quedan ${horchatas} horchatas en el desván`);
}

console.log('¡vamos a comprar más horchatas!');

Resultado:

"nos quedan 13 horchatas en el desván"
"nos quedan 12 horchatas en el desván"
"nos quedan 11 horchatas en el desván"
"nos quedan 10 horchatas en el desván"
"nos quedan 9 horchatas en el desván"
"nos quedan 8 horchatas en el desván"
"nos quedan 7 horchatas en el desván"
"nos quedan 6 horchatas en el desván"
"nos quedan 5 horchatas en el desván"
"nos quedan 4 horchatas en el desván"
"nos quedan 3 horchatas en el desván"
"nos quedan 2 horchatas en el desván"
"nos quedan 1 horchatas en el desván"
"¡vamos a comprar más horchatas!"
```

{% hint style="info" %}
horchatas - -     significa:       horchatas = horchatas - 1
{% endhint %}

**Traducción:** mientras 'horchatas' sea mayor que uno, decrementa un numeral y devuelve el resultado en la consola; una vez las horchatas se hayan terminado, finaliza el bucle y devuelve en la consola la cadena '¡vamos a comprar más horchatas!.

{% hint style="info" %}
Utilizamos este tipo de bucle cuando **no** tenemos conocimiento del número de veces en que queremos ejecutarlo, pero sí sabemos la condición que provocará que deje de ser necesario.
{% endhint %}
{% endtab %}

{% tab title="do... while" %}
<mark style="background-color:$success;">Sintaxis básica:</mark>

```
do {

  código a ejecutar;
  
} while (condicion(es));
```

En este tipo de bucle el código se va a ejecutar, como mínimo, una primera vez, tras lo que revisará la condición que le hayamos indicado y, en caso de resultar verdadera, volverá a ejecutarse, y así _repeat_ hasta que el resultado de la condición derive en falso.

&#x20;Por ejemplo:&#x20;

```
let libros_que_quiero_comprar = [' titulo_uno', ' titulo_dos', ' titulo_tres', ' titulo_cuatro', ' titulo_cinco', ' titulo_seis'];
let capricho_que_me_toca = [];

do {
  
  libro = libros_que_quiero_comprar.pop();
  capricho_que_me_toca.push(libro);
  console.log(`¡ya me he comprado ${capricho_que_me_toca}!`);
  
} while (libros_que_quiero_comprar.length > 0);


Resultado:

"¡ya me he comprado  titulo_seis!"
"¡ya me he comprado  titulo_seis, titulo_cinco!"
"¡ya me he comprado  titulo_seis, titulo_cinco, titulo_cuatro!"
"¡ya me he comprado  titulo_seis, titulo_cinco, titulo_cuatro, titulo_tres!"
"¡ya me he comprado  titulo_seis, titulo_cinco, titulo_cuatro, titulo_tres, titulo_dos!"
"¡ya me he comprado  titulo_seis, titulo_cinco, titulo_cuatro, titulo_tres, titulo_dos, titulo_uno!"
```

**Traducción:** elimina un título del listado de 'libros que me quiero comprar' y añádelo al listado de 'capricho que me toca'; haz esto al menos una vez, y luego vuelve a hacerlo hasta que el listado de libros que me quiero comprar esté vacío.

{% hint style="info" %}
Utilizamos este tipo de bucle cuando **no** tenemos conocimiento del número de veces en que queremos ejecutarlo, pero sí sabemos la condición que provocará que deje de ser necesario, y **deseamos que se ejecute como mínimo una vez**.
{% endhint %}
{% endtab %}

{% tab title="for... in & for... of" %}
<mark style="background-color:$success;">Sintaxis básica:</mark>

```
for (variable in/of objeto) {

  código a ejecutar
}
```

Ambos tipos de bucles los utilizaremos cuando queramos trabajar con un objeto iterable, es decir, que se ejecutará el código que marquemos por cada elemento que esté incluido en dicho objeto; usaremos _<mark style="background-color:purple;">for... in</mark>_ cuando deseemos iterar sobre las propiedades de un objeto, y utilizaremos _<mark style="background-color:yellow;">for...of</mark>_ cuando deseemos iterar sobre los valores de un objeto:

<mark style="background-color:purple;">for...in</mark>

```
let libros_que_quiero_comprar_en_octubre = {'terror': 'titulo_uno', 'romance': 'titulo_dos', 'thriller': 'titulo_tres', 'empoderamiento': 'titulo_cuatro', 'comedia': 'titulo_cinco' }

for (let libro in libros_que_quiero_comprar_en_octubre) {

    console.log(`porfi, porfi, porfi, ¿me puedes regalar ${libros_que_quiero_comprar_en_octubre[libro]} :)`);
    
}



RESULTADO:

"porfi, porfi, porfi, ¿me puedes regalar titulo_uno :)"
"porfi, porfi, porfi, ¿me puedes regalar titulo_dos :)"
"porfi, porfi, porfi, ¿me puedes regalar titulo_tres :)"
"porfi, porfi, porfi, ¿me puedes regalar titulo_cuatro :)"
"porfi, porfi, porfi, ¿me puedes regalar titulo_cinco :)"
    
```

**Traducción:** adéntrate en las propiedades del objeto 'libros\_que\_quiero\_comprar\_en\_octubre', accede a cada valor guardado bajo cada llave de ese objeto, e imprímelo en la cadena 'porfi, porfi, porfi, ¿me puedes regalar 'valor\_guardado\_bajo\_cada\_llave'?.

{% hint style="warning" %}
No es recomendable utilizar este método con arrays, puesto que el valor que nos devolverá será el índice del elemento:



let familia = \['persona\_uno', 'persona\_dos', 'persona\_tres', 'persona\_cuatro', 'persona\_cinco']



for (let persona in familia) {

&#x20;   console.log(\` ${persona}, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia? \`);

}



Resultado:



```
" 0, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia? "
```

```
" 1, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia? "
```

```
" 2, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia? "
```

```
" 3, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia? "
```

```
" 4, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia? "
```

\

{% endhint %}

{% hint style="info" %}
Utilizamos este tipo de bucle cuando queremos **iterar sobre las propiedades de un objeto.**
{% endhint %}



<mark style="background-color:yellow;">for...of</mark>

```
let familia = ['persona_uno', 'persona_dos', 'persona_tres', 'persona_cuatro', 'persona_cinco']

for (let persona of familia) {

    console.log(`${persona}, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia?`)
}
    
            
RESULTADO:
    
"persona_uno, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia?"
"persona_dos, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia?"
"persona_tres, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia?"
"persona_cuatro, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia?"
"persona_cinco, ¿te apetece venir a cenar y a ver el final de la serie con toda la familia?"

```

**Traducción:** por cada persona (elemento) que forma parte de la familia (del array 'familia'), imprime su nombre seguido de la propuesta (cadena) '_¿te apetece venir a cenar y a ver el final de la serie con toda la familia?_'

{% hint style="info" %}
Utilizamos este tipo de bucle cuando deseamos **iterar sobre un objeto.**
{% endhint %}
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
Es necesario que nos aseguremos de que en algún punto, el resultado de la condición será falso y podremos salir del bucle, porque si no, nos encontraremos con lo que conocemos como un **bucle infinito**, es decir, un bucle que se repite indefinidamente porque no cuenta con ninguna orden de detención, por ejemplo:



let familia = \['persona\_uno', 'persona\_dos', 'persona\_tres', 'persona\_cuatro', 'persona\_cinco']



while (familia !== persona\_siete) {

&#x20;    console.log(\` ${familia}, ¿os apetece venir a cenar y a ver el final del programa con toda la familia? \`)

}



Esto creará un bucle infinito de :&#x20;

{% code overflow="wrap" %}
```
"persona_uno,persona_dos,persona_tres,persona_cuatro,persona_cinco, ¿os apetece venir a cenar y a ver el final del programa con toda la familia?"
```
{% endcode %}
{% endhint %}
