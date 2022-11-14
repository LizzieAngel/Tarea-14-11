//*5.	Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad./*

function calcular_mayor(areglo){
    var contador=0
    for ( let i =0 ; i<areglo.length; i++){
        
        if(areglo[i]>=18){
            contador++
        }
    }   console.log("personas mayores de edad son:" + contador);
}
calcular_mayor([2,4,6,8,10,18,20,22,30,32])