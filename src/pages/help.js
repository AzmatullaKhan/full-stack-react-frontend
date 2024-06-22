import './allPages.css'
import { Navbar } from './nav'
export const Help=()=>{
    return(
        <div className='help_container_one'>
            <Navbar />
            <div className='help_container_two'>
                <img src={require('../images/help.png')} alt='img'/>
                <div className='help_container_three'>
                    <p className='help_container_messageReceived'>How may I help you</p>
                    <p className='help_container_messageSent'>I am not able acces some features.</p>
                    <div className='help_container_questions_div'>
                        <p className='help_container_questions_div_p'>
                            <span className='help_container_questions_div_span'>1. What is this XYZ bug? </span> 
                            <span className='help_container_questions_div_span'>2. Need to Update my details but can't able to? </span>
                            <span className='help_container_questions_div_span'>3. How should I check my things? </span>
                            <span className='help_container_questions_div_span'>4. Is there any refund feture in here? </span>
                            <span className='help_container_questions_div_span'>5. How good is your service? </span>
                            <span className='help_container_questions_div_span'>6. Is this process trust worthy? </span>
                            <span className='help_container_questions_div_span'>7. How should I complete my SignIn. </span>
                            <span className='help_container_questions_div_span'>8. Who developed this? </span>
                            <span className='help_container_questions_div_span'>9. Can I do this? </span>
                            <span className='help_container_questions_div_span'>10. Specify the process to complete a booking in this website. </span>
                        </p>
                     </div>
                </div>
            </div>
        </div>
    )
}

