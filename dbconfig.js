import 'dotenv/config'
export const config =  {
    user: process.env.DB_USER, 
    password: process.env.DB_PSW,
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME
}
