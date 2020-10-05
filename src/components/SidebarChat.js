import { Avatar } from '@material-ui/core'
import React, {useEffect,useState} from 'react'
import './SidebarChat.css'

function createChat(){

}
function SidebarChat({addNewChat}) {
    const [seed, setseed] = useState('')
    return !addNewChat? (
        <div className="SidebarChat">
            <Avatar src="http://avatars.dicebear.com/api/human/10.svg"/>
            <div className='SidebarInfo'>
                <h2>Name</h2>
                <p>This is the last message</p>
            </div>
            
        </div>
    ):(
        <div onClick={createChat} className="SidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat