class Validator {
    constructor() {}
    
      validarVacioONulo(cadena) {
        // Verificamos la longitud de la cadena o si la cadena es "falsa"
        if (cadena && cadena.trim().length > 0) {
          return true;
        } else {
          return false;
        }
      }
      validarZona(cadena) {
        var opcionesPermitidas = ["zona1", "zona2", "zona3", "zona4"];

      // Validar si la variable está dentro de las opciones permitidas
        if (opcionesPermitidas.includes(cadena)) {
        return true;
     } else {
       return false;
    }
      }
      validarCandidato(cadena) {
        var opcionesPermitidas = ["candidatoA", "candidatoB", "candidatoC", "enblanco"];

      // Validar si la variable está dentro de las opciones permitidas
        if (opcionesPermitidas.includes(cadena)) {
        return true;
     } else {
       return false;
    }
      }


}

export default Validator