import React from 'react';
import img1 from '../../Assets/Brand/37.png';
import img2 from '../../Assets/Brand/38.png';
import img3 from '../../Assets/Brand/39.png';

const serviceData = [
    {
        icon: img1,
        title: 'Cleanliness',
        description:
            'Our vision is to promote cleanliness and hygiene in every household and workplace, ensuring a healthy and safe environment for all.',
    },
    {
        icon: img2,
        title: 'Reliability',
        description:
            'We are dedicated to providing reliable and trustworthy cleaning services, earning the trust and confidence of our clients every day.',
    },
    {
        icon: img3,
        title: 'Professionalism',
        description:
            'Our values center around professionalism, ensuring that every interaction and service delivery reflects our commitment to excellence and customer satisfaction.',
    },
];

const Vision = () => {
    return (
        <div className="px-2 py-10 w-10/12 mx-auto mt-4 relative">
            <div
                className="backdrop"
                style={{
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    opacity: 0.3,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                }}
            ></div>
            <div id="features" className="mx-auto max-w-10/12 md:max-w-6xl relative z-10">
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-200 md:text-4xl">
                    Our Vision & <span className='text-yellow-400'>Values</span>
                </h2>
                <p className="text-center text-slate-300 text-base font-semibold leading-7 text-primary-500 mt-8">
                    Immerse yourself in the ethos of our cleaning service, where dedication, reliability, and professionalism define our workplace dynamics.
                </p>
                <ul className="mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2">
                    {serviceData.map((service, index) => (
                        <li
                            key={index}
                            className="rounded-xl px-6 py-8 text-white bg-base-200 shadow-md hover:shadow-lg  hover:text-[#ffdb3b] transform hover:translate-y-[-5px] transition duration-300 ease-in-out"
                        >
                            <a href={service.link} className="group block">
                                <img src={service.icon} alt="" className="mx-auto h-40 w-40" />
                                <h3 className="my-3 font-display text-xl font-semibold group-hover:text-primary-500 text-center">
                                    {service.title}
                                </h3>
                                <p className="mt-3.5 text-sm text-slate-400 leading-6 text-secondary-500 text-center">{service.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Vision;
