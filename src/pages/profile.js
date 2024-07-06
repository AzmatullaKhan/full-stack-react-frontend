import './allPages.css'
import { Navbar } from './nav'

export const Profile=()=>{
    let username, mobileNumber, dateOfBirth, gender, password;
    username=localStorage.getItem('username')
    mobileNumber=localStorage.getItem('mobileNumber')
    dateOfBirth=localStorage.getItem('dateOfBirth')
    gender=localStorage.getItem('gender')
    password=localStorage.getItem('password')

    let isMale = (gender==='Male')?true:false;

    console.log(isMale, gender)
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

return(
    <div className="profile_container_one">
        <Navbar />
        <div className='profile_container_two'>
            {
                isMale?
                (<img className='profile_container_two_image' src={require('../images/profileMale.png')} alt='gender'/>):
                (<img className='profile_container_two_image' src={require('../images/profileFemale.png')} alt='gender'/>)
            }
            <div className="profile_container_three">
                <label className='profile_container_three_label'>Username</label>
                <input className='profile_container_three_input' type='text' readOnly value={username}/><br></br>

                <label className='profile_container_three_label'>Password</label>
                <input className='profile_container_three_input' type='password' readOnly value={password} id="profile_password"/>
                <div className='profile_container_thre_input_eye' onClick={handleEyeClick}>👁️<p id='profile_container_three_input_eye_cross' style={{position:'relative', top:'-32px', left:'3px', fontSize:"24px", opacity:'1', marginTop:"7px"}}>/</p></div>

                <label className='profile_container_three_label'>Mobile Number</label>
                <input className='profile_container_three_input' type='text' readOnly value={mobileNumber}/><br></br>

                <label className='profile_container_three_label'>Date Of Borth</label>
                <input className='profile_container_three_input' type='text' readOnly value={dateOfBirth}/><br></br>

                <label className='profile_container_three_label'>Gender</label>
                <input className='profile_container_three_input' type='text' readOnly value={gender}/><br></br>
            </div>
        </div>
    </div>
    )
}