import votos from "../memory/memory.js";
import Validator from "../validator/index.js";

const validator = new Validator()

const getAll = () => {
    const found = votos
    const generales = { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 };

        found.forEach((voto) => {
    const candidato = voto.candidato;
    generales[candidato]++;
  });
    return generales
}
const create = (candidato,zona) => {

    //Validaciones
    if(!validator.validarVacioONulo(candidato)) throw new Error("Candidato Vacio o Nulo")
    if(!validator.validarVacioONulo(zona)) throw new Error("Zona Vacio o Nulo")
    if(!validator.validarCandidato(candidato)) throw new Error("candidato no válido")
    if(!validator.validarZona(zona)) throw new Error("zona no válida")

    const object = {candidato: candidato , zona: zona}
    votos.push(object)

    return true
}

export default {create,getAll}