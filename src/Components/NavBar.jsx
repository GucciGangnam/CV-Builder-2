// import styles
import "./NavBar.css"

export const NavBar = () => { 
    return( 
        <div className="NavBar"> 
            <button className="NavButton Selected">
                Content
            </button>
            <button className="NavButton">
                Customize
            </button>
        </div>
    )
}