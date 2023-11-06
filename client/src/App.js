import './App.css';
import io from 'socket.io-client';
import { useState } from 'react'
import Chat from './Chat';
const socket = io("http://localhost:3001")
function App() {
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () => {
    if (username !== "" && room !== "")
    {
      console.log("joinRoom")
      socket.emit("join_room", room)
    }
  }
  return (
    <div className="App">
      <h3>
        Join Chat
      </h3>
      <input type = "text" placeholder = "Name..." onChange={(event) => {
        setUserName(event.target.value)
      }} />
       <input type = "text" placeholder = "Room..." onChange={(event) => {
        setRoom(event.target.value)
      }} />
      
      <button class="joinRoom" onClick = {joinRoom}>Join a room</button> 
      <Chat socket = {socket} username = {username} room = {room}/>
 
    </div>
  );
}

export default App;
