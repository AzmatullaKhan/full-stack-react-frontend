import { useNavigate } from 'react-router-dom'

export const Navbar=()=>{

    let navigate=useNavigate();

    const handleLoginClick=()=>{
        navigate('/login')
    }

    return(
        <div className="nav_container_one">
            <div className="nav_container_one_buttonContainer">
                <button className="nav_container_one_button">Home    <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button" onClick={handleLoginClick}>Login   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">SignUp  <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">Contact <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button">About   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
            </div>
            {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> */}
                {/* <input type="text" className="nav_container_one_input" placeholder="Want to know? Search here...🔎🔎"></input> */}
                <img src={require("../images/bg1.png")} alt='logo' className="nav_container_one_logo"/>
            {/* </div> */}
        </div>
    )
}