import './allPages.css'
import { useNavigate } from 'react-router-dom'

export const Login=()=>{

    let navigate= useNavigate();

    const handleHomeClick=()=>{
        navigate('/');
    }
    const handleReesetClick=()=>{
        navigate('/resetPassword')
    }

    return (
        <div className="login_container_one">
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <div className='login_container_two'>
                <h1>Login 🔐</h1>
                <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                    <label className='login_container_two_label'>Username</label>
                    <input type="text" className='login_container_two_input' placeholder='***** Enter your registered username *****'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', margin:"10px 0px 30px 0px"}}>
                    <label className='login_container_two_label'>Password</label>
                    <input type="password" className='login_container_two_input' placeholder='***** Enter the respective password *****'/>
                </div>
                <button className='login_container_two_button_href' onClick={handleReesetClick}>forgot password? reset here</button>
                <button className='login_container_two_button'>Login</button>
                <img src={require('../images/login-page.png')} alt='img' className='login_container_two_image'/>
                <button className='login_container_two_button' onClick={handleHomeClick}>Home</button>
                <img src={require('../images/login-page-side.png')} className='login_container_three_image' alt='img'/>
            </div>
        </div>
    )
}