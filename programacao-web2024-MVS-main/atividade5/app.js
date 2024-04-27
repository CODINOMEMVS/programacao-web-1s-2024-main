const express = require('express');
const app = express();
const port = 3000;

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, qtd: parseInt(qtd) });
    res.send('Produto adicionado ao estoque.');
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque.');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produtoIndex = estoque.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
        estoque[produtoIndex].qtd = parseInt(qtd);
        res.send('Quantidade do produto editada.');
    } else {
        res.send('Produto não encontrado.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});