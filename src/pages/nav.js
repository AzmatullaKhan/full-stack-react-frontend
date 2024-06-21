
export const Navbar=()=>{
    return(
        <div className="nav_container_one">
            <div className="nav_container_one_buttonContainer">
                <button className="nav_container_one_button">Home<div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">Login<div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">SignUp<div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">Contact<div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">About<div className="nav_container_one_button_div"></div></button>
            </div>
            {/* <img src={require("./home")} alt='logo' /> */}
        </div>
    )
}