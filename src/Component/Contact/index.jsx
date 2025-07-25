import React from 'react'
import { Col, Row } from 'react-bootstrap'
import linkediin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import email from '../../assets/email.svg'

const Contact = () => {
    return (
        <div className=' bg-[rgb(29,29,29)] py-14 ' id='contact'>
            <div className=' bg-[rgb(244,244,237)]  rounded-3xl  mx-4 sm:mx-10 home'>

                <Row className='py-32 pl-6 flex gap-10 artifika-regular sm:pl-20 '>
                    <Col md={12} className='text-xl sm:text-2xl  md:text-4xl'>
                        Ready to enhance your business with a visually engaging and empathetic style?
                    </Col>
                    <Col md={12} className='  flex flex-col justify-center '>
                        <h1 className='text-xl sm:text-2xl  md:text-4xl'> Let's Connect ✨</h1>
                    </Col>
                    <div className='flex justify-between items-start gap-3 flex-col md:flex-row md:items-center'>

                        <div className='email'>
                            <a href="mailto:tabishshaikh270@gmail.com" className='text-sm sm:text-xl '>tabishshaikh270@gmail.com</a>
                        </div>
                        <div className='flex gap-2 justify-end md:pr-20 sm:gap-5'>
                            <div className="linkedin border-2 border-black rounded-full p-3">
                                <a href="https://www.linkedin.com/in/mohd-tabish-5b5110231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <img src={linkediin} alt="LinkedIn" className='hover:scale-125' />
                                </a>
                            </div>
                            <div className="instagram border-2 border-black p-3 rounded-full">
                                <a href="https://www.instagram.com/shk__tabish?igsh=cjR5cmlrd255cnZ3">
                                    <img src={instagram} alt="Instagram" className='hover:scale-125' />
                                </a>
                            </div>
                            <div className="email border-2 border-black p-3 rounded-full">
                                <a href="mailto:tabishshaikh270@gmail.com">
                                    <img src={email} alt="Email" className='hover:scale-125' />
                                </a>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default Contact
