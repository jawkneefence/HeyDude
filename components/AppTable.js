import {BiUserPlus, BiEdit, BiTrashAlt} from 'react-icons/bi'
import EditAppForm from './EditAppForm'
import { useState } from 'react'

export default function appTable() {
    return (
        <table className = "min-w-full table-auto">
            <thead>
                <tr className = "bg-gray-800 text-gray-200 items-center">
                    <th className = "py-2">
                        <span >Session Date</span>
                    </th>
                    <th className = "py-2">
                        <span >Notify Starting</span>
                    </th>
                    <th className = "py-2">
                        <span >Game</span>
                    </th>
                    <th className = "py-2">
                        <span>Victims</span>
                    </th>
                    <th className = "py-2">
                        <span>Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className = "bg-gray-200">
                {Tr()}
                {Tr()}
                {Tr()}
            </tbody>
        </table>
    )
}

function Tr({id, appDate, notifyOn, game}) {

    return (
        <tr className = "bg-gray-100 text-center font-semibold items-center">
                    <td className="py-3">
                        <span>{appDate || "12-31-2069 @ 9:00PM"}</span>
                    </td>
                    <td className="py-3">
                        <span>{notifyOn || "06-24-2000"}</span>
                    </td>
                    <td className="py-3">
                        <span>{game || "Valheim"}</span>
                    </td>
                    <td className="py-3">
                        <span>3</span>
                    </td>
                    <td className = "flex justify-around gap-1 mt-3">
                    <button className="cursor"><BiUserPlus size={23} color={"rgb(34,197,94)"}></BiUserPlus></button>
                    <button className="cursor"><BiEdit size={23} color={"rgb(41,132,238)"}></BiEdit></button>
                    <button className="cursor"><BiTrashAlt size={23} color={"rgb(244,63,94)"}></BiTrashAlt></button>
                    </td>
                </tr>
    )
}