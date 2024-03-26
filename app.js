const mongoose  = require('mongoose')
const url_bd = 'mongodb://localhost:27017/utma'

mongoose.connect(url_bd)
.then(()=> {
    console.log('conexion exitosa en la base de datos')
})
.catch((err)=> {
    console.log('no jaloo')
})

const alumnos_esquema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        numerotel:{
            type:Number
        }
    }
)
const alumnos = new mongoose.model('tabla de registro de estudiantes', alumnos_esquema )

alumnos.create(
    {
        name:'jesus',
        apepat:'Salazar',
        apemat:'Padilla',
        numerotel: 4486276265,
        email: 'utma'

    }
)