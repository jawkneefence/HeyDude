import {Schema, models, model} from 'mongoose'
//import Victims from '@models/victim'
const seshSchema = new Schema({
    appDate: Date,
    notifyOn: Date,
    game: String,
    ownerEmail: String,
    victims: String
})

const Sessions = models.session || model('session', seshSchema)
export default Sessions;