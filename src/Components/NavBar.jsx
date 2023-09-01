// import styles
import "./NavBar.css"

// importy Hooks 
import { useState } from "react"

export const NavBar = () => {

    const [selectedButton, setSelectedButton] = useState("content");

    // button handlers 
    const contentScreen = document.querySelector(".ContentScreen")
    const customizeScreen = document.querySelector(".CustomizeScreen")
    const handleContentClicked = () => {
        setSelectedButton("content");
        contentScreen.style.display = "block"
        customizeScreen.style.display = "none"
    }
    const handleCustomizeClicked = () => {
        setSelectedButton("customize");
        contentScreen.style.display = "none"
        customizeScreen.style.display = "block"
    };

    return (
        <div className="NavBar">
            <button
                className={`NavButton ${selectedButton === "content" ? "Selected" : ""}`}
                onClick={handleContentClicked}>
                <img className="NavBarIcon" src="src/assets/Icons/Pen.png" />
                Content
            </button>
            <button 
            className={`NavButton ${selectedButton === "customize" ? "Selected" : ""}`}
            onClick={handleCustomizeClicked}>
                <img className="NavBarIcon" src="src/assets/Icons/Design.png" />
                Customize
            </button>
        </div>
    )
}