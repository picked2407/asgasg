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
                                className="mb-5 rounded-[32px] border border-secondary bg-white px-4 py-6 dark:bg-[#101626] md:p-7"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4 flex items-center gap-2 text-secondary">
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_563_8262)">
                                                <path
                                                    d="M3.24996 3.25H22.75C23.0373 3.25 23.3128 3.36414 23.516 3.5673C23.7192 3.77047 23.8333 4.04602 23.8333 4.33333V21.6667C23.8333 21.954 23.7192 22.2295 23.516 22.4327C23.3128 22.6359 23.0373 22.75 22.75 22.75H3.24996C2.96264 22.75 2.68709 22.6359 2.48393 22.4327C2.28076 22.2295 2.16663 21.954 2.16663 21.6667V4.33333C2.16663 4.04602 2.28076 3.77047 2.48393 3.5673C2.68709 3.36414 2.96264 3.25 3.24996 3.25ZM13.065 12.6566L6.11863 6.75783L4.71571 8.40883L13.079 15.5101L21.2918 8.40342L19.8748 6.76433L13.066 12.6566H13.065Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_563_8262">
                                                    <rect width="26" height="26" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-[22px] font-medium">{language.mailUs[currentLanguage]}</span>
                                </div>
                                <div className="pl-2">
                                    <a
                                        href="mailto:contact@dominicana4k.com"
                                        className="font-light text-black transition hover:text-secondary dark:text-white dark:hover:text-primary lg:text-lg"
                                    >
                                        contact@dominicana4k.com
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
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_563_8282)">
                                                <path
                                                    d="M19.8943 18.8122L13 25.7066L6.10567 18.8122C4.74212 17.4486 3.81354 15.7114 3.43734 13.8201C3.06114 11.9287 3.25423 9.96835 3.99219 8.18678C4.73015 6.4052 5.97983 4.88247 7.58321 3.81113C9.18658 2.73979 11.0716 2.16797 13 2.16797C14.9284 2.16797 16.8134 2.73979 18.4168 3.81113C20.0202 4.88247 21.2699 6.4052 22.0078 8.18678C22.7458 9.96835 22.9389 11.9287 22.5627 13.8201C22.1865 15.7114 21.2579 17.4486 19.8943 18.8122ZM13 14.0845C13.5746 14.0845 14.1257 13.8563 14.5321 13.4499C14.9384 13.0436 15.1667 12.4925 15.1667 11.9179C15.1667 11.3432 14.9384 10.7921 14.5321 10.3858C14.1257 9.97949 13.5746 9.75122 13 9.75122C12.4254 9.75122 11.8743 9.97949 11.4679 10.3858C11.0616 10.7921 10.8333 11.3432 10.8333 11.9179C10.8333 12.4925 11.0616 13.0436 11.4679 13.4499C11.8743 13.8563 12.4254 14.0845 13 14.0845Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_563_8282">
                                                    <rect width="26" height="26" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-[22px] font-medium">{language.headquarters[currentLanguage]}</span>
                                </div>
                                <div className="pl-2">
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">Santo Domingo, Distrito Nacional</h5>
                                </div>
                            </div>
                            <div
                                className="mb-5 rounded-[32px] border border-secondary bg-white px-4 py-6 dark:bg-[#101626] md:p-7"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4 flex items-center gap-2 text-secondary">
                                    <div>
                                        <svg viewBox="0 0 24 24" fill="currentColor" height="32" width="32">
                                            <path d="M15.19 21C14.12 19.43 13 17.36 13 15.5c0-1.83.96-3.5 2.4-4.5H15V9h2v1.23c.5-.14 1-.23 1.5-.23.17 0 .34 0 .5.03V3H5v18h6v-3.5h2V21h2.19M15 5h2v2h-2V5M9 19H7v-2h2v2m0-4H7v-2h2v2m0-4H7V9h2v2m0-4H7V5h2v2m2-2h2v2h-2V5m0 4h2v2h-2V9m0 6v-2h2v2h-2m7.5-3c-1.9 0-3.5 1.61-3.5 3.5 0 2.61 3.5 6.5 3.5 6.5s3.5-3.89 3.5-6.5c0-1.89-1.6-3.5-3.5-3.5m0 4.81c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2s1.2.59 1.2 1.2c.1.6-.5 1.2-1.2 1.2z" />
                                        </svg>
                                    </div>
                                    <span className="text-[22px] font-medium">{language.branchOffices[currentLanguage]}</span>
                                </div>
                                <div className="pl-2">
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">Santo Domingo</h5>
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">La Romana</h5>
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">Puerto Plata</h5>
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">La Altagracia</h5>
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">Samaná</h5>
                                    <h5 className="font-light text-black dark:text-white lg:text-lg">San Pedro de Macorís</h5>
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
