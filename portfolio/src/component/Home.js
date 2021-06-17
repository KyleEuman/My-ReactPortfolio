import  React from 'react';
import image from '../Assets/images/bluebrimage.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="blue backround" className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-white font-bold leading-none lg: leading-snug '>Hello I am Kyle Euman</h1>
        </section>
        </main>
    )
    
    
}