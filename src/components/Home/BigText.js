import React from 'react';
import back from '../assets/home/backdrop.jpg';
import img1 from '../assets/home/corpo.png';
import img2 from '../assets/home/course.png';
import img3 from '../assets/home/SCHOLARSHIP.png';

const serviceData = [
    {
        icon: img1,
        title: 'Quality Cleaning Services',
        description:
            'Experience top-notch cleaning services with our team of professionals dedicated to ensuring your spaces are impeccably clean and sanitized.',
    },
    {
        icon: img2,
        title: 'Customized Cleaning Solutions',
        description:
            'Tailored cleaning solutions designed to meet your specific needs, whether it’s residential, commercial, or industrial cleaning requirements.',
    },
    {
        icon: img3,
        title: 'Eco-Friendly Cleaning Products',
        description:
            'We prioritize environmental sustainability by using eco-friendly cleaning products that are safe for your family, pets, and the planet.',
    },
];

const BigText = () => {
    return (
        <div className="relative h-auto lg:h-[700px] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${back})` }}>
            <div className="absolute inset-0 bg-black opacity-5"></div>
            <div className="px-2 py-10 w-10/12 mx-auto mt-4 relative z-10">
                <div id="features" className="mx-auto max-w-10/12 md:max-w-6xl">
                    <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-white md:text-4xl pt-7">
                        Our Cleaning <span className='text-yellow-400'>Services</span>
                    </h2>
                    <p className="text-center text-white text-base font-semibold leading-7 mt-8">
                        Providing Exceptional Cleaning Solutions
                    </p>
                    <ul className="mt-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                        {serviceData.map((service, index) => (
                            <li
                                key={index}
                                className="rounded-xl px-6 py-10 bg-gray-700 shadow-xl hover:shadow-lg"
                            >
                                <a href={service.link} className="group block">
                                    <img src={service.icon} alt="" className="mx-auto h-32 w-32" />
                                    <h3 className="my-4 font-display text-xl font-semibold group-hover:text-primary-500 text-yellow-400 md:text-center">
                                        {service.title}
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-200 leading-6 text-justify md:text-center">{service.description}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BigText;
