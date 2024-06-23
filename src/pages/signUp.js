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
    
    return(
        <div className="signup_container_one">
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/login.png')} alt='img' className='signup_container_one_image'/>
            <img src={require('../images/signup.png')} alt="img" className='signup_container_one_image_signup' />
            <div className='signup_container_two'>
                <h1>SignUp 📃</h1>
                <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                    <label className='signup_container_two_label'>Username</label>
                    <input type="text" className='signup_container_two_input' placeholder='***** Enter name you want to register *****'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",width:"100%", margin:"10px 0px", height:"70px"}}>
                    <label className='signup_container_two_label'>Password</label>
                    <input type="text" className='signup_container_two_input_small' placeholder='***** Enter Password *****'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",width:"100%",margin:"10px 0px", height:"70px"}}>
                    <label className='signup_container_two_label'>Number</label>
                    <input type="text" className='signup_container_two_input_small' placeholder='***** Enter your mobile number *****'/>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",width:"100%",margin:"10px 0px", height:"70px"}}>
                    <label className='signup_container_two_label'>Date Of Birth</label>
                    <input type="date" className='signup_container_two_input_small' max={getTodayDate()}/>
                </div>
                <div style={{display:'flex', flexDirection:'column',width:"100%",margin:"10px 0px", height:"70px"}}>
                    <label className='signup_container_two_label'>Gender</label>
                    <div className='signup_container_two_div_radio'>
                        <input type="radio" value="Male" name="gender" /> Male<p style={{marginRight:"12px"}}></p>
                        <input type="radio" value="Female" name="gender" /> Female<p style={{marginRight:"12px"}}></p>
                        <input type="radio" value="Other" name="gender" /> Other<p style={{marginRight:"12px"}}></p>
                    </div>
                </div>
                <div style={{display:"flex",alignSelf:"flex-start"}}>
                    <button className='signup_container_two_button'>SignUp</button>
                    <button className='signup_container_two_button' onClick={handleHomeClick}>Home</button>
                </div>
                <br></br><br></br>
                <span style={{width:"200px", alignSelf:"flex-start"}}>***** Get an account, and enjoy to your heart's content *****</span>
            </div>
        </div>
    )
}