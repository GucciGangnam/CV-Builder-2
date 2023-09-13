// import styles 
import "./Fonts.css"

// import Hooks
import { useState } from "react"

// components
export const Fonts = ({font, setFont}) => { 
    // handle font change
    const handleFontChange = (passedFont, event) => { 
        console.log('font changed to ' + passedFont)
        setFont(passedFont)
        setSelectedButton(passedFont)
        

    }
    // selected button 
    const [selectedButton, setSelectedButton] = useState('font1');


    return( 
        <div className="Fonts">
            <h2>Fonts</h2>
            <div className="FontsButtonDiv">
                <button onClick={() => {handleFontChange('Roboto', event)}} id="FontsButton1" 
                className={`FontsButton ${selectedButton === "Roboto" ? "Selected" : ""}`}
                >Font1</button>
                <button onClick={() => {handleFontChange('Lora', event)}} id="FontsButton2" 
                className={`FontsButton ${selectedButton === "Lora" ? "Selected" : ""}`}
                >Font2</button>
                <button onClick={() => {handleFontChange('Courier New', event)}} id="FontsButton3" 
                className={`FontsButton ${selectedButton === "Courier New" ? "Selected" : ""}`}>
                Font3</button>
            </div>
        </div>
    )
}