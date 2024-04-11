import { useState } from "react"
import { Link } from "react-router-dom"

function Formzin() {

    //use state for user name
    const [userName, setUserName] = useState("")
    //use state for age
    const [userAge, setUserAge] = useState("")
    //gender

    //familiarity with computer science

    //

    return (

        <div className="initial_forms_container">
            <div>
                Enter a username
            </div>
            <input className="vaporwave-input">
            </input>
            <div>
                Enter your age
            </div>
            <input className="vaporwave-input2">
            </input>
            <div style={{ paddingTop: 50 }}>
                Choose the gender you identify with
            </div>
            <div className="checkbox_gender">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label for="vehicle1"> Male</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
                <label for="vehicle2"> Female</label>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
                <label for="vehicle3"> Agendered/Other</label>
            </div>
            <div style={{ paddingTop: 50 }}>
                Rate your familiarity with AI and/or Computer Science
            </div>
            <div className="checkbox_gender">
                <input className="vaporwave-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label for="vehicle1"> Begginner</label>
                <input className="vaporwave-checkbox" type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
                <label for="vehicle2"> Familiar</label>
                <input className="vaporwave-checkbox" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
                <label for="vehicle3"> Fairly advanced</label>
            </div>
            <div style={{ paddingTop: 80 }}>
                <Link to="/play">
                    <button className="vaporwave-button" style={{ fontSize: 70 }}>Go to game</button>
                </Link>
            </div>

        </div>
    )
}

export default Formzin