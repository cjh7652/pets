import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
     useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) { // 100px 이상 스크롤되면 배경 바뀜
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`header ${isScrolled ? 'scrolled': ""}`}>
            <div className="header-inner">
                <h1 className="logo">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" className="p"/>
                        <img src={process.env.PUBLIC_URL + "/img/logo_m.png" } alt="" className="m"/>
                    </Link>
                </h1>
                <Navbar />
                <div className="header-gnb">
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li> <Link to="/join">회원가입</Link></li>
                        <li><Link to="/cart">장바구니</Link></li>
                        <li><Link to="/search"><IoSearch /></Link></li>
                        
                    </ul>
                    <ul className="m">
                        <li>
                            <Link to="/"><FaBasketShopping /></Link>
                            <Link to="/"><IoPersonOutline /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;