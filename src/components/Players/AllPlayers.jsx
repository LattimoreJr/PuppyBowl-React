import { Link } from "react-router-dom"
import "./players.css"

const AllPlayers = ({allPuppies, setAllPuppies}) => {
    return (
        <div>
            <h2>Here are our Players!</h2>
            <div className="playersContainer">
                {
                    allPuppies.map((puppy) => {
                      return (
                        <div key={puppy.id} className="player">
                            <h3>{puppy.name}</h3>
                            <p>Breed: {puppy.breed}</p>
                            <img src={puppy.imageUrl}/>
                        </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default AllPlayers