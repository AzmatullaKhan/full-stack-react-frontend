import './allPages.css'
import { Navbar } from './nav'
import axios from "axios"

export const Profile=()=>{
    let username, mobileNumber, dateOfBirth, gender, password;
    username=localStorage.getItem('username')
    mobileNumber=localStorage.getItem('mobileNumber')
    dateOfBirth=localStorage.getItem('dateOfBirth')
    gender=localStorage.getItem('gender')
    password=localStorage.getItem('password')

    let isMale = (gender==='Male')?true:false;

    const handleEyeClick=()=>{
        let t=document.getElementById('profile_password').type
    if(t==='password'){
        document.getElementById('profile_password').type='text'
        document.getElementById('profile_container_three_input_eye_cross').style.opacity=0;
    }
    else{
        document.getElementById('profile_password').type='password'
        document.getElementById('profile_container_three_input_eye_cross').style.opacity=1;  
    }
    }

    const handlePasswordChange = (e)=>{
        if(e.target.value===password)
            document.getElementById('profile_container_three_button').className='profile_container_three_button_hidden'
        else{
            document.getElementById('profile_container_three_button').className='profile_container_three_button'
        }
    }

    function validatePassword(pass){
        let cap=Number(0);
        let sp=Number(0);
        let num=Number(0);
        let len=pass.length>=8
        for(let i=0;i<pass.length;i++){
            if((pass[i]>='A' && pass[i]<='Z') && !cap)
                cap=1;
            if((pass[i]==='@' || pass[i]==='#' || pass[i]==='$' || pass[i]==='_' || pass[i]==='&') && !sp)
                sp=1;
            else if((pass[i]>='0' && pass[i]<='9') && !num)
                num=1;
        }
        return (cap && sp && num && len)
    }

    const handleSaveChanges=(e)=>{
        e.preventDefault()
        let pass=validatePassword(document.getElementById('profile_password').value)

        if(!pass){
            document.getElementById('password_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('password_label').style.animation=''
            },2000)
        }

        if(pass){
            password=document.getElementById('profile_password').value
            let mobileNumber= document.getElementById('profile_mobileNumber').value

            // console.log(mobileNumber,pass)
            axios.post('http://localhost:5000/loginServer/updaePassword',{
                mobileNumber, password
            })
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})

            document.getElementById('profile_container_three_button').className='profile_container_three_button_hidden'

            setTimeout(()=>{
                localStorage.setItem('password', password)
                console.log(localStorage.getItem('password'))
            },100)
        }
    }

return(
    <div className="profile_container_one">
        <Navbar />
        <div className='profile_container_two'>
            {
                isMale?
                (<img className='profile_container_two_image' src={require('../images/profileMale.png')} alt='gender'/>):
                (<img className='profile_container_two_image' src={require('../images/profileFemale.png')} alt='gender'/>)
            }
            <form>
                <div className="profile_container_three">
                    <label className='profile_container_three_label'>Username</label>
                    <input className='profile_container_three_input' type='text' readOnly value={username}/><br></br>

                    <label className='profile_container_three_label' id='password_label'>Password</label>
                    <input className='profile_container_three_input' type='password' defaultValue={password} id="profile_password" onChange={handlePasswordChange} minLength={8}/>
                    <div className='profile_container_thre_input_eye' onClick={handleEyeClick}>👁️<p id='profile_container_three_input_eye_cross' style={{position:'relative', top:'-32px', left:'3px', fontSize:"24px", opacity:'1', marginTop:"7px"}}>/</p></div>

                    <label className='profile_container_three_label'>Mobile Number</label>
                    <input className='profile_container_three_input' type='text' readOnly value={mobileNumber} id='profile_mobileNumber'/><br></br>

                    <label className='profile_container_three_label'>Date Of Borth</label>
                    <input className='profile_container_three_input' type='text' readOnly value={dateOfBirth}/><br></br>

                    <label className='profile_container_three_label'>Gender</label>
                    <input className='profile_container_three_input' type='text' readOnly value={gender}/><br></br>

                    <button className='profile_container_three_button_hidden' id='profile_container_three_button' onClick={handleSaveChanges} type='submit'>Save changes</button>
                </div>
            </form>
        </div>
    </div>
    )
}