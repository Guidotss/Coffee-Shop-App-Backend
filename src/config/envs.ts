import  'dotenv/config'
import { get } from 'env-var'; 


export const envs = { 
    port: get('PORT').required().asPortNumber(),
    jwtSecret: get('JWT_SECRET').required().asString(),
    node_env: get('NODE_ENV').required().asString(),
}