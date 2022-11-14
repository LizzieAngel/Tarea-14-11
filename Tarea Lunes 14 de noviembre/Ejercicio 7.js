//7.	Elaborar un algoritmo para leer la nota de diez estudiantes y mostrar cantidad de aprobados y reprobados./*

function alumnos(notas){
    var contador=0
     for ( let i=0; i<notas.length; i++){
         if(notas[i]>=6){
             contador++ }
         
     } console.log("La cantidad de alumnos aprobados es de:" + contador);
 
     
     var reprobados=0
     for ( let i=0; i<notas.length; i++){
         if(notas[i]<6){
             reprobados++ }
         
     } console.log("La cantidad de alumnos reprobados es de:" + reprobados);
 
 
 }
 
 alumnos([9,2,8,3,7,4,8,5,10,6])