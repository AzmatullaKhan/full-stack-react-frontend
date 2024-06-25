import './allPages.css'
import { Navbar } from './nav'

export const About=()=>{
    return(
        <div className='about_container_one'>
            <Navbar />
            <div className='about_container_two'>
                <div className='about_container_three'>
                    <h1 style={{textAlign:"center", fontVariant:"small-caps", backdropFilter:"blur(12px)", fontWeight:"500", width:'100%', position:'sticky', top:"0"}}>About🤖</h1>


                    <div style={{display:"flex"}} className='about_container_three_left_scroll'>
                        <img src={require('../images/about-mission.png')} alt='img' className='about_container_three_description_images'/>
                        <p className='about_container_three_description'>
                        Our mission is to [briefly state your mission]. We strive to [explain how you aim to achieve your mission], 
                        ensuring that every [product/service] we offer not only meets but exceeds our customers' expectations. We 
                        believe in [mention core values such as sustainability, innovation, customer focus] 
                        <br></br>
                            <h2 style={{textAlign:"right",fontVariant:"small-caps", fontStyle:"italic", textDecoration:"underline",fontWeight:"500"}}>~Our Mission</h2>
                        </p>
                    </div>
                    <hr></hr>
                    <br></br>

                    <div style={{display:"flex"}} className='about_container_three_right_scroll'>
                        <p className='about_container_three_description'>
                            Welcome to [Your Company Name], where passion meets innovation. Founded in [Year], we began 
                            with a simple vision: to create exceptional [products/services] that make a difference in the 
                            lives of our customers. Over the years, we've grown into a dedicated team of professionals who 
                            are committed to excellence, quality, and customer satisfaction.
                            <br></br>
                            <h2 style={{textAlign:"left",fontVariant:"small-caps", fontStyle:"italic", textDecoration:"underline",fontWeight:"500"}}>~Our Story</h2>
                        </p>
                        <img src={require('../images/about-ourstory.png')} alt='img' className='about_container_three_description_images_s2'/>
                    </div>
                    <hr></hr>
                    <br></br>

                    <div style={{display:"flex"}} className='about_container_three_left_scroll'>
                        <img src={require('../images/about-ourcommitment.png')} alt='img' className='about_container_three_description_images_s'/>
                        <p className='about_container_three_description'>
                            At [Your Company Name], customer satisfaction is our top priority. We are committed to providing:
                            <br></br>
                            • Quality: Only the best products/services for our customers.
                            <br></br>
                            • Integrity: Honest and transparent business practices.
                            <br></br>
                            • Support: Exceptional customer service, always ready to assist you.<br></br>
                            <h2 style={{textAlign:"right",fontVariant:"small-caps", fontStyle:"italic", textDecoration:"underline",fontWeight:"500"}}>~Our Commitment to You</h2>
                        </p>
                    </div>
                    <hr></hr>
                    <br></br>

                    <div style={{display:"flex"}} className='about_container_three_right_scroll'>
                        <p className='about_container_three_description'>
                            Our website's excellence is crafted by the talented [Developer's Name], who single-handedly brought our digital 
                            vision to life. With expertise in multiple programming languages, [Developer's Name] created a user-friendly and 
                            visually appealing site. They ensure seamless performance, robust security, and regular updates, continually enhancing 
                            the site's functionality and user experience. [Developer's Name]'s dedication and passion for web development are 
                            the driving forces behind our site's success.
                            <br></br>
                            <h2 style={{textAlign:"left",fontVariant:"small-caps", fontStyle:"italic", textDecoration:"underline",fontWeight:"500"}}>~Developer</h2>
                        </p>
                        <img src={require('../images/about-developer.jpg')} alt='img' className='about_container_three_description_images_s3'/>
                    </div>
                    <hr></hr>
                    <br></br>

                    <div style={{display:"flex"}} className='about_container_three_left_scroll'>
                        <img src={require('../images/about-comments.png')} alt='img' className='about_container_three_description_images_s3'/>
                        <div className='about_container_three_description_comments_div'>
                            <p className='about_container_three_description_comments_p'>
                                Absolutely love the design and ease of use on this site! Everything is so intuitive and user-friendly. Great job!
                                <br></br>
                                <h3 style={{textAlign:"right",fontWeight:"bolder", textDecoration:"underline"}}>- Azmatulla</h3>
                            </p>
                            <p className='about_container_three_description_comments_p'>
                                Fantastic website! The content is well-organized and I found what I needed quickly. Keep up the good work!                                <br></br>
                                <h3 style={{textAlign:"right",fontWeight:"bolder", textDecoration:"underline"}}>- Balaji</h3>
                            </p>
                            <p className='about_container_three_description_comments_p'>
                                Impressed by the site’s performance and responsiveness. It works flawlessly on both my laptop and mobile. Kudos to the developer                                <br></br>
                                <h3 style={{textAlign:"right",fontWeight:"bolder", textDecoration:"underline"}}>- Santhosh</h3>
                            </p>
                        </div>
                    </div>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <h2 style={{textAlign:"center",fontVariant:"small-caps",fontWeight:"500"}}>Thank you. This is all about our website 😌😌...</h2>
                </div>
                <img src={require('../images/about.png')} alt='img' className='about_container_two_image'/>
            </div>
        </div>
    )
}