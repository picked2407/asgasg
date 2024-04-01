/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '../../store';
import { toggleTheme, toggleDirection, toggleLanguage } from '../../store/themeConfigSlice';
import { useRouter } from 'next/router';
import { language } from '../../utils/language';

const Header = (props: any) => {
    const router = useRouter();
    const currentLanguage = useSelector((state: IRootState) => state.themeConfig.language);

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };

    const [showSearch, setShowSearch] = useState(false);
    const toggleLang = () => {
        dispatch(toggleLanguage(`${themeConfig.language === 'en' ? 'es' : 'en'}`));
    };

    return (
        <header className={`sticky top-0 z-50 bg-black/10 duration-300 ${props.className}`}>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link href="/">
                        <img src="/assets/images/2.png" alt="plurk" className="h-20 w-full" />
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>
                        <div className={`menus ${showMenu ? 'overflow-y-auto ltr:!right-0 rtl:!left-0' : ''}`}>
                            <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black dark:text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul onClick={() => toggleMenu()}>
    <li>
        <Link href="#home">{language.home[currentLanguage]}</Link>
    </li>
    <li>
        <Link href="#about">{language.aboutUs[currentLanguage]}</Link>
    </li>
    <li>
        <Link href="#services">{language.services[currentLanguage]}</Link>
    </li>
    <li>
        <Link href="#contact">{language.contact[currentLanguage]}</Link>
    </li>
    <li>
        <Link href="/select">Cambiar marca 🔁</Link> {/* New list item for Services section */}
    </li>
    <li className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:before:-left-[2px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex"></li>
</ul>

                        </div>
                        <ul className="flex items-center gap-2 ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pl-0 rtl:lg:pr-5">
                            <li>
                                <button type="button" onClick={() => toggleLang()} className="pl-4 pr-2 font-medium text-white hover:text-primary">
                                    {themeConfig.language === 'es' && <span className="text-xl text-white">ES</span>}
                                    {themeConfig.language === 'en' && <span className="text-xl text-white">EN</span>}
                                </button>
                            </li>
                            {/* <li>
                                <button
                                    type="button"
                                    className="flex h-5 w-5 items-center text-white hover:text-primary rtl:text-primary"
                                    onClick={() => dispatch(toggleDirection(`${themeConfig.direction === 'rtl' ? 'ltr' : 'rtl'}`))}
                                >
                                    <svg viewBox="0 0 1000 1000" fill="currentColor" height="24" width="24">
                                        <path d="M700 258v140H200v90L0 328l200-170v100h500m300 420L800 838v-90H300V608h500V508l200 170" />
                                    </svg>
                                </button>
                            </li> */}
                            <li>
                                <button
                                    type="button"
                                    className="flex h-10 w-10 items-center justify-center rounded-full  text-white hover:text-primary"
                                    onClick={() => dispatch(toggleTheme(`${themeConfig.theme === 'light' ? 'dark' : 'light'}`))}
                                >
                                    <svg
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        height="20"
                                        width="20"
                                        className={`${themeConfig.theme === 'light' ? 'hidden' : ''}`}
                                    >
                                        <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128 128-57.3 128-128z" />
                                    </svg>
                                    <svg
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        width="20"
                                        height="20"
                                        className={`${themeConfig.theme === 'dark' ? 'hidden' : ''}`}
                                    >
                                        <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
