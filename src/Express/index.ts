import express from 'express';
import body from 'body-parser'
const app = express()
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(express.static('src/Express/Public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/Views/index.html'));
app.listen(process.env.PORT, () => console.log(`Web en linea en el puerto ${process.env.PORT} ✅`));