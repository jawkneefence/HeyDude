import connectMongo from '@/database/conn'
import { getSessions, getSession, postSession, updateSession, deleteSession } from '@/database/controller'

export default async function handler(req, res) {

    connectMongo().catch(() => res.status(405).json({error: "Error connecting to db!"}));

    const {method} = req
    
    switch (method) {
        case "GET":
            getSession(req, res);
            break;
        case 'PUT':
            updateSession(req, res)
            break;
        case 'DELETE':
            deleteSession(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed!`);
    }
}