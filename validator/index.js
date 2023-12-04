class Validator {
    constructor() {}
    
    soloNumeros(cadena) {
        // Utilizamos una expresión regular para verificar si la cadena contiene solo dígitos
        var regex = /^[0-9]+$/;
      
        // Probamos la cadena con la expresión regular
        if (regex.test(cadena)) {
          console.log("La cadena contiene solo caracteres numéricos.");
          return true;
        } else {
          console.log("La cadena NO contiene solo caracteres numéricos.");
          return false;
        }
      }
      esNumerico(cadena) {
        // Verificamos si la cadena es numérica usando isNaN
        if (!isNaN(cadena)) {
          console.log("La cadena es numérica.");
          return true;
        } else {
          console.log("La cadena NO es numérica.");
          return false;
        }
      }

      validarVacioONulo(cadena) {
        // Verificamos la longitud de la cadena o si la cadena es "falsa"
        if (cadena && cadena.trim().length > 0) {
          console.log("La cadena no está vacía.");
          return true;
        } else {
          console.log("La cadena está vacía.");
          return false;
        }
      }

      validarEnteroPositivo(cadena) {
        // Convertimos la cadena a un entero
        var numero = parseInt(cadena, 10);
      
        // Verificamos si es un número entero positivo
        if (!isNaN(numero) && Number.isInteger(numero) && numero > 0) {
          console.log("La cadena es un entero positivo.");
          return true;
        } else {
          console.log("La cadena NO es un entero positivo.");
          return false;
        }
      }


}

export default Validator