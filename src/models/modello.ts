import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    titolo: String,
    sottotitolo: { type: String, required: true },
    riassunto: String,
    dataCreazione: {
        type: Date,
        default: Date.now()
    }
});

export const Post = mongoose.model("Post", postSchema, "posts") 