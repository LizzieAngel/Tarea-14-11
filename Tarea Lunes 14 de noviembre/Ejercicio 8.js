//*8.	Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: sumar, restar, multiplicar, dividir./*

function ejercicio(a,b, operaciones){
    switch (operaciones){
         case "suma":
         return console.log(a + b);

         case "resta":
         return console.log(a - b);

         case "multiplicacion":
         return console.log(a * b);

         case "division":
         return console.log(a / b);

}
}
    ejercicio(8 , 4, "multiplicacion");