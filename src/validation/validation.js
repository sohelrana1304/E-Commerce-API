const mongoose = require('mongoose')

// req.body validation if it is empty
const isValidRequestBody = function (requestbody) {
    return Object.keys(requestbody).length > 0;
}

const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

// Mongoose ObjectId validation
const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}

module.exports = {
    isValid,
    isValidObjectId,
    isValidRequestBody
}