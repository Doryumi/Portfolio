import express from 'express';
const app = express();

// Configurações do EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Meu Portfólio',
        sections: ['home', 'sobre', 'projetos', 'contato']
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));