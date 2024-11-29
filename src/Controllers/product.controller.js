exports.get = (req,res) => {
    res.send('Get Product JA');
}

exports.getById = (req,res) => {
    res.send("Product ID: " + req.params.id);
}

exports.create = (req,res) => {
    res.send("Create a product JA");
}