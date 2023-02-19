import {Schema, models, model} from 'mongoose'

const victimSchema = new Schema({
    name: String,
    email: String,
    discord: String,
    phone: String
})

const Victims = models.app || model('victim', victimSchema)
export default Victims