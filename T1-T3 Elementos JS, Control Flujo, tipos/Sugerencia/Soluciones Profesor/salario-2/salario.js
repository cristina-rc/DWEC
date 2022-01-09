/*Crear una aplicación web que pida,en sendos cuadros de lectura de datos
, el nombre, los apellidos, el salario (número con decimales) y la edad de una persona
(un número).
La página mostrará el nombre, los apellidos, la edad introducidos por el cliente
y el salario recalculado en arreglo a los siguientes puntos:/*
/*Salario mayor de 2000 no cambia.
Salario entre 1000 y 2000:
si mayor de 45 años se sube un 3%.
si menor de 45 o igual, se sube un 10%.
Salario menor de 1000:
si menor de 30 se le asigna 1100.
si edad entre 30 y 45, el salario sube un 3%.
Si mayor de 45 sube un 15%. */


/*  Petición de datos */
let nombre=prompt("Escriba su nombre");
let apellidos=prompt("Escriba sus apellidos");
let edad=prompt("Escriba su edad");
let salario=prompt("Escriba su salario");

/*  valoramos el salario, empezamos con las
    situaciones a considerar cuando 
    el salario es menor de 1000 euros
*/
if(salario<1000){
    if(edad<30) 
        salario=1100;
    else if(edad<=45) //edad entre 30 y 45
        salario*=1.03; //subida de 3%
    else //más de 45 años
        salario*=1.15; //subida de un 15%        
}
else if (salario<=2000){
    //salario entre 1000 y 2000 euros
    if(edad>45)
        salario*=1.03;
    else
        salario*=1.1;
}
//escritura final
document.write(
    `<p>Persona: ${nombre} ${apellidos}, `+
    `edad: ${edad} años, salario: ${salario}`
);