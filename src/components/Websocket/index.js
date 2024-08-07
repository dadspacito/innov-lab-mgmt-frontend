import { useEffect } from "react"; 
import { userStore } from "../../Services/Store/userStore"; 


function WebSocketClient(){ 
const addNotification = userStore((state) => state.addNotification); 
const WS_URL = "ws://localhost:8080/my_activities_backend/websocket/notifier/"; 
useEffect(() => { 
    const websocket = new WebSocket(WS_URL+"mytoken"); 
    websocket.onopen = () => { 
    console.log("The websocket connection is open"); 
    } 


    websocket.onmessage = (event) => { 
    const notification  = event.data; 
    console.log("a new notification is received!") 
    addNotification(notification); 
    } 
    },[] 
    ); 
} 
export default WebSocketClient; 
// const notifications = userStore((state) => state.notifications); 
// WebSocketClient(); 
