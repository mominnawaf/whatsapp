import { Avatar ,IconButton} from '@material-ui/core'
import React from 'react'
import {useEffect,useState} from 'react'
import './Chat.css'
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from 'react-router-dom'
import db from '../firbase';
import {useStateValue} from "../StateProvider"
import firebase from 'firebase';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { Stop } from '@material-ui/icons';
import {ReactMediaRecorder} from "react-media-recorder-cr";
import AudioRecorder from './AudioRecorder'
import VideoRecorder from './VideoRecorder'


function Chat() {
    const sendMessage =(e)=>{
        e.preventDefault();
        db.collection("Room").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL:localStorage.getItem("photoURL")
        });
        setInput('')
    }
    const [emoji,setEmoji] = useState(false);
    const [{user},dispatch]= useStateValue();
    const [input, setInput] = useState('')
    const { roomId } = useParams();
    const [roomName, setRoomName]=useState('');
    const [messages, setMessages] = useState([]);
    const [lastseenPhoto,setLastseen]=useState("");
    const [recording,setRecording]=useState(false);

    const addEmoji = e => {
        let emoji = e.native;
        setInput(input+emoji);
      };
    useEffect(() => {
        if (roomId) {

            db.collection("Room")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomName(snapshot.data().Name);
                });
                 db.collection("Room")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()));
                })
        }
    }, [roomId]);
     useEffect(()=>{
        setLastseen(messages[messages.length-1]?.photoURL)
    },[messages])

    return (
        <div className="Chat">
            <div className="ChatHeader">
                <Avatar/>
                <div className="ChatInfo">
                    <h3>{roomName}</h3>
                    <p>last seen{" "}
                                {messages.length !== 0
                                    ? messages[messages.length - 1].timestamp
                                        ?.toDate()
                                        .toUTCString()
                                    : "Loading"}</p>
                </div>
                <div className="ChatHeaderRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="ChatBody">
                {messages.map((message)=>(
                     <div className={`ChatMessage ${message.name === user.displayName && 'ChatMessageReciever'}`}>
                <span className="ChatName">{message.name}</span>
                    {message.message}
                <span className="Time">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                </div>
                ))}
               
            </div>
            
            <div className="ChatFooter">
                 <IconButton >
                            <InsertEmoticonIcon onClick={()=> setEmoji(!emoji)}/>
                           { (emoji)?(
                                <Picker onSelect={addEmoji} />
                            ):(null)
                            } 
                            </IconButton>
                            <IconButton>
                        <AttachFile/>
                    </IconButton>
                <form>
                    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter Message"/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <AudioRecorder/>
                <VideoRecorder/>
            </div>
            
        </div>
    )
}

export default Chat
