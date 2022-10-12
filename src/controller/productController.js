const productModel = require('../model/productModel')
const { isValid,
    isValidRequestBody
} = require('../validation/validation')

const createProduct = async function (req, res) {
    try {

        const data = req.body;
        // console.log(data)
        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, msg: "Request body is empty" })
        }

        const { productName, brandName, category, subcategory, colour, sizes } = data;

        if (!isValid(productName)) {
            return res.status(400).send({ status: false, msg: "Title field is required" })
        }
        if (!isValid(brandName)) {
            return res.status(400).send({ status: false, msg: "Brand name field is required" })
        }
        if (!isValid(category)) {
            return res.status(400).send({ status: false, msg: "Category field is required" })
        }
        if (!isValid(subcategory)) {
            return res.status(400).send({ status: false, msg: "Subcategory field is required" })
        }
        if (!isValid(colour)) {
            return res.status(400).send({ status: false, msg: "Colour field is required" })
        }
        if (!isValid(sizes)) {
            return res.status(400).send({ status: false, msg: "Sizes field is required" })
        }

        console.log(sizes)

        if (sizes) {
            let array = sizes.split(",").map(x => x.trim()) //this will split the available sizes and give it an array

            for (let i = 0; i < array.length; i++) {
                if (!(["XS", "S", "M", "X", "L", "XL", "XXL", "XXXL"].includes(array[i]))) {
                    return res.status(400).send({ status: false, msg: `Available sizes must be among ${["XS", "S", "M", "X", "L", "XL", "XXL", "XXXL"].join(',')}` })
                }
            }
            if (Array.isArray(array)) {
                data['sizes'] = array
            }
        }

        const createProduct = await productModel.create(data)

        return res.status(201).send({
            status: true,
            msg: "Product created successfully",
            body: createProduct
        })

    }
    catch (err) {
        console.log("This is the error :", err.message)
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports = { createProduct }