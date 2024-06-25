import './allPages.css'
import { useNavigate } from 'react-router-dom'

export const SignUp=()=>{
    
    let navigate= useNavigate();
    const handleHomeClick=()=>{
        navigate('/')
    }

    function getTodayDate(){
        let d=new Date();
        let today=d.getFullYear()+"-";
        if(d.getMonth()<=8)
            today+="0"+(Number(d.getMonth())+1)+"-"
        else
            today+=(Number(d.getMonth())+1)+"-"
        today+=d.getDate();
        return today;
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

    const validateNumber=()=>{
        let signgup_number=document.getElementById('signgup_number');
        let last_char=signgup_number.value[signgup_number.value.length-1];
        if(!(last_char>='0' && last_char<='9'))
            signgup_number.value=signgup_number.value.slice(0, signgup_number.value.length-1);
    }

    const validateName=(e)=>{
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z')|| (char>='0' && char<='9') || char==='@' || char==='$' || char==='_')){
            console.log(e.target.value=e.target.value.slice(0, e.target.value.length-1))
            document.getElementById('username_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('username_label').style.animation=''
            },1000)
        }
    }

    const validate=(e)=>{
        e.preventDefault();
        let pass=validatePassword(document.getElementById('signup_password').value)

        if(!pass) 
            document.getElementById('password_label').style.animation='error_animation-animation 2s ease-in-out 0s'
            document.getElementById('signup_home').style.pointerEvents='none'
            setTimeout(()=>{
                document.getElementById('password_label').style.animation=''
                document.getElementById('signup_home').style.pointerEvents=''
            },2000)
    }
    
    return(
        <div className="signup_container_one">
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/signup.png')} alt="img" className='signup_container_one_image_signup' />
            <form action='#' onSubmit={validate}>
                <div className='signup_container_two'>
                    <h1>SignUp 📃</h1>
                    <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                        <div><label className='signup_container_two_label' id='username_label'>Username</label><span className='signup_container_two_label_errormessage' id='signup_container_two_label_one'>  *Use only (@,$,_) in your name</span></div>
                        <input type="text" className='signup_container_two_input' placeholder='***** Enter name you want to register *****' required onChange={validateName}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",width:"100%", margin:"10px 0px", height:"70px"}}>
                        <label className='signup_container_two_label' id='password_label'>Password</label>
                        <input type="password" className='signup_container_two_input_small' placeholder='***** Enter Password *****' required id='signup_password' minLength={8}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",width:"100%",margin:"10px 0px", height:"70px"}}>
                        <div><label className='signup_container_two_label' id='number_label'>Number</label><span className='signup_container_two_label_errormessage'> *Only Numbers(0-9)</span></div>
                        <input type="text" className='signup_container_two_input_small' placeholder='***** Enter your mobile number *****' required onChange={validateNumber} id='signgup_number' maxLength={10} minLength={10}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",width:"100%",margin:"10px 0px", height:"70px"}}>
                        <label className='signup_container_two_label'>Date Of Birth</label>
                        <input type="date" className='signup_container_two_input_small' max={getTodayDate()} required/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column',width:"100%",margin:"10px 0px", height:"70px"}}>
                        <div><label className='signup_container_two_label' id='gender_label'>Gender</label><span className='signup_container_two_label_errormessage' id='signup_container_two_label_two'>  *Must select gender</span></div>
                        <div className='signup_container_two_div_radio'>
                            <input type="radio" value="Male" name="gender" id='signup_genderMale' defaultChecked/> Male<p style={{marginRight:"12px"}} ></p>
                            <input type="radio" value="Female" name="gender" id='signup_genderFemale' /> Female<p style={{marginRight:"12px"}} ></p>
                            <input type="radio" value="Other" name="gender" id='signup_genderOther' /> Other<p style={{marginRight:"12px"}} ></p>
                        </div>
                    </div>
                    <div style={{display:"flex",alignSelf:"flex-start"}}>
                        <button className='signup_container_two_button' type='submit'>SignUp</button>
                        <button className='signup_container_two_button' type='button' id='signup_home' onClick={handleHomeClick}>Home</button>
                    </div>
                    <br></br><br></br>
                    <span style={{width:"200px", alignSelf:"flex-start"}}>***** Get an account, and enjoy to your heart's content *****</span>
                </div>
            </form>
        </div>
    )
}