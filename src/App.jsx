import AllPlayers from "./components/Players/AllPlayers"
import { useState, useEffect } from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import SinglePlayer from "./components/Players/SinglePlayer"
import NewPlayer from "./components/Players/NewPlayer"
import Search from "./components/Players/Search"

function App() {
  const [allPuppies, setAllPuppies] = useState([])

  useEffect(() => {
      const fetchPuppies = async() => {
        try {
          const {data} = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players")
          console.log(data.data.players)

          setAllPuppies(data.data.players)
          
          
        } catch (error) {
          console.error(error)
        }
      }
      fetchPuppies()
  },[])


  return (
    <div>
      <h1>Welcome to the Puppy Bowl!</h1>


    <Routes>
      <Route path="/" element={<AllPlayers allPuppies={allPuppies} setAllPuppies={setAllPuppies}/>}/>
      <Route path="/players" element={<AllPlayers allPuppies={allPuppies} setAllPuppies={setAllPuppies}/>}/>
      <Route path="/players/:id" element={<SinglePlayer allPuppies={allPuppies} setAllPuppies={setAllPuppies}/>}/>
      <Route path="/players/addNew" element={<NewPlayer allPuppies={allPuppies} setAllPuppies={setAllPuppies}/>}/>
      <Route path="/players/search/?" element={<Search allPuppies={allPuppies}/>}/>
    </Routes>


    </div>
  )
}

export default App
