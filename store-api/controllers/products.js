const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({featured:true});
    res.status(200).json({ products, nbHits:products.length});
}

const getAllProducts = async (req,res) => {
    const {featured, company, name, sort, fields} = req.query;
    const queryObj = {};

    if(featured)
    {
        queryObj.featured = featured;
    }

    if(company)
    {
        queryObj.company = company;
    }

    if(name)
    {
        queryObj.name = {$regex:name, $options:'i'};
    }

    let results = Product.find(queryObj);
    if(sort)
    {
        const sortList = sort.split(',').join(' ');
        results = results.sort(sortList);
    }
    else
    {
        results = results.sort('createdAt');
    }

    if(fields)
    {
        const fieldsList = fields.split(',').join(' ');
        results = results.select(fieldsList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit;

    results = results.skip(skip).limit(limit);

    const products = await results;
    res.status(200).json({products, Hits: products.length});
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}