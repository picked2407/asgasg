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
                 
        </div>
    );
};

export default Privacypolicy;
