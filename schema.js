const Joi = require("joi");
const Listing = require("./models/listing");
const review = require("./models/review");

module.exports.listingSchema = Joi.object ({
    Listing: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.string().required().min(0),
        image: Joi.string().allow("", null),
    }).required(),
});

module.exports.reviewSchema = Joi.object ({
    review: Joi.object ({
        rating: Joi.number().required().min(1).max(5),
    }).required(),
});