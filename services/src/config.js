
//Configuración inicial del servidor Host y puerto
const config={
    host:process.env.APP_HOST,
    port:process.env.PORT
}

module.exports={
    SECRET:'api-blockbuster',
    config
}