import {config} from "dotenv"
import mongoose from "mongoose";
import {Post} from "./models/modello"

config()
const connectionString = process.env.MONGODB_CONNECTION_STRING


//inserire un post
export const insertPost = async(titolo:string, sottotitolo:string, riassunto:string) => {

    try {
        await mongoose.connect(connectionString!, {dbName: "stop-code"})

        let post = new Post();
        post.titolo = titolo;
        post.sottotitolo= sottotitolo;
        post.riassunto = riassunto;

        return await post.save()
    }
    catch (err:any) {
        console.error(err)
    }
    finally {
        await mongoose.disconnect()
    }
}


//ritornare elenco completo
export const getPosts = async() => {

    try {
        await mongoose.connect(connectionString!, {dbName: "stop-code"})
        return await Post.find()
    }
    catch (err:any) {
        console.error(err)
    }
    finally {
        await mongoose.disconnect()
    }
}

//modificare un post


export const editPost = async(id:string, update:object) => {

    try {
        await mongoose.connect(connectionString!, {dbName: "stop-code"})
        return await Post.findByIdAndUpdate(id, update, {new: true})
    }
    catch (err:any) {
        console.error(err)
    }
    finally {
        await mongoose.disconnect()
    }
}


//cancellare un post
export const deletePost = async (id: string) => {
    try {
        await mongoose.connect(connectionString!, { dbName: "stop-code" })
        return await Post.findByIdAndDelete(id)

    } 
    catch (err: any) {
        console.error(err)
    }
    finally {
        await mongoose.disconnect()
    }
}