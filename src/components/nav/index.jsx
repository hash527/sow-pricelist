import './index.css'
import { useState, useEffect } from 'react';
import { user } from '../../constants/server';

function NavBar() {
    const [data, setData] = useState({})
    const fetchData = async () => {
        const res = await fetch(user)
        const data = await res.json()
        setData(data[0])
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="nav-outer">
            <nav className='nav-bar'>
                <div className="logo-container">
                    <a href="/">
                        <img
                            alt=""
                            className="logo"
                            height={60}
                            width={60}
                            src="https://storage.123fakturere.no/public/icons/diamond.png"
                        />
                    </a>
                    <div className='nav-profile'>
                        <span>{data?.username}</span>
                        <span>{data?.location}</span>
                    </div>
                </div>
                <div className='hamburger'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </div>
                <div className="nav-item" >
                    <a href="https://123fakturere.no/index.html">
                        <p>English</p>
                    </a>
                    <img
                        src="https://storage.123fakturere.no/public/flags/GB.png"
                        height={18}
                        width={26}
                    />
                </div>
            </nav>

        </div>
    );
}

export default NavBar;