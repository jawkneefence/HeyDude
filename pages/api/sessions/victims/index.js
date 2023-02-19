import connectMongo from '@/database/conn'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
Data = {
  name: string,
  appDate: Date,
  notifyOn: Date,
  game: string
}*/

export default function handler(req, res) {
  connectMongo();
  res.status(200).json({ name: 'John Doe' })
}
