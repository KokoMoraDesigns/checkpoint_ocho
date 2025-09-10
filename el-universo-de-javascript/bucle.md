---
description: ¿Qué tipos de bucles hay en JS?
---

# Bucle

Los bucles son conjuntos de código que se repiten hasta que una condición determinada de antemano resulte ser falsa; esto los convierte en una herramienta tremendamente útil para simplificar y automatizar las tareas repetitiva.&#x20;

Ahora vamos a desglosar cuatro tipos de bucles: _for_, _while_, _do... while_, y _for... of._

{% tabs %}
{% tab title="For" %}
<mark style="background-color:$success;">Sintaxis básica:</mark>

```
for (expresion_comienzo; condicion(es); expresion_final) {
    código a ejecutar en cada iteración
```

_expresion\_comienzo_ equivale a la situación antes de que el bucle se haya ejecutado por primera vez, y _expresion\_final_, al resultado que nos queda después de haber ejecutado el bucle bien sobre la expresión de inicio, o bien sobre las expresiones actualizadas. Veámoslo en un ejemplo:

Nuestra intención con el siguiente tramo de código es ir representando en la consola el código html necesario para crear encabezados cada vez más reducidos
{% endtab %}

{% tab title="While" %}
Sintaxis básica:
{% endtab %}

{% tab title="Do... while" %}
Sintaxis básica:
{% endtab %}

{% tab title="For... of" %}
Sintaxis básica:
{% endtab %}
{% endtabs %}



```
for (let i = 0; i < 5; i++) {
  console.log("Repetición número", i);
}

for ([initializacion]); [condicion]; [expresion-final]) {
   // sentencias
}

```

```
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción
  
  for (expresión_inicial; condición; expresión_de_actualización) { // código a ejecutar }
```
