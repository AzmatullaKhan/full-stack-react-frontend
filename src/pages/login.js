import './allPages.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const Login=()=>{

    let navigate= useNavigate();

    const handleHomeClick=()=>{
        navigate('/');
    }
    const handleReesetClick=()=>{
        navigate('/resetPassword')
    }

    const validate=(e)=>{
        e.preventDefault()
        let username=document.getElementById('login_username').value
        axios.post('http://localhost:5000/loginServer',{
            username
        })
        .then(res=>{
            localStorage.setItem('username',res.data.message.username)
            localStorage.setItem('password',res.data.message.password)
            localStorage.setItem('mobileNumber',res.data.message.mobileNumber)
            localStorage.setItem('dateOfBirth',res.data.message.dateOfBirth)
            localStorage.setItem('gender',res.data.message.gender)
            localStorage.setItem('error', 'Proceed')
        })
        .catch(err=>{
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            localStorage.removeItem('mobileNumber')
            localStorage.removeItem('dateOfBirth')
            localStorage.removeItem('gender')
            localStorage.setItem('error', err.message)
        })

        let err;
        setTimeout(()=>{
            err=(localStorage.getItem('error'))
            
            if(err==="Proceed"){
                let password = document.getElementById('login_password').value
                if(password === localStorage.getItem('password')){
                    localStorage.setItem('isLoggedIn', true)
                    navigate('/')
                }
                else   
                    alert('Incorrect Password')
            }else{
                alert("A user with provided username doesn't exist")
            }
       },100)

    }

    const validateName=(e)=>{
        let login_username= document.getElementById('login_username')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z')|| (char>='0' && char<='9') || char==='@' || char==='$' || char==='_')){
            login_username.value=login_username.value.slice(0, login_username.value.length-1);
            document.getElementById('login_container_two_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('login_container_two_label').style.animation=''
            },1000)
        }
    }

    const handleEyeClick=()=>{
        let t=document.getElementById('login_password').type
        if(t==='password'){
            document.getElementById('login_password').type='text'
            document.getElementById('login_container_two_input_small_eye_cross').style.opacity=0;
        }
        else{
            document.getElementById('login_password').type='password'
            document.getElementById('login_container_two_input_small_eye_cross').style.opacity=1;  
        }
    }

    return (
        <div className="login_container_one">
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='login_container_one_image'/>
            <form onSubmit={validate}>
                <div className='login_container_two'>
                    <h1>Login 🔐</h1>
                    <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                        <label className='login_container_two_label' id='login_container_two_label'>Username</label>
                        <input type="text" className='login_container_two_input' id='login_username' placeholder='***** Enter your registered username *****' required onChange={validateName}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', margin:"10px 0px 30px 0px"}}>
                        <label className='login_container_two_label'>Password</label>
                        <input type="password" className='login_container_two_input' id='login_password' placeholder='***** Enter the respective password *****' required minLength={8}/>
                        <div className='login_container_two_input_small_eye' onClick={handleEyeClick}>👁️<p id='login_container_two_input_small_eye_cross' style={{position:'relative', top:'-32px', left:'3px', fontSize:"24px", opacity:'1', marginTop:"7px"}}>/</p></div>
                    </div>
                    <button className='login_container_two_button_href' onClick={handleReesetClick} type='button'>forgot password? reset here</button>
                    <button className='login_container_two_button' type='submit'>Login</button>
                    <img src={require('../images/login-page.png')} alt='img' className='login_container_two_image'/>
                    <button className='login_container_two_button' onClick={handleHomeClick} type='button'>Home</button>
                    <img src={require('../images/login-page-side.png')} className='login_container_three_image' alt='img'/>
                </div>
            </form>
        </div>
    )
}