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
    //  const [messages,setMessages]=useState("");
    //     useEffect(()=>{
    //     if(id){
    //     db.collection('Room').doc(id).collection('messages').orderBy
    //     ('timestamp','desc').onSnapshot(snapshot =>(
    //         setMessages(snapshot.docs.map((doc) => doc.data()))
    //     ))
    //     }
    // },[])
    return !addNewChat? (
        <Link to={`/room/${id}`}>
        <div className="SidebarChat">
            <Avatar />
            <div className='SidebarInfo'>
                <h2>{name}</h2>
                {/*<p>{messages[0]?.messages}</p>*/}
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
