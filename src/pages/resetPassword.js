import { useNavigate } from 'react-router-dom';
import './allPages.css'
import axios from "axios"

export const ResetPassword=()=>{

    const navigate = useNavigate()

    const validateNumber=()=>{
        let signgup_number=document.getElementById('resetPassword_number');
        let last_char=signgup_number.value[signgup_number.value.length-1];
        if(!(last_char>='0' && last_char<='9')){
            signgup_number.value=signgup_number.value.slice(0, signgup_number.value.length-1);
            document.getElementById('resetPassword_number_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            document.getElementById('resetPassword_home').style.pointerEvents='none'
            setTimeout(()=>{
                document.getElementById('resetPassword_number_label').style.animation=''
                document.getElementById('resetPassword_home').style.pointerEvents=''
            },2000)
        }
        else if(signgup_number.value.length>3){
            let v=signgup_number.value
            document.getElementById('resetPassword_container_three_numberLast').textContent=v.slice(v.length-3, v.length)
        }
    } 

    const validate=(e)=>{
        e.preventDefault();
        let mobileNumber = document.getElementById('resetPassword_number').value

        axios.post('http://localhost:5000/loginServer/getUserDetailsMobile',{
            mobileNumber
        }).then(res=>{localStorage.setItem('isValidUserNumber', (res.data.message))})
        .catch(err=>{localStorage.setItem('isValidUserNumber', err.message)})

        setTimeout(()=>{
            let isValid=(localStorage.getItem('isValidUserNumber'))
            if(isValid==="proceed"){
                document.getElementById('resetPassword_container_three').className='resetPassword_container_three_visible'
                document.getElementById('resetPassword_container_two').className='resetPassword_container_two_hidden'
            }
            else
                alert("The mobile number entered isn't registerd to any account. Try SignUp")
        },100)
    }

    const otpValidation=(e)=>{
        e.preventDefault()
        let v1=document.getElementById('resetPassword_container_three_input1').value
        let v2=document.getElementById('resetPassword_container_three_input2').value
        let v3=document.getElementById('resetPassword_container_three_input3').value
        let v4=document.getElementById('resetPassword_container_three_input4').value

        if(v1==='1' && v2==='2' && v3==='3' && v4==='4'){
            document.getElementById('resetPassword_container_four').className='resetPassword_container_four_visible'
            document.getElementById('resetPassword_container_three').className='resetPassword_container_three_hidden'
        }
        else
            alert('Enter the correct OTP, hint:1234')
    }

    const handleLoginClick=()=>{
        navigate('/login')
    }

    const handleOtpChange=(e)=>{
        if(e.target.value>='0' && e.target.value<='9'){
            e.target.type='text'; 
            setTimeout(()=>{e.target.type='password'}, 1000)
        }
        else{
            e.target.value=''
        }
    }

    function validatePassword(pass){
        let cap=Number(0);
        let sp=Number(0);
        let num=Number(0);
        for(let i=0;i<pass.length;i++){
            if((pass[i]>='A' && pass[i]<='Z') && !cap)
                cap=1;
            if((pass[i]==='@' || pass[i]==='#' || pass[i]==='$' || pass[i]==='_' || pass[i]==='&') && !sp)
                sp=1;
            else if((pass[i]>='0' && pass[i]<='9') && !num)
                num=1;
        }
        return (cap && sp && num)
    }

    const handleChangePasswordValidation=(e)=>{
        e.preventDefault()

        let pass=validatePassword(document.getElementById('resetPassword_changePassword').value)

        if(pass){
            let password = document.getElementById('resetPassword_changePassword').value
            let mobileNumber= document.getElementById('resetPassword_number').value

            axios.post('http://localhost:5000/loginServer/updaePassword',{
                mobileNumber, password
            })
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
            
            navigate('/login')
        }

        if(!pass){
            document.getElementById('resetPassword_change_password_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('resetPassword_change_password_label').style.animation=''
            },2000)
        }
    }

    const handleEyeClick=()=>{
        let t=document.getElementById('resetPassword_changePassword').type
        if(t==='password'){
            document.getElementById('resetPassword_changePassword').type='text'
            document.getElementById('resetPassword_container_four_input_small_eye_cross').style.opacity=0;
        }
        else{
            document.getElementById('resetPassword_changePassword').type='password'
            document.getElementById('resetPassword_container_four_input_small_eye_cross').style.opacity=1;  
        }
    }

    return(
        <div className="resetPassword_container_one" id='resetPassword_home'>
            <img src={require('../images/login.png')} alt='img' className='resetPassword_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='resetPassword_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='resetPassword_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='resetPassword_container_one_image'/>
            <div className='resetPassword_container_two' id='resetPassword_container_two'>
                <h1>Forgot Password 😵</h1>
                <form onSubmit={validate}>
                    <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                        <label className='resetPassword_container_two_label' id='resetPassword_number_label'>Mobile Number</label>
                        <input type="text" className='resetPassword_container_two_input' id='resetPassword_number' onChange={validateNumber} maxLength={10} minLength={10} placeholder='***** Enter your registered  mobile Number here *****' required/>
                    </div>
                    <button className='resetPassword_container_two_button'>Send OTP</button>
                    <button className='resetPassword_container_two_button' onClick={handleLoginClick}>Back to Login</button>
                </form>
            </div>
            <div className='resetPassword_container_three_hidden' id='resetPassword_container_three'>
                <button className='resetPassword_container_three_button_close' type='button' onClick={()=>{navigate('/login')}}>X</button>
                <h2>OTP has been sent to the number ending </h2>
                <h2 style={{marginTop:'-12px', display:'flex', alignItems:'center'}}>with ***** ** <p id='resetPassword_container_three_numberLast'></p> ✅</h2>
                <p>* Might take some while to receive a OTP</p>
                <form onSubmit={otpValidation}>
                    <div style={{display:'flex'}}>
                        <input type='text' className='resetPassword_container_three_input' onChange={handleOtpChange} id='resetPassword_container_three_input1' minLength={1} maxLength={1} required/>
                        <input type='text' className='resetPassword_container_three_input' onChange={handleOtpChange} id='resetPassword_container_three_input2' minLength={1} maxLength={1} required/>
                        <input type='text' className='resetPassword_container_three_input' onChange={handleOtpChange} id='resetPassword_container_three_input3' minLength={1} maxLength={1} required/>
                        <input type='text' className='resetPassword_container_three_input' onChange={handleOtpChange} id='resetPassword_container_three_input4' minLength={1} maxLength={1} required/>
                    </div>
                    <button className='signup_container_three_button' type='submit'>Submit</button>
                 </form>
            </div>

            <div className='resetPassword_container_four_hidden' id='resetPassword_container_four'>
                <h1>Change Password 😵</h1>
                <form onSubmit={handleChangePasswordValidation}>
                    <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                        <label className='resetPassword_container_four_label' id='resetPassword_change_password_label'>Enter New Password</label>
                        <input type="password" className='resetPassword_container_four_input' id='resetPassword_changePassword' placeholder='***** Enter your new Password *****' required/>
                        <div className='resetPassword_container_four_input_small_eye' onClick={handleEyeClick}>👁️<p id='resetPassword_container_four_input_small_eye_cross' style={{position:'relative', top:'-32px', left:'3px', fontSize:"24px", opacity:'1', marginTop:"7px"}}>/</p></div>
                    </div>
                    <button className='resetPassword_container_four_button'>Set Password</button>
                </form>
            </div>
        </div>
    )
}