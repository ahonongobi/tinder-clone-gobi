import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'
function ChatScreen() {
    const [input,setInput] = useState('')
    const [messages,setMessages] = useState([
        {
            name: "Ellen",
            Image:"https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg",
            message:"whats up u"
        },
        {
            name: "Ellen",
            Image:"https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg",
            message:"whats up yo"
        },
    
        {
            
            message:"whats up ya"
        },
    ])
   const handleSend = e =>{
       e.preventDefault()
       setMessages([...messages,{message:input}])
       setInput('')

   }
    return (
        <div>
           <p className='chatScreen__timestamp'>You Matched with ellen on 10/08/2020</p>
           {messages.map((message) =>(
            message.name ? (<div className='chatScreen__message'>
            <Avatar  src={message.Image}
            alt={message.name}
            
            />

            <p className="chatScreen__text">{message.message}</p>
        </div>) :(
            <div className='chatScreen__message'>
            <p className="chatScreen__textUser">{message.message}</p>
        </div>
        )
           
           ))}
           
            <form className="chatScreen__input" action="">
                <input onChange={e=>setInput(e.target.value)} value={input} className="chatScreen__inputField" type="text" name="" id="" placeholder="Type a message"/>
                <button onClick={handleSend} className="chatScreen__inputButton" type="submit">submit</button>
            </form>
        
        </div>
        
    )
}

export default ChatScreen
