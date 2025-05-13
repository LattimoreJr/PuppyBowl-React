import { useState, useEffect } from "react"
import { useSearchParams, Link, useNavigate } from "react-router-dom"



const Search = ({allPuppies}) => {
    const [searchResults, setSearchResults] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const nameSearch = searchParams.get("player")

useEffect(() => {
    const results = allPuppies.filter((puppy) => {
        return puppy.name.toLowerCase().includes(nameSearch)
    })

    setSearchResults(results)
},[allPuppies])


const clearSearch = () => {
    setSearchResults([])
    navigate("/players")
}

    return (
        <div>
            <div className="playersContainer">
                {
                    searchResults.map((puppy) => {
                      return (
                        <div key={puppy.id} className="player">
                            <Link to={`/players/${puppy.id}`}>
                            <h3>{puppy.name}</h3>
                            </Link>
                        
                            <img src={puppy.imageUrl ? puppy.imageUrl : null} alt={puppy.name}/>
                            <br/>
                            {/* <button onClick={() => deletePuppy(puppy.id)}>Delete Player</button> */}
                        </div>
                      )
                    })
                }
            </div>
            <div>
                <button onClick={() => clearSearch()}>Clear Search Results</button>
            </div>
        </div>
    )
}

export default Search