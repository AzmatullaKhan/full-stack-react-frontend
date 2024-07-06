import { useNavigate } from 'react-router-dom'
import './allPages.css'

export const Navbar=()=>{
    let isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'))

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

    const handleLogoutClick=()=>{
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        localStorage.removeItem('mobileNumber')
        localStorage.removeItem('dateOfBirth')
        localStorage.removeItem('gender')
        localStorage.removeItem('error')
        localStorage.removeItem('isLoggedIn')

        navigate('/login')
    }

    const handleProfileClick=()=>{
        navigate('/profile')
    }


    return(
        <div className="nav_container_one">
            <div className="nav_container_one_buttonContainer">
                <button className="nav_container_one_button" onClick={handleHomelick}>Home    <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                {
                    isLoggedIn?
                    (<button className="nav_container_one_button" onClick={handleLogoutClick}>Logout   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>):
                    (<button className="nav_container_one_button" onClick={handleLoginClick}>Login   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>)
                }
                {
                    isLoggedIn?
                    (<button className="nav_container_one_button" onClick={handlesignUpClick}>SomeBut  <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>):
                    (<button className="nav_container_one_button" onClick={handlesignUpClick}>SignUp  <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>)

                }
                <button className="nav_container_one_button" onClick={handleHelpClick}> Help <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
                <button className="nav_container_one_button" onClick={handleAboutClick}>About   <span className="nav_container_one_button_underline"></span> <div className="nav_container_one_button_div"></div></button>
            </div>
                {
                    isLoggedIn?
                    (<img src={require("../images/bg1.png")} alt='logo' onClick={handleProfileClick} className="nav_container_one_logo"/>):
                    (<img src={require("../images/bg1.png")} alt='logo' className="nav_container_one_logo"/>)
                }
        </div>
    )
}