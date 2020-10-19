import express from 'express';
//express é um framework simples e eficaz para REQ e RES

const app = express();

app.get('/users', () => {
    console.log('teste');
})

app.listen(3333);
//localhost/3333