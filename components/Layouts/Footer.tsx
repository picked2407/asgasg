import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { language } from '../../utils/language';

const Footer = () => {
    const currentLanguage = useSelector((state: IRootState) => state.themeConfig.language);

    return (
        <footer className="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
            <div className="container md:flex md:gap-5">
                <div className="">
                    <img src="/assets/images/2.png" className="mt-10 h-32 rtl:rotate-y-180" alt="" />
                </div>
                <div className="grid justify-between gap-x-4 gap-y-10 py-9 sm:grid-cols-3 lg:grid-cols-4 lg:py-[50px]">
                    <div>
                        <ul className="flex flex-col gap-3 font-light">
                            <li className="mb-3 text-lg font-semibold text-black dark:text-white">{language.links[currentLanguage]}</li>
                            <li>
                                <Link href="/terms-conditions" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {language.terms[currentLanguage]}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {language.privacyPolicy[currentLanguage]}
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {language.cookiePolicy[currentLanguage]}
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {language.disclaimer[currentLanguage]}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-light">
                            <li className="mb-3 text-lg font-semibold text-black dark:text-white">{language.headquarters[currentLanguage]}</li>
                            <li className="md:w-40">Santo Domingo, Distrito Nacional</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-light">
                            <li className="mb-3 text-lg font-semibold text-black dark:text-white">{language.branchOffices[currentLanguage]}</li>
                            <li>Santo Domingo</li>
                            <li>La Romana</li>
                            <li>Puerto Plata</li>
                            <li>La Altagracia</li>
                            <li>Samaná</li>
                            <li>San Pedro de Macorís</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-light">
                            <li className="mb-3 text-lg font-semibold text-black dark:text-white">{language.contact[currentLanguage]}</li>
                            <li>
                                <a
                                    href="https://t.me/prestamos4k"
                                    target="_blank"
                                    className="flex items-center gap-2 transition hover:scale-110 hover:text-secondary"
                                >
                                    <svg fill="currentColor" viewBox="0 0 16 16" height="20" width="20">
                                        <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 01-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 00-.013-.315.337.337 0 00-.114-.217.526.526 0 00-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                    </svg>
                                    <span>@prestamos4k</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=17867447747&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    className="flex items-center gap-2 transition hover:scale-110 hover:text-secondary"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" height="22" width="22">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                                    </svg>
                                    <span>+1 (786) 744 7747</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
