import { useParams, Link } from "react-router-dom"
import "./players.css"


const SinglePlayer = ({allPuppies, setAllPuppies}) => {
    const params = useParams()
    const id = params.id*1
    const puppy = allPuppies.find((puppy) => {
        return puppy.id === id
    })



    return (
        <div className="player">
           { puppy ? ( <div>
           <h3>{puppy.name}</h3>
            <p>{puppy.breed}</p>
            <p>{puppy.status}</p>
            <img src={puppy.imageUrl ? puppy.imageUrl : null} alt={puppy.name}/>
           </div>) : (
                <h3>Loading...</h3>
           )}
          <Link to="/players">Back to all Players</Link>
            
        </div>

    )
}

export default SinglePlayer