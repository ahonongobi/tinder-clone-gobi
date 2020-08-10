import React , {useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card' 
import  "./TinderCrads.css"

import database from "./init-firebase"
function TinderCards() {
  const [people,setPeople] = useState([])
  //piece of code witch run on condition
  useEffect(() => {
   
      database.collection("people").onSnapshot(snapshot =>(
        setPeople(snapshot.docs.map(doc =>doc.data()))
      ))
  },[])

    return (
        <div>
          <h2 className="auteur">Tinder clone make by Gobi abyssinie</h2>
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
