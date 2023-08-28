// import styles 
import "./Info.css"



export const Info = () => {

    const handleExpander = (arg) => { 
        const selectedInput = document.querySelector("." + arg);
        if (selectedInput) {
            selectedInput.style.display = (selectedInput.style.display === "none") ? "block" : "none";
        }
    }


    return (
        <div className="Info">
            <div className="PhotoInputHeader">
                <button className="InfoButton" onClick={() => handleExpander("PhotoInput")}>Photo</button>
                <div className="PhotoInput">Upload a photo</div>
            </div>
            <div className="BasicInfoInputHeader">
                <button className="InfoButton" onClick={() => handleExpander("BasicInfoInput")}>Basic Info</button>
                <div className="BasicInfoInput">
                    This
                    <p></p>
                    is
                    <p></p>
                    basic
                    <p></p>
                </div>
            </div>
            <div className="BioInputHeader">
                <button className="InfoButton" onClick={() => handleExpander("BioInput")}>BIo</button>
                <p></p>
                <div className="BioInput">
                    This
                    <p></p>
                    is
                    <p></p>
                    bIo
                    <p></p>
                </div>
            </div>
        </div>
    )
}