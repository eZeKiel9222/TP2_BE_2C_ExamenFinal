class RutaController {
    constructor() {}

    create = async (req,res) => {
        try{
            res.status(200).send({ success: true, message:'Create'});
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error});
        }

    }
    get = async (req,res) => {
        try{
            res.status(200).send({ success: true, message:'Get'});
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error});
        }
    }
    getAll = async (req,res) => {
        try{
            res.status(200).send({ success: true, message:'GetAll'});
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error});
        }
    }
    update = async (req,res) => {
        try{
            res.status(200).send({ success: true, message:'Update'});
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error});
        }
    }
    delete = async (req,res) => {
        try{
            res.status(200).send({ success: true, message:'Delete'});
        }
        catch(error){
            res.status(400).send({ success: false, errorMsg: error});
        }
    }

}

export default RutaController