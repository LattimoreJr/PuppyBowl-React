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
                            <Link to={`/players/${puppy.id}`}>
                            <h3>{puppy.name}</h3>
                            </Link>
                        
                            <img src={puppy.imageUrl}/>
                            <br/>
                            <button>Delete Player</button>
                        </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default AllPlayers