import React from 'react'
import { } from 'react-bootstrap'
import portfolio from '../../assets/Tabish.jpg'

const About = () => {
    return (
        <div className="about_section bg-[rgb(55,55,55)] flex flex-col gap-5 pl-2 items-center justify-around py-32 sm:px-10 md:px-7 md:flex-row" id="about">
            <div className="about_image">
                <div className='h-[250px] w-[250px] md:w-[350px] md:h-[350px]  rounded-3xl'>
                    <img src={portfolio} alt="Mohd Tabish" className='h-[100%] w-[90%]' />
                </div>
            </div>
            <div className="content_about text-white artifika-regular md:w-[500px] text-xl lg:w-[800px] md:text-2xl">
                <div>
                    <h1>Hey there!👋</h1>
                </div>
                <div className='py-4 pb-5'>
                    <h1>I'm <strong>Mohd Tabish</strong>, a passionate and motivated fresher</h1>
                    <h1>looking to kick-start my career in Web Development.</h1>
                </div>
                <div className='pb-5'>
                    <h1>I have a strong interest in Frontend Development, especially React.js</h1>
                    <h1>and love learning new technologies to improve my skills.</h1>
                </div>
                <div>
                    <h1>Feel free to explore my portfolio and reach out to collaborate or connect!</h1>
                    <h1>Let’s build something amazing together! 🚀</h1>
                </div>
            </div>
        </div>
    )
}

export default About
