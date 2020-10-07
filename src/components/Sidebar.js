import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from './SidebarChat'
import db from '../firbase'

export default function Sidebar() {
    const [Room, setRoom] = useState('')
    useEffect(()=>{
        db.collection('Room').onSnapshot(snapshot=>{
            setRoom(snapshot.docs.map((doc)=>({
                id:doc.id,
                data: doc.data()
            }))
            )
        })
    })
    return (
        <div className='SideBar'>
            <div className='SidebarHeader'>
                <Avatar/>
                <div className='SidebarHeaderRight'>
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='SidebarSearch'>
                <div className="SidebarSearchContainer">
                <SearchOutlined/>
                <input placeholder="Search a Contact or start a new Chat"/>
                </div>
            </div>
            <div className='SidebarChats'>

                <SidebarChat addNewChat/>
                {
                    Room.map(room =>(
                        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                    ))
                }
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
            
        </div>
    )
}
