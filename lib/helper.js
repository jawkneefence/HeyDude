const BASE_URL = "http://localhost:3000"

export const getSessions = async() => {
    const response = await fetch(`${BASE_URL}/api/sessions`)

    return response.json();
}

export const getSession = async(seshId) => {
    const response = await fetch(`${BASE_URL}/api/sessions/${seshId}`);
    const json = await response.json();
    if(json) return json;
    else return {};
}

export async function addSession(formData) {
    try {
        const Options = {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        console.log("addSession function in progress...")
        const response = await fetch(`${BASE_URL}/api/sessions`, Options)
        const json = await response.json();
        if(json) {
            console.log("addSession function finished...")
            return json;
        } 
        else return {};
    }catch(error) {
        return error;
    }
}

export async function updateSession(seshId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/sessions/${seshId}`, Options)
        const json = await response.json();
        if(json) return json;
        else return {};
    }catch(error) {
        return error;
    }
}

export async function deleteSession(seshId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: {'Content-Type': "application/json"}
        }
    const response = await fetch(`${BASE_URL}/api/sessions/${seshId}`, Options)
    const json = await response.json()
    return json;
    }
    catch(error) {
        return error;
    }
}