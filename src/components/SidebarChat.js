import { Avatar } from '@material-ui/core'
import React, {useEffect,useState} from 'react'
import db from '../firbase';
import './SidebarChat.css'
import {Link} from 'react-router-dom'

function createChat(e){
const name = prompt("Add Room");
if(name){
    db.collection('Room').add({
        Name:name
    })
}
}
function SidebarChat({id,name,addNewChat}) {
    const [seed, setseed] = useState('')
    return !addNewChat? (
        <Link to={`/room/${id}`}>
        <div className="SidebarChat">
            <Avatar src="http://avatars.dicebear.com/api/human/10.svg"/>
            <div className='SidebarInfo'>
                <h2>{name}</h2>
                <p>This is the last message</p>
            </div>
            
        </div>
        </Link>
        
    ):(
        <div onClick={createChat} className="SidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
