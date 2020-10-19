import express from 'express';
//express é um framework simples e eficaz para REQ e RES
//todo backend automaticamente trabalha em requisição e resposta (request, reponse)

const app = express();

app.get('/users', (request, response) => {
    return response.json({ message: 'Hello World'});
});

app.listen(3333);
//localhost/3333