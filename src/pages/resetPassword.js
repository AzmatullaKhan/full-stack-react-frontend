import { useNavigate } from 'react-router-dom';
import './allPages.css'

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

        document.getElementById('resetPassword_container_three').className='resetPassword_container_three_visible'
        document.getElementById('resetPassword_container_two').className='resetPassword_container_two_hidden'
    }

    const otpValidation=(e)=>{
        e.preventDefault()
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
                </form>
            </div>
            <div className='resetPassword_container_three_hidden' id='resetPassword_container_three'>
                <button className='resetPassword_container_three_button_close' type='button' onClick={()=>{navigate('/login')}}>X</button>
                <h2>OTP has been sent to the number ending </h2>
                <h2 style={{marginTop:'-12px', display:'flex', alignItems:'center'}}>with ***** ** <p id='resetPassword_container_three_numberLast'></p> ✅</h2>
                <p>* Might take some while to receive a OTP</p>
                <form onSubmit={otpValidation}>
                    <div style={{display:'flex'}}>
                        <input type='text' className='resetPassword_container_three_input' onChange={(e)=>{e.target.type='text'; setTimeout(()=>{e.target.type='password'}, 1000)}} minLength={1} maxLength={1} required/>
                        <input type='text' className='resetPassword_container_three_input' onChange={(e)=>{e.target.type='text'; setTimeout(()=>{e.target.type='password'}, 1000)}} minLength={1} maxLength={1} required/>
                        <input type='text' className='resetPassword_container_three_input' onChange={(e)=>{e.target.type='text'; setTimeout(()=>{e.target.type='password'}, 1000)}} minLength={1} maxLength={1} required/>
                       <input type='text' className='resetPassword_container_three_input' onChange={(e)=>{e.target.type='text'; setTimeout(()=>{e.target.type='password'}, 1000)}} minLength={1} maxLength={1} required/>
                    </div>
                    <button className='signup_container_three_button' type='submit'>Submit</button>
                 </form>
            </div>
        </div>
    )
}