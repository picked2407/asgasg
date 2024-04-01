import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';
import { language } from '../utils/language';
import Link from 'next/link'; // Import Link component from next/link


const Termsandcondition = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const currentLanguage = useSelector((state: IRootState) => state.themeConfig.language);

    return (
        <div>
            <Head>
                <title> {language.terms[currentLanguage]}</title>
            </Head>
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[100px] md:py-0">
                            
                            
                        </div>
                    </div>
                </div>

            <div className="py-14 md:py-[100px]">
                <div className="container text-justify">{language.termsText[currentLanguage]}</div>
            </div>
           
        </div>
    );
};

export default Termsandcondition;
