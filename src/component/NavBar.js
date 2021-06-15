import  React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink to='/' exact className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold tracking-widest'>
                        Home
                    </NavLink>
                    <NavLink to='/post'className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold tracking-widest'>
                        Blog Posts
                    </NavLink>
                    <NavLink to='/Projects'className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold tracking-widest'>
                        Projects
                    </NavLink>
                    <NavLink to='/About'className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold tracking-widest'>
                        About Me!
                    </NavLink>
                    
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url="https://www.linkedin.com/in/kyle-euman-b51859203/" classname='mr-4' target='_blank' fgcolor='#fff' style={{height: 35, width: 35}} />
                <SocialIcon url="https://github.com/KyleEuman" classname='mr-4' target='_blank' fgcolor='#ffff' style={{height: 35, width: 35}} />
                </div> 
            </div>
        </header>
    )
}