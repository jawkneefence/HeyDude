import {BiError} from 'react-icons/bi'


export default function ErrorMsg({message}) {
    return (
        <div className = "success container mx-auto">
            <div className = "flex justify-center mx-auto border-red-200 bg-red-400 w-3/6 text-gray-800 text-md my-4 py-2 text-center bg-opacity 5">
                {message}<BiError size={25} color={"rgb(189, 26, 11)"}></BiError>
            </div>
        </div>
    )
}