import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from './SidebarChat'
import db from '../firbase'
import {useStateValue} from "../StateProvider"

export default function Sidebar() {
    const [Rooms, setRooms] = useState([])
    const [{user},dispatch]= useStateValue();
    useEffect(()=>{
        //  console.log(db)
          const unsub=db.collection('Room').onSnapshot(snapshot=>{
              setRooms(snapshot.docs.map(doc=>(
                  {
                      id:doc.id,
                      data:doc.data(),
                  }
              ))
              )
          });
          return()=>{
              unsub()
          }
      },[])
    return (
        
        <div className='SideBar'>
            <div className='SidebarHeader'>
                <Avatar src={user?.photoURL}/>
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
                {Rooms.map(room=>(
                        <SidebarChat key={room.id} id={room.id} name={room.data.Name} />
                ))}
            </div>
            
        </div>
    )
}
