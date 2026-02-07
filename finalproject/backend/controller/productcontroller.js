const Product = require("../model/Product");

//insert product

exports.insertproduct = async (req,res) => {
    try {
        const {name,price,quantity,description} = req.body;
        const product = await Product.create({
            name,
            price,
            quantity,
            description

        });
        res.status(200).json(product);

    } catch(err) {
        console.error(err);
    }
}

//view all data
exports.viewproduct = async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);

    } catch(err) {
        console.error(err);
    }
}

//singel view
exports.singleviewproduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch(err) {
        console.error(err);
    }
}

//update

exports.updateproduct = async (req,res) => {
    try {
        const {name,price,quantity,description} = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {name,price,quantity,description},
            {new:true}
        
        );
        res.status(200).json(product);

    } catch(err) {
        console.error(err);
    }
}

//delete
exports.deleteproduct = async (req,res) => {
    try {
        
        await Product.findByIdAndDelete(
            req.params.id,
        
        );
        res.status(200).json({message:"product deleted"});

    } catch(err) {
        console.error(err);
    }
}