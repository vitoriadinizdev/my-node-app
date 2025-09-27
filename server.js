const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Olá! Sua aplicação Node.js está rodando no Kubernetes com ArgoCD!!11');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
