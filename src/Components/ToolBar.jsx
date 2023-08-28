
import "./ToolBar.css";

export const ToolBar = () => {
    const handleToolBarButton = (event) => {
        const clickedBtn = event.currentTarget;
        const toolBarBtns = document.querySelectorAll(".ToolBarButton");
        toolBarBtns.forEach((btn) => {
            btn.classList.remove("Selected");
        });
        clickedBtn.classList.toggle("Selected");
        const clickedBtnDestination = event.currentTarget.id;
        const info = document.querySelector(".InfoInput")
        const style = document.querySelector(".StyleInput")
        const docu = document.querySelector(".DocumentInput")

        info.style.display = 'none'
        style.style.display = 'none'
        docu.style.display = 'none'

        const finalDestination = document.querySelector("."+ clickedBtnDestination)
        finalDestination.style.display = 'block';
    };

    return (
        <div className="ToolBar">
            <button
                className="ToolBarButton"
                onClick={handleToolBarButton}
                id="InfoInput"
            >
                <img className="ToolBarIcon" src="src/assets/Icons/Info.png" alt="Info" />
            </button>
            <button
                className="ToolBarButton"
                onClick={handleToolBarButton}
                id="StyleInput"
            >
                <img className="ToolBarIcon" src="src/assets/Icons/Paint Brush.png" alt="Paint Brush" />
            </button>
            <button
                className="ToolBarButton"
                onClick={handleToolBarButton}
                id="DocumentInput"
            >
                <img className="ToolBarIcon" src="src/assets/Icons/Document.png" alt="Document" />
            </button>
        </div>
    );
};
