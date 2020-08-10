import React , {useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card' 
import  "./TinderCrads.css"
import database from "./init-firebase"
function TinderCards() {
  const [people,setPeople] = useState([
    {name: 'steeve jobs',
    url:'http://www.pngall.com/wp-content/uploads/3/Steve-Jobs-Transparent.png',
  },{
    name:'mark zuckerberg',
    url:'https://thumbs.dreamstime.com/b/april-washington-usa-facebook-ceo-mark-zuckerberg-testifies-front-us-house-committee-energy-commerce-dc-facebook-ceo-114315862.jpg'
  },
  ])
  //piece of code witch run on condition
  

    return (
        <div>
          <h1>Card tinders</h1>
          <div className="tinderCard__cardContainer">
          {
            people.map((person) =>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                >
                  <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                  </div>
                </TinderCard>
            ))
          }
          </div>
        </div>
    )
}

export default TinderCards
