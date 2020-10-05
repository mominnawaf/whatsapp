import { Avatar ,IconButton} from '@material-ui/core'
import React from 'react'
import {useEffect,useState} from 'react'
import './Chat.css'
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { EmojiEmotions} from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";


function Chat() {
    const sendMessage =(e)=>{
        e.preventDefault();
        setInput('')
    }
    const [seed, setseed] = useState('')
    const [input, setInput] = useState('')
    return (
        <div className="Chat">
            <div className="ChatHeader">
                <Avatar/>
                <div className="ChatInfo">
                    <h3>Chat Name</h3>
                    <p>Last Seen : Coming Soon</p>
                </div>
                <div className="ChatHeaderRight">
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="ChatBody">
                <div className={`ChatMessage ${false && 'ChatMessageReciever'}`}>
                <span className="ChatName">Nawaf</span>
                    Hi There
                    <span className="Time">12:22 am</span>
                </div>
            </div>
            
            <div className="ChatFooter">
                <EmojiEmotions/>
                <form>
                    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter Message"/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default Chat
