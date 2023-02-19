import connectMongo from '@/database/conn'
import { getSessions, postSession, updateSession, deleteSession } from '@/database/controller'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
Data = {
  name: string,
  appDate: Date,
  notifyOn: Date,
  game: string
}*/

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({error: "Error connecting to db!"}));
  const { method } = req;

  switch(method) {
    case 'GET':
        //res.status(200).json({method,name:'GET Request!'});
        getSessions(req, res)
        break;
    case 'POST':
        postSession(req, res)
        //res.status(200).json({method,name:'POST Request!'});
        break;
    case 'PUT':
        updateSession(req, res)
        //res.status(200).json({method,name:'PUT Request!'});
        break;
    case 'DELETE':
        deleteSession(req, res)
        res.status(200).json({method,name:'DELETE Request!'});
        break;
    default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed!`);
  }
}
