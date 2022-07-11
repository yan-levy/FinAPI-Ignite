const express = require("express")

const app = express()

app.use(express.json())

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parâmentros
 * 
 * Route Params => Identificar um recurso para editar/deletar/buscar
 * Query params => Paginação / Filtro
 * Body Params => Os objetos inserção / alteração (JSON)
 */


app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => {
    const {id} = request.params
    console.log(id)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.listen(3333, () => console.log("SERVER RUNNING ON PORT 3333"));


