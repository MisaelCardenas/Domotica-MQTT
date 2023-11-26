const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades

app.use(express.static('public')); // Esto permite servir archivos estáticos, como HTML, CSS, e imágenes desde la carpeta 'public'

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Ajusta la ruta según la ubicación de tu archivo HTML
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
