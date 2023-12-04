import votoService from '../services/votoService.js'

class VotoController {
    constructor() {}

    create = async (req,res) => {
        try{
            const {candidato , zona} = req.body;
            if(votoService.create(candidato,zona)){
            res.status(200).send({ success: true, message:"Voto Cargado"});
            }
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error.message});
        }

    }
    getAll = async (req,res) => {
        try{
            const votos = votoService.getAll()
            res.status(200).send({ success: true, message: {generales: votos}});
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error});
        }
    }
   
}

export default VotoController