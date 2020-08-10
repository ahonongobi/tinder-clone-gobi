import React from 'react'
import Chat from './Chat'
import "./Chats.css"
function Chats() {
    return (
        <div className="chats">
            <Chat 
              name="sarah"
              message="Hey,how are you?"
              timestamp ="35 minutes ago"
              profilPic="https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg"
            /> 
            <Chat 
              name="Ellen"
              message="what's up?"
              timestamp ="55 minutes ago"
              profilPic="https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg"
            /> 
            <Chat 
              name="Gobi "
              message="Yo, i m a clever programmer?"
              timestamp ="65 minutes ago"
              profilPic="https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg"
            /> 
            <Chat 
              name="Lars"
              message="Hey,i like that..?"
              timestamp ="1 day ago"
              profilPic="https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg"
            /> 
        </div>
    )
}

export default Chats
