import { useReducer } from "react"
import NewAppSuccess from "./NewAppSuccess"
import ErrorMsg from "./ErrorMsg"
import { useSelector, useDispatch} from 'react-redux'
import { toggleChangeAction, updateAction} from '../redux/reducer'

const formReducer = (state, event) => {
    return {       
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function EditAppForm() {

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.keys(formData).length==0) return <ErrorMsg message={"Something unexpected happened. Please try again."}></ErrorMsg>
        console.log(formData)
    }
    //if(Object.keys(formData).length > 0) return <NewAppSuccess message={"Session Updated!"}></NewAppSuccess>

    //const toggleForm = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()

    const onCancel = () => {
        dispatch(toggleChangeAction())
        dispatch(updateAction(undefined))
    }

    return (
        <form className = "grid lg:grid-cols-1 w-4/6 gap-4" onSubmit = {handleSubmit}>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="appDate">Date and Time: </label>
                <input type="datetime-local" onChange={setFormData} id = "appDate" name="appDate" className = "border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="notifyOn">Notifications start on: </label>
                <input type="date" onChange={setFormData} id = "notifyOn" name="notifyOn" className = "border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="game"> Game: </label>
                <input type="text" onChange={setFormData} id = "game" name="game" className = "border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <button onClick = {onCancel} className = "justify-center text-md w-2/6 bg-gray-400 text-gray-200 px-2 py-1 roundedmd hover:bg-gray-100 hover:border-green-600 hover:text-green-600 rounded-md">
                Cancel</button>
            <button className = "justify-center text-md w-2/6 bg-yellow-600 text-gray-200 px-2 py-1 roundedmd hover:bg-gray-100 hover:border-green-600 hover:text-green-600 rounded-md">
                Update</button>
        </form>
    )
}