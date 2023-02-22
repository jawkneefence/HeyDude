import Sessions from '../models/session'

export async function getSessions(req, res) {
    try {
        const sessions = await Sessions.find({})
        if(!sessions) return res.status(404).json({error: "Sesh data not found!"})
        console.log("Successfully Retreived Sessions!")
        res.status(200).json(sessions)
    }catch(error) {
        res.status(404).json( {error: "Error fetching appointments!"})
    }
}

export async function getSession(req, res) {
    try {
        const {seshId} = req.query;
        if(seshId) {
            const sesh = await Sessions.findById(seshId);
            console.log("Successfully Retreived Session!")
            res.status(200).json(sesh);
        }
        res.status(404).json({error: "Session id not provided"});
    }catch(error) {
        res.status(404).json({error: "Cannot get session"});
    }
}

export async function postSession(req, res) {
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({error: "Error posting form data!"});
        await Sessions.create(formData, function(err, data) {
            console.log("postSession function successful!")

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
           console.log(Sessions.findByIdAndUpdate(seshId,formData))
           console.log("Successfully Updated!")
           //console.log(Sessions.findOneAndUpdate(seshId, {formData}))
        }
        res.status(404).json({error: "No Session selected."})
    }catch(error) {
        res.status(404).json({error: "Error updating data!"})
        console.log(error)
    }
}

export async function deleteSession(req, res) {
    try {
        const {seshId} = req.query;
        
        if(seshId) {
            const sesh = await Sessions.findByIdAndDelete(seshId)
            return res.status(200).json({deleted: seshId})
        }
        res.status(404).json({error: "No Session selected."})
    }catch(error) {
        console.log(error);
        res.status(404).json({error: "Error deleting data!"})
    }
}