// import styles
import "./NavBar.css"

export const NavBar = () => { 
    return( 
        <div className="NavBar"> 
            <button className="NavButton Selected">
                <img className="NavBarIcon" src="src/assets/Icons/Pen.png"/>
                Content
            </button>
            <button className="NavButton">
                <img className="NavBarIcon" src="src/assets/Icons/Design.png"/>
                Customize
            </button>
        </div>
    )
}