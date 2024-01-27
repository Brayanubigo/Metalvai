import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import "dotenv/config"
import productos from './src/routes/productos.routes.js'
import admin from './src/routes/admin.routes.js'
import ventas from './src/routes/ventas.routes.js'
import clientes from './src/routes/clientes.routes.js'
import notificacion from './src/routes/notificacion.routes.js'


const app = express()
app.use(express.json())
app.disable('x-powered-by')
dotenv.config();

// const dominiosPermitidos = [process.env.FRONTEND_URL]
// const corsOption = {
//     origin:function(origin,callback){
//         if(dominiosPermitidos.indexOf(origin) !== -1){
//             callback(null,true)
//         }else{
//             callback(new Error('No permitido por CORS'))
//         }
//     }
// }

//app.use(cors(corsOption))

// app.get("/",(req,res)=>
// {const htmlResponse="<html><head><body>olaaaaaa</body></head></html>";
//  res.send(htmlResponse)})
app.use(admin)
app.use(productos)
app.use(clientes)
app.use(ventas)
app.use(notificacion)


// app.use((req,res,next)=> {
//     res.status(404).json({
//         message: '404 NOT FOUND'
//     })
// })



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    
})