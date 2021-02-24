import express, { request } from 'express';

const app = express();

app.get("/users", (request, response) => {
    return response.send({message: "Deu certo de novo garai kakkka"});
})

app.post("/", (request, response) => {
    return response.json({message: "os dados foram salvos com sucesso"});
})
app.listen(3333, () => console.log("port is running"))

    