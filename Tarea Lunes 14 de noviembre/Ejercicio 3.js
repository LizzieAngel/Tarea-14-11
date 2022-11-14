/*3.	El costo de las llamadas telefónicas internacionales depende de la zona geográfica en la que se encuentre el país destino y del número de minutos hablados. En la siguiente tabla se presenta el costo del minuto por zona. A cada zona se le ha asociado una clave.
Nota: Para llamadas con duración menor a 30 minutos se hace descuento del 10%
*/

/*Clave-Zona
  Precio

  12 (America del Norte) - $2.00
  15 (America Central)   - $2.20
  18 (America del Sur)   - $4.50
  19 (Europa)            - $3.50
  23 (Asia)              - $6.00
  25 (Africa)            - $6.00
  29 (Oceania)           - $5.00
  */

  function costos(clave, tiempo_en_minuto){
    let costo_de_la_llamada, descuento, costo_del_minuto;
    switch(clave) {
        case 12:
            costo_de_la_llamada = 2
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10%: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 15:
            costo_de_la_llamada = 2.20
            costo_del_minuto = tiempo_en_minutos * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
           
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10%: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 18:
            costo_de_la_llamada = 4.50
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10%: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 19:
            costo_de_la_llamada = 3.50
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 23:
            costo_de_la_llamada = 6
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
           
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 25:
            costo_de_la_llamada = 6
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_del_minuto);
            break;
        default:
            console.log("La clave que usted ingreso es invalida, marque nuevamente");
            break;

    }

  }

  costos(15)
