const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    productName: { type: String, required: true, trim: true },

    brandName: { type: String, required: true, trim: true },

    category: { type: String, required: true, trim: true },

    subcategory: { type: [String], required: true, trim: true },

    colour: {type: String, required: true, trim: true },

    sizes: { type: [String], required: true, enum: ["XS", "S", "M", "X", "L", "XL", "XXL", "XXXL"] },

}, { timestamps: true });

module.exports = mongoose.model("product", productSchema)