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
const conn = await mysql.createPool(config)


// Almacenador de funciones para acceder mas facil luego
class PizzaServices {
    
}