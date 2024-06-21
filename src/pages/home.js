import './allPages.css'
import { Navbar } from './nav'

export const Home=()=>{
    return(
        <div className="main_container_one">
            <Navbar />
            <div className='main_container_two'></div>
        </div>
    )
}