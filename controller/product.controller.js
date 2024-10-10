const Product = require('../modules/product.model');

const getProducts = async (req, res) => {
    try {
        const AllProducts = await Product.find({});
        res.status(200).json(AllProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const ProductId = await Product.findById(id);
        res.status(200).json(ProductId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const putProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        req.status(500).json({ message: error.message })
    }
}

const postProduct = async (req, res) => {
    try {
        const AProduct = await Product.create(req.body);

        res.status(200).json(AProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        res.status(200).json({ message: 'product deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProduct,
    getProducts,
    postProduct,
    putProduct,
    deleteProduct
}