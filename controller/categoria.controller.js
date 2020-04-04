
const {CategoriaModels} = require('../dal/models');

exports.index = async (req,res) =>{
    const {offset,limit} = req.query;
    const categorias = await CategoriaModels.findAndCountAll({offset:0, limit:20});
    if(offset!=null && limit!=null) {
        const categorias = await CategoriaModels.findAndCountAll({offset, limit});
    }
    if(categorias){
        res.json({
            message: "Busqueda correcta",
            count:categorias.count,
            data:categorias.rows
        })
    }
    else {
        res.json({
            message : "hubo un problema con la busqueda"
        })
    }
};

exports.store = async (req,res) =>{
    const nom = req.body.nom;
    const categorias = CategoriaModels.create({nom});

    if(categorias){
        res.json({
            message: "Se inserto correctamente",
            data:categorias
        })
    }
    else {
        res.json({
            message : "No se logró realizar la insercción"
        })
    }
};