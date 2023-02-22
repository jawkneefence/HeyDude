import EditAppForm from "./EditAppForm"
import CreateAppForm from "./CreateAppForm"
import { useSelector} from 'react-redux'

export default function Form() {

    const formId = useSelector((state) => state.app.client.formId)
    //const flag = false;

    return (
        <div className = "container mx-auto py-5">
            {formId ? <EditAppForm/> : <CreateAppForm/>}
        </div>
    )
}