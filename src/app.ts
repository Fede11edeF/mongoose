import * as db from "./db"

const dbOperations = async () => {
    console.log(await db.insertPost("arriva l'autunno", "quante foglie", "sarà l'autunno' più foglioso di sempre"))

    console.log(await db.editPost('664b510ae0309efd0932d5cc', {titolo: "Arriva un nuovo inverno", sottotitolo: 'fa freddo'}))

    console.log(await db.deletePost('664b5d84b4987709966099a7'))

    console.log(await db.getPosts( ))
}

dbOperations()