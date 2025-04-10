import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    shortUrl: {
        type: String,
        required: [true, 'short url is required'],
    },
    originalUrl: {
        type: String,
        required: true,
    }
});

const Link = mongoose.model('Link', LinkSchema);
export default Link;