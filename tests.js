import mysql from 'mysql2/promise' // Importo mysql2 junto a las promesas 
import { config } from './dbconfig.js'  // Importo la config de la db 

class Pizza {
    id; 
    nombre; 
    libreGluten;
    importe;
    descripcion;
}

// despues vemos donde ponemos la pool connection



export async function getDataOnClick () {
    const conn = await mysql.createPool(config)
    const [rows, fields] = await conn.query('SELECT * FROM pizza')
    conn.end()
    console.log(rows)
}
    
let btn1 = document.getElementById("1")
btn1.addEventListener("click", getDataOnClick())
// Almacenador de funciones para acceder mas facil luego
class PizzaServices {
    
}

