import { Link, useNavigate } from "react-router-dom"
import "./players.css"
import axios from "axios"

const AllPlayers = ({allPuppies, setAllPuppies}) => {
    const navigate = useNavigate()

    const deletePuppy = async(id) => {
        try {
            await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players/${id}`)
            const newPlayers = allPuppies.filter((puppy) => {
                return puppy.id !== id
            })
            setAllPuppies(newPlayers)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <h2>Here are our Players!</h2>
            <h2>Here comes a new <Link to="/players/addNew">Challenger!</Link></h2>
            <div className="playersContainer">
                {
                    allPuppies.map((puppy) => {
                      return (
                        <div key={puppy.id} className="player">
                            <Link to={`/players/${puppy.id}`}>
                            <h3>{puppy.name}</h3>
                            </Link>
                        
                            <img src={puppy.imageUrl ? puppy.imageUrl : null} alt={puppy.name}/>
                            <br/>
                            <button onClick={() => deletePuppy(puppy.id)}>Delete Player</button>
                        </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default AllPlayers