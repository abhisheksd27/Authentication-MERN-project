import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='text-white bg-black'>
            <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
                <Link to='/'>
                    <h1 className='font-bold'>
                    Authentication with paypal integration App
                    </h1>
                </Link>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/profile'>
                    {currentUser ? (
                    <img src={currentUser.profilePicture} alt='profile' className='object-cover rounded-full h-7 w-7' />
                    ) : (
                    <li>Sign In</li>
                    )}
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
