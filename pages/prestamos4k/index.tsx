import Link from 'next/link';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { IRootState } from '../../store';
import { language } from '../../utils/language';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const Consulting = () => {
    const currentLanguage = useSelector((state: IRootState) => state.themeConfig.language);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const initialFormText = { name: '', email: '', mobileNumber: '', city: '', message: '' };
    const [formText, setFormText] = useState(initialFormText);
    const [siteKeyCorrect, setSiteKeyCorrect] = useState(false);

    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast(language.emailSendSuccessful[currentLanguage], {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    setFormText(initialFormText);
                },
                (error) => {
                    console.log(error.text);
                    toast.error(language.emailSendError[currentLanguage], {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            );
    };

    const serviceList = [
        {
            serviceName: language.serviceTitle1[currentLanguage],
            serviceDesc: language.service1[currentLanguage],
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="26" width="26">
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5-76.3-55.1-99.8-141-103.1-200.2-16.1-4.8-33.1-7.3-50.7-7.3h-91.5zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8l95.4 38.2z" />
                </svg>
            ),
        },
        {
            serviceName: language.serviceTitle2[currentLanguage],
            serviceDesc: language.service2[currentLanguage],
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="30" width="30">
                    <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16h-.7zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144zm-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z" />
                </svg>
            ),
        },
        {
            serviceName: language.serviceTitle3[currentLanguage],
            serviceDesc: language.service3[currentLanguage],
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
            serviceName: language.serviceTitle4[currentLanguage],
            serviceDesc: language.service4[currentLanguage],
            icon: (
                <svg viewBox="0 0 640 512" fill="white" height="26" width="26">
                    <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-174-.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h174.1L535 41zM105 377l-23 23h174c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64h241.9c-3.7 7.2-5.9 15.3-5.9 24 0 28.7 23.3 52 52 52h117.4c-4 17 .6 35.5 13.8 48.8 20.3 20.3 53.2 20.3 73.5 0l19.3-19.3V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24 0-28.7-23.3-52-52-52H138.6c4-17-.6-35.5-13.8-48.8-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zm384 192c-35.3 0-64 28.7-64 64h64v-64zm-224 32c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96z" />
                </svg>
            ),
        },
    ];

    const css = `[data-height-collapsible] {
        transition: height 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }`;
    return (
        <div>
            {/* Hero */}
            <section className="hotel-resort-banner relative">
                <div className="h-[650px] lg:h-[828px]">
                    <Image
                        height={1080}
                        width={1920}
                        src="/assets/images/dominicana/hotell.png"
                        className="object-fit h-full w-full scale-x-[2.2] object-[-7px] sm:scale-x-[1.5] sm:object-[0] lg:scale-x-100"
                        alt=""
                        // style={{ objectPosition: '-7px' }}
                    />
                </div>
                <div
                    className="absolute inset-0 z-[1] opacity-80"
                    style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
                ></div>
                <div className="absolute inset-x-0 top-1/3 z-[1] -translate-y-1/2 pt-40 text-white sm:top-1/2 lg:pt-0">
                    <div className="container">
                        <div className="max-w-[624px] text-center ltr:md:text-left rtl:md:text-right">
                            <h2 className="text-4xl font-extrabold sm:text-5xl md:text-[70px] md:leading-[88px]">
                                {language.welcomeTo[currentLanguage]} <span className="text-secondary">Prestamos 4k</span>
                            </h2>
                            {/* <p className="mt-4 text-lg font-semibold">{language.tagline[currentLanguage]}</p> */}
                            <Link href="#services" className="btn mt-8 bg-white px-8 py-[19px] text-black hover:bg-secondary hover:text-white md:mt-[60px]">
                                {language.ourServices[currentLanguage]}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="relative scroll-mt-24 py-12 dark:bg-white/5 lg:py-24">
                <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                    <img src="/assets/images/dominicana/bg-icon.svg" className="rtl:rotate-y-180" alt="" />
                </div>
                <div className="container relative z-[1]">
                    <div className="heading text-center ">
                        <h4 className="mb-2 font-black font-medium uppercase">
                            {language.about[currentLanguage]} <span className="text-primary">{language.us[currentLanguage]}</span>
                        </h4>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="flip-left" data-aos-duration="1000">
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/images/dominicana/services1.jpg"
                                    className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                                <h5 className="text-2xl font-medium text-primary group-hover:text-secondary">{language.ourCommitment[currentLanguage]}</h5>
                                <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                                <p className="h-48 pb-[60px] text-lg font-light text-white">{language.about1[currentLanguage]}</p>
                                <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                    <img src="/assets/images/dominicana/services-icon1.svg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/images/dominicana/services2.jpg"
                                    className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                                <h5 className="text-2xl font-medium text-primary group-hover:text-secondary">{language.ourPlanning[currentLanguage]}</h5>
                                <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                                <p className="h-48 pb-[60px] text-lg font-light text-white">{language.about2[currentLanguage]}</p>
                                <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                    <img src="/assets/images/dominicana/services-icon2.svg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/images/dominicana/services3.jpg"
                                    className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                                <h5 className="text-2xl font-medium text-primary group-hover:text-secondary">{language.ourPrecedence[currentLanguage]}</h5>
                                <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                                <p className="h-48 pb-[60px] text-lg font-light text-white">{language.about3[currentLanguage]}</p>
                                <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                    <img src="/assets/images/dominicana/services-icon3.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="scroll-mt-24 bg-black bg-cover bg-center bg-no-repeat py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h4 className="!text-white">{language.weHelpBrands[currentLanguage]}</h4>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                        {serviceList.map(({ serviceName, serviceDesc, icon }, index) => (
                            <div data-aos="fade-up" data-aos-duration="1000" key={index}>
                                <div
                                    className="group h-full rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                    style={{
                                        boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                    }}
                                >
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                        style={{
                                            boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                                        }}
                                    >
                                        {icon}
                                    </div>
                                    <Link
                                        href="#contact"
                                        className="my-8 inline-block text-[22px] font-semibold text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                                    >
                                        {serviceName}
                                    </Link>
                                    <p className="mb-10 text-lg font-light transition group-hover:text-black dark:group-hover:text-black">{serviceDesc} </p>
                                    <Link
                                        href="#contact"
                                        className="flex h-11 w-36 items-center justify-center gap-1 rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                    >
                                        <span>{language.contact[currentLanguage]}</span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-black transition group-hover:text-white dark:text-white"
                                        >
                                            <path
                                                d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24 bg-gradient-to-t from-transparent to-white py-14 dark:bg-gray-dark dark:to-transparent lg:py-[100px]">
                <div className="container">
                    <div className="heading mb-15 text-center">
                        <h4 className="sm:!leading-[50px]">{language.contactUs[currentLanguage]}</h4>
                    </div>
                    <div className="relative z-10 items-start lg:flex">
                        <div className="text-left lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                            <div
                                className="mb-5 rounded-[32px] border border-green bg-white px-4 py-6 dark:bg-[#101626] md:p-7"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4 flex items-center gap-2 text-green">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1219.547 1225.016" id="whatsapp"><path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"></path><linearGradient id="a" x1="609.77" x2="609.77" y1="1190.114" y2="21.084" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#20b038"></stop><stop offset="1" stop-color="#60d66a"></stop></linearGradient><path fill="url(#a)" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"></path><path fill="#FFF" fill-rule="evenodd" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z" clip-rule="evenodd"></path><path fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"></path></svg>
                                    
                                    </div>
                                    <span className="text-[22px] font-medium">Whatsapp</span>
                                </div>
                                <div className="pl-2">
                                    <a
                                        href="mailto:contact@dominicana4k.com"
                                        className="font-light text-black transition hover:text-secondary dark:text-white dark:hover:text-primary lg:text-lg"
                                    >
                                        +1 (786) 744 7747
                                    </a>{' '}
                                </div>
                            </div>
                            <div
                                className="mb-5 rounded-[32px] border border-primary bg-white px-4 py-6 dark:bg-[#101626] md:p-7"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4 flex items-center gap-2 text-primary">
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
<path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>
</svg>
                                    </div>
                                    <span className="text-[22px] font-medium">Telegram</span>
                                </div>
                                <div className="pl-2">
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">@prestamos4k</h5>
                                </div>
                            </div>
                          
                        </div>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            action=""
                            className="flex h-full min-h-[39rem] flex-col justify-center rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8"
                        >
                            <div className="grid gap-10 gap-y-12 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-normal outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                        required
                                        value={formText.name}
                                        onChange={(e) =>
                                            setFormText((prev) => {
                                                prev.name = e.target.value;
                                                return { ...prev };
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-medium ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        {language.fullName[currentLanguage]}
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        value={formText.email}
                                        onChange={(e) =>
                                            setFormText((prev) => {
                                                prev.email = e.target.value;
                                                return { ...prev };
                                            })
                                        }
                                        required
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-normal outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-medium ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        {language.emailAddress[currentLanguage]}
                                    </label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        value={formText.mobileNumber}
                                        onChange={(e) =>
                                            setFormText((prev) => {
                                                prev.mobileNumber = e.target.value;
                                                return { ...prev };
                                            })
                                        }
                                        type="tel"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-normal outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-medium ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        {language.mobileNumber[currentLanguage]}
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        value={formText.city}
                                        onChange={(e) =>
                                            setFormText((prev) => {
                                                prev.city = e.target.value;
                                                return { ...prev };
                                            })
                                        }
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-normal outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-medium ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                    >
                                        {language.city[currentLanguage]}
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-12">
                                <textarea
                                    required
                                    value={formText.message}
                                    onChange={(e) =>
                                        setFormText((prev) => {
                                            prev.message = e.target.value;
                                            return { ...prev };
                                        })
                                    }
                                    rows={3}
                                    name="message"
                                    className="w-full resize-none rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-normal outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label
                                    htmlFor=""
                                    className="absolute -top-3 bg-white px-2 font-medium ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white"
                                >
                                    {language.message[currentLanguage]}
                                </label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="flex flex-col md:mt-12 md:flex-row md:items-center md:justify-between">
                                <div className="md:d-block mt-5 flex justify-center md:mt-0">
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_EMAILJS_CATPCHA || ''}
                                        onChange={(value) => {
                                            if (value) setSiteKeyCorrect(true);
                                            else setSiteKeyCorrect(false);
                                        }}
                                    />
                                </div>
                                <div className="mt-5 text-center md:mt-0 ltr:lg:text-right rtl:lg:text-left">
                                    <button
                                        disabled={!siteKeyCorrect}
                                        type="submit"
                                        className="btn bg-gray px-12 capitalize text-white disabled:hover:bg-gray dark:bg-white dark:text-black dark:hover:bg-secondary dark:disabled:hover:bg-white"
                                    >
                                        {language.submit[currentLanguage]}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <style>{css}</style>
        </div>
    );
};

export default Consulting;
