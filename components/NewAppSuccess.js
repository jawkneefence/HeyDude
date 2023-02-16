import {BiCheck} from 'react-icons/bi'


export default function NewAppSuccess({message}) {
    return (
        <div className = "success container mx-auto">
            <div className = "flex justify-center mx-auto border-yellow-200 bg-yellow-400 w-3/6 text-gray-800 text-md my-4 py-2 text-center bg-opacity 5">
                {message}<BiCheck size={25} color={"rgb(61, 196, 20)"}></BiCheck>
            </div>
        </div>
    )
}