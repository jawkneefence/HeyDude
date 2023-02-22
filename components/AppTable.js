import {BiUserPlus, BiEdit, BiTrashAlt} from 'react-icons/bi'
import EditAppForm from './EditAppForm'
import { useState } from 'react'
import {getSessions, getSession, addSession, updateSession, deleteSession} from "../lib/helper"
import {useQuery} from "react-query"
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction} from '../redux/reducer'

export default function appTable() {  
    
    //Set State
    const state = useSelector((state) => state)

    //Fetch Data
    const {isLoading, isError, data, error} = useQuery('sessions', getSessions)

    if(isLoading) return <div>Loading...(Refresh if stuck)</div>;
    if(isError) return <div>Error: {error}</div>;



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
                {
                    data.map((obj, i) => <Tr {...obj} key={i}/>)
                }
            </tbody>
        </table>
    )
}

function Tr({appDate, notifyOn, game, _id}) {
    const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };

    const toggleForm = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()

    const onUpdate = () => {
        dispatch(toggleChangeAction())
        dispatch(updateAction(_id))
        console.log("Form: ");
        console.log(toggleForm);
        console.log("Selected ID: ");
        console.log(_id);
        
    }

    return (
        <tr className = "bg-gray-100 text-center font-semibold items-center">
                    <td className="py-3">
                        <span>{<Moment calendar = {calendarStrings} format = "MM/DD, hh:mm a">{appDate}</Moment> || "12-31-2069 @ 9:00PM"}</span>
                    </td>
                    <td className="py-3">
                        <span>{<Moment calendar = {calendarStrings} format = "MM/DD, hh:mm a">{notifyOn}</Moment> || "06-24-2000"}</span>
                    </td>
                    <td className="py-3">
                        <span>{game || "Valheim"}</span>
                    </td>
                    <td className="py-3">
                        <span>3</span>
                    </td>
                    <td className = "flex justify-around gap-1 mt-3">
                    <button className="cursor"><BiUserPlus size={23} color={"rgb(34,197,94)"}></BiUserPlus></button>
                    <button className="cursor" onClick = {onUpdate}><BiEdit size={23} color={"rgb(41,132,238)"}></BiEdit></button>
                    <button className="cursor"><BiTrashAlt size={23} color={"rgb(244,63,94)"}></BiTrashAlt></button>
                    </td>
                </tr>
    )
}