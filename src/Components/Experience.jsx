// import Styles
import "./Experience.css"

//import Hooks
import { useState } from "react"

// component 
export const Experience = () => { 
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick = () => { 
        setIsDropDownOpen(!isDropDownOpen);
    }

    return( 
        <div className="Experience"> 
            <button className="DropDownBtn"
                onClick={handleDropDownClick}>
                <h2>Experience</h2>
                <img className="DDIcon"
                src="src/assets/Icons/DropDown.png"
                style={{transform: isDropDownOpen ? 'rotate(0deg)' : 'rotate(180deg)'}}
                />
            </button>

        <form>
            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Company</p>
            <input
            type="text"
            placeholder="Enter a company name"
            style={{display: isDropDownOpen ? 'block' : 'none'}}
            />

            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Duration</p>
            <input
            type="text"
            placeholder="Enter the term length"
            style={{display: isDropDownOpen ? 'block' : 'none'}}
            />

            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Position</p>
            <input
            type="text"
            placeholder="Enter your position"
            style={{display: isDropDownOpen ? 'block' : 'none'}}
            />

            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Description</p>
            <input
            type="text"
            placeholder="Enter a description of your role"
            style={{display: isDropDownOpen ? 'block' : 'none'}}
            />
        </form>

            <button style={{display: isDropDownOpen ? 'block' : 'none'}}>Save</button>
        </div>
    )
}