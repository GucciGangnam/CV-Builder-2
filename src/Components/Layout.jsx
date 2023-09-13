// import styles 
import "./Layout.css"

// component
export const Layout = () => { 

    return ( 
        <div className="Layout">
            <h2>Layout</h2>
            <div className="LayoutButtonDiv">
                <button id="LayoutButton1" className="LayoutButton">Layout1 </button>
                <button id="LayoutButton2" className="LayoutButton">Layout2 </button>
                <button id="LayoutButton3" className="LayoutButton">Layout3 </button>
            </div>
        </div>
    )
}