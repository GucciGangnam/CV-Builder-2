// import styles
import "./InputSection.css"
// import components 
import { Info } from "./Info"

export const InputSection = () => { 
    return ( 
        <div className="InputSection">
            <div className="InfoInput"> 
            <Info/>
            </div>
            <div className="StyleInput"> 
            Style
            </div>
            <div className="DocumentInput"> 
            Document
            </div>
        </div>
    )
}