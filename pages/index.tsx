import React, { useState } from "react";
import Image from "next/image"; // Import Image component from next/image
import Link from "next/link"; // Import Link component from next/link
import { language } from '../utils/language';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, toggleDirection, toggleLanguage } from '../store/themeConfigSlice';

import { useRouter } from 'next/router';
import { IRootState } from "../store";


export default function Document() {

    const currentLanguage = "en" || "es"

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
        const newLanguage = themeConfig.language === 'en' ? 'es' : 'en';
        dispatch(toggleLanguage(newLanguage));
    };
    
    
    // Assuming the language object is defined with appropriate properties
    const languageData = {
        welcomeTo: {
            en: "Welcome to",
            es: "Bienvenido a ",
            // Define other languages here
        },
        ourServices: {
            en: "Our Services",
            // Define other languages here
        },
        serviceTitle1: {
            en: "Financing and Debt Unification",
            es: "Financiación y Unificación de Deudas"
            // Define other languages here
        },
        serviceTitle2: {
            en: "Financial Advice and Planning",
            es: "Asesoría y Planificación Financiera",
            // Define other languages here
        },
        serviceTitle3: {
            en: "Business Plan Development",
            es: "Desarrollo de Planes de Negocios"

            // Define other languages here
        },
        serviceTitle4: {
            en: "Consulting on New Technologies",
            es: "Asesoría en Nuevas Tecnologías"
            // Define other languages here
        },
        serviceTitle5: {
            en: "Real Estate Business Consulting",
            es: "Asesoría en Negocios Inmobiliarios"
            // Define other languages here
        },
        serviceTitle6: {
            en: "Long Term Investment Planning",
            es: "Planificación de Inversiones a Largo Plazo"
            // Define other languages here
        },
        service1: {
            en: "Are you overwhelmed by multiple debts? Our specialists will help you find suitable financing solutions and unify your debts so you can regain control of your finances.",
            es: "¿Se encuentra abrumado por múltiples deudas? Nuestros especialistas le ayudarán a encontrar soluciones de financiación adecuadas y a unificar sus deudas para que pueda recuperar el control de sus finanzas.",
            // Define other languages here
        },
        service2: {
            en: "Whether you are looking to establish a solid financial plan for the future or need advice on how to manage your assets, our team of experts is here to help you every step of the way.",
            es: "Ya sea que esté buscando establecer un plan financiero sólido para el futuro o necesite asesoramiento sobre cómo administrar sus activos, nuestro equipo de expertos está aquí para ayudarlo en cada paso del camino.",
            // Define other languages here
        },
        service3: {
            en: "Do you have a brilliant idea but need help turning it into a successful business? Our consultants will work with you to develop a solid, strategic business plan that will guide you to business success.",
            es: "¿Tiene una idea brillante pero necesita ayuda para convertirla en un negocio exitoso? Nuestros consultores trabajarán con usted para desarrollar un plan de negocios sólido y estratégico que lo guiará hacia el éxito empresarial.",
            // Define other languages here
        },
        service4: {
            en: "In today's digital world, it is crucial to stay up to date with the latest technologies. Whether you need help with app development, digital marketing strategies, or improving your online presence, our experts are ready to help propel your business into the future.",
            es: "En el mundo digital de hoy, es crucial mantenerse al día con las últimas tecnologías. Ya sea que necesite ayuda con el desarrollo de aplicaciones, estrategias de marketing digital o mejorar su presencia en línea, nuestros expertos están listos para ayudarlo a impulsar su negocio hacia el futuro.",
            // Define other languages here
        },
        service5: {
            en: "Are you looking to invest in the real estate market but don't know where to start? Our specialists will provide you with expert advice on all aspects of real estate business, from property acquisition and management to optimizing the performance of your property portfolio.",
            es: "¿Está buscando invertir en el mercado inmobiliario pero no sabe por dónde empezar? Nuestros especialistas le brindarán asesoramiento experto en todos los aspectos de los negocios inmobiliarios, desde la adquisición y gestión de propiedades hasta la optimización del rendimiento de su cartera inmobiliaria.",
            // Define other languages here
        },
        service6: {
            en: "The financial future is as important as the present. Our advisors will help you design a solid, personalized investment strategy that aligns with your long-term goals, whether for retirement, your children's education, or any other financial goal you have in mind.",
            es: "El futuro financiero es tan importante como el presente. Nuestros asesores lo ayudarán a diseñar una estrategia de inversión sólida y personalizada que se alinee con sus objetivos a largo plazo, ya sea para la jubilación, la educación de sus hijos o cualquier otro objetivo financiero que tenga en mente.",
            // Define other languages here
        },
        weHelpBrands: {
            en: "We Help Brands",
            // Define other languages here
        },
        contact: {
            en: "Contact",
            // Define other languages here
        },
        paragraph: {
            en: "At Dominicana 4K we are dedicated to connecting clients with expert providers in a wide range of services, including:",
            es: "En Dominicana 4K nos dedicamos a conectar a clientes con proveedores expertos en una amplia gama de servicios, incluyendo:"
            // Define other languages here
        }
    };

    const serviceList = [
        {
            serviceName: languageData.serviceTitle1[currentLanguage],
            serviceDesc: languageData.service1[currentLanguage],
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.5"
                        d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                        fill="white"
                    />
                    <path
                        d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                        fill="white"
                    />
                </svg>
            ),
        },
        {
            serviceName: languageData.serviceTitle2[currentLanguage],
            serviceDesc: languageData.service2[currentLanguage], // Corrected service description key
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="26" width="26">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5-76.3-55.1-99.8-141-103.1-200.2-16.1-4.8-33.1-7.3-50.7-7.3h-91.5zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8l95.4 38.2z" />
                </svg>
            ),
        },
        {
            serviceName: languageData.serviceTitle3[currentLanguage],
            serviceDesc: languageData.service3[currentLanguage], // Corrected service description key
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="26" width="26">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5-76.3-55.1-99.8-141-103.1-200.2-16.1-4.8-33.1-7.3-50.7-7.3h-91.5zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8l95.4 38.2z" />
                </svg>
            ),
        },
        {
            serviceName: languageData.serviceTitle4[currentLanguage],
            serviceDesc: languageData.service4[currentLanguage], // Corrected service description key
         


        },
        
        {
            serviceName: languageData.serviceTitle5[currentLanguage],
            serviceDesc: languageData.service5[currentLanguage],
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="26" width="26">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5-76.3-55.1-99.8-141-103.1-200.2-16.1-4.8-33.1-7.3-50.7-7.3h-91.5zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8l95.4 38.2z" />
                </svg>
            ),
        },
        {
            serviceName: languageData.serviceTitle6[currentLanguage],
            serviceDesc: languageData.service6[currentLanguage],
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="26" width="26">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5-76.3-55.1-99.8-141-103.1-200.2-16.1-4.8-33.1-7.3-50.7-7.3h-91.5zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8l95.4 38.2z" />
                </svg>
            ),
        },
        // Define other services here
    ];

    
    
    return (
        <div>
        {/* Header */}
        <header className="flex items-center justify-end px-4 py-2 absolute inset-x-0 top-0 z-10">
            {/* Move the image above the "Welcome to" text */}
            <img src="/assets/images/l.png" alt="Logo" className="h-20 w-auto mr-auto mb-2" />
            <a href="/pagie">
            <button>
                <span className="text-black text-bold">Select</span>
            </button>
            </a>
            <ul className="flex items-center gap-2 ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pl-0 rtl:lg:pr-5">

            <li>
    <button type="button" onClick={() => toggleLang()} className="pl-4 pr-2 font-medium text-black hover:text-primary">
        {themeConfig.language === 'en' && <span className="text-xl">ES</span>}
        {themeConfig.language === 'es' && <span className="text-xl">EN</span>}
    </button>
</li>
<li>
                               
                            </li>
                        </ul>



            
        </header>
    
        {/* Hero */}
        <section className="hotel-resort-banner relative">
            <div className="h-[650px] lg:h-[828px]">
                {/* Background image or other content */}
                <Image
                        height={1080}
                        width={1920}
                        src="/assets/images/dominicana/hote.png"
                        className="object-fit h-full w-full scale-x-[2.2] object-[-7px] sm:scale-x-[1.5] sm:object-[0] lg:scale-x-100"
                        alt=""
                        // style={{ objectPosition: '-7px' }}
                    />
            </div>
            <div className="absolute inset-0 z-[1] opacity-80">
                {/* Overlay or other content */}
            </div>
            <div className="absolute inset-x-0 top-1/2 z-[1] -translate-y-1/2 pt-40 text-white sm:top-1/2 lg:pt-0">
    <div className="container">
        <div className="max-w-[624px] text-center ltr:md:text-left rtl:md:text-left">
            {/* Move the "Welcome to" text below the logo */}
            <h2 className="text-4xl font-extrabold sm:text-5xl md:text-7xl md:leading-[88px] text-black text-center">
    <span className="text-black" style={{ marginRight: '140px' }}>{languageData.welcomeTo[currentLanguage]}</span> Dominicana 4k
</h2>


            {/* Uncomment when language.tagline is defined */}
            {/* <p className="mt-4 text-lg font-semibold">{language.tagline[currentLanguage]}</p> */}
           
        </div>
    </div>
</div>

        </section>
    
        <section id="service" className="scroll-mt-24 bg-white bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    {/* Assuming languageData and serviceList are defined */}
                    <h4 className="!text-black">{languageData.weHelpBrands[currentLanguage]}</h4>
                    <p className="!text-black">{languageData.paragraph[currentLanguage]}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                    {serviceList.map(({ serviceName, serviceDesc }, index) => (
                        <div key={index}>
                            <div
                                className="group relative overflow-hidden rounded-3xl border-2 border-white bg-#1F3B4D p-6 transition duration-500 shadow-card hover:shadow-card-hover hover:border-secondary hover:bg-blue-500 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent"
                                style={{ boxShadow: '0px 10px 20px rgba(31, 59, 77, 0.2)' }} // Adding box shadow
                            >
                              
                                <Link href="#contact" className="my-8 inline-block text-[22px] font-semibold text-black dark:text-white">
                                    {/* Remove the transition effect on hover */}
                                    <span>{serviceName}</span>
                                </Link>
                                <p className="mb-10 text-lg font-light transition group-hover:text-black dark:group-hover:text-black">{serviceDesc} </p>
                                   
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
    );
}
