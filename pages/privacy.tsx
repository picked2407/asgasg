import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';
import Link from 'next/link'; // Import Link component from next/link
import { language } from '../utils/language';

const Privacypolicy = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const currentLanguage = useSelector((state: IRootState) => state.themeConfig.language);

    return (
        <div>

           
            <Head>
                <title> {language.privacyPolicy[currentLanguage]}</title>
            </Head>
                <div className="relative">
                    <div className="container">
                    <div className="items-center justify-between py-10 md:flex md:h-[100px] md:py-0">   
                        </div>

                    </div>
                </div>

            <div className="py-14 md:py-[100px]">
                <div className="container text-justify">{language.privacyText[currentLanguage]}</div>
            </div>
                 <footer className="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
                <div className="container md:flex md:gap-5">
                    <div className="">
                        <img src="/assets/images/log.png" className="mt-10 h-32 rtl:rotate-y-180" alt="" />
                    </div>
                    <div className="grid justify-between gap-x-4 gap-y-10 py-9 sm:grid-cols-3 lg:grid-cols-4 lg:py-[50px]">
                        <div>
                            <ul className="flex flex-col gap-3 font-light">
                                <li className="mb-3 text-lg font-semibold text-black dark:text-white">{language.links[currentLanguage]}</li>
                                <li>
                                    <Link href="/terms" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        {language.terms[currentLanguage]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        {language.privacyPolicy[currentLanguage]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookies" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        {language.cookiePolicy[currentLanguage]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/disclaime" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        {language.disclaimer[currentLanguage]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/select" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Cambiar marca 🔁

                                    </Link>
                                </li>
                            </ul>
                        </div>
                   
                        <div></div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Privacypolicy;
