import Sessions from '../models/session'

export async function getSessions(req, res) {
    try {
        const sessions = await Sessions.find({})
        if(!sessions) return res.status(404).json({error: "Sesh data not found!"})
        res.status(200).json(sessions)
    }catch(error) {
        res.status(404).json( {error: "Error fetching appointments!"})
    }
}

export async function postSession(req, res) {
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({error: "Error posting form data!"});
        Sessions.create(formData, function(err, data) {
            return res.status(200).json(data)
        })
    }catch(error) {
        return res.status(404).json({error})
    }
}

export async function updateSession(req, res) {
    try {
        const {seshId} = req.query;
        const formData = req.body;

        if(seshId && formData) {
           const updatedSesh = await Sessions.findByIdAndUpdate(seshId, formData)
            res.status(200).json(updatedSesh)
        }
        res.status(404).json({error: "No Session selected."})
    }catch(error) {
        res.status(404).json({error: "Error updating data!"})
    }
}

export async function deleteSession(req, res) {
    try {
        const {seshId} = req.query;
        
        if(seshId) {
            const sesh = await Sessions.findByIdAndDelete(seshId)
            return res.status(200).json({deleted: userId})
        }
        res.status(404).json({error: "No Session selected."})
    }catch(error) {
        res.status(404).json({error: "Error deleting data!"})
    }
}