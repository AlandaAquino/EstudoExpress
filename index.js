const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

// console.log(app);
/*
GET: buscar
*/

app.get('/projects', (request, response) => {
    // response.send('Olá, Mundo!');
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body);
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
        'Projeto 6',
    ])
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params)

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
        'Projeto 6',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ])
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
})