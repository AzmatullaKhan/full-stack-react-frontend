import { useNavigate } from 'react-router-dom'
import './allPages.css'

export const Navbar=()=>{

    let navigate=useNavigate();

    const handleLoginClick=()=>{
        navigate('/login')
    }

    const handlesignUpClick=()=>{
        navigate('/signUp')
    }

    const handleHelpClick=()=>{
        navigate('/help')
    }

    const handleHomelick=()=>{
        navigate('/')
    }

    const handleAboutClick=()=>{
        navigate('/about')
    }

    return(
        <div className="nav_container_one">
            <div className="nav_container_one_buttonContainer">
                <button className="nav_container_one_button" onClick={handleHomelick}>Home    <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button" onClick={handleLoginClick}>Login   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button" onClick={handlesignUpClick}>SignUp  <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button" onClick={handleHelpClick}> Help <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button" onClick={handleAboutClick}>About   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
            </div>
            {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> */}
                {/* <input type="text" className="nav_container_one_input" placeholder="Want to know? Search here...🔎🔎"></input> */}
                <img src={require("../images/bg1.png")} alt='logo' className="nav_container_one_logo"/>
            {/* </div> */}
        </div>
    )
}