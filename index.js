// modulos
const express = require('espress');
const app = express();
require('dotenv').config();

// cargar rutas
const sequelize = require('./db/db');
const vistaUsuario = require('./app/view/vista.usuarios');

// middlewares
app.use(express.json())
app.set('view engine','ejs')

// rutas o vistas
vistaUsuario(app);

//middleware para capturas de errores


//Inciar el servidor
async function inicioServidor() {
    try {
        await sequelize.authenticate();
        console.log('Conexion correcta a la DB!')
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en el puerto: ${process.env.PORT}`)
        })
    }catch (err){
        console.log(err)
        console.log('No se pudo conectar con la DB')
    }
}

inicioServidor();