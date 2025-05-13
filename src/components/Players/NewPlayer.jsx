import axios from "axios";
import { Link } from "react-router-dom";

const NewPlayer = ({allPuppies, setAllPuppies}) => {
        const addPlayer = async (formData) => {
            try {
                const newPuppy = {
                    name: formData.get("name"),
                    breed: formData.get("breed"),
                    image: formData.get("image")
                }
                const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players",newPuppy)
                console.log([data])
                setAllPuppies([...allPuppies, data])

            } catch (error) {
                console.error(error)
            }
            
        }



  return (
    <div>
        <form action={addPlayer}>
            <label>
                Name: <input type="text" name="name"/>
            </label>
            <br/>
            <label>
                Breed: <input type="text" name="breed"/>
            </label>
            <br/>
            <label>
                Image: <input type="text" name="image"/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
        <Link to="/players">Back to all Players</Link>
    </div>
  )
}

export default NewPlayer