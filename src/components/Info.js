import React from 'react';
import FaceImg from '../images/Face.jpg'

export default function Interests() {
    return (
        <div className='info--container'>
            <img className='info--face' src={FaceImg} alt="This is my face" />
            <h2 className='info--name'>Siyuan Zou</h2>
            <h4 className='info--role'>Fiserv Developer</h4>
            <p className='info--website'>
                <a href='/'>siyuanzou.website</a>
            </p>
            <div className='info--btn--container'>
                <button className='info--emailbtn'><i class="bi bi-envelope-fill"></i> Email</button>
                <button className='info--linkedinbtn'><i class="bi bi-linkedin"></i> LinkedIn</button>
            </div>
        </div>
    )
}