import React from 'react';
import img1 from '../../Assets/Brand/31.png';
import img2 from '../../Assets/Brand/32.png';
import img3 from '../../Assets/Brand/33.png';
import img4 from '../../Assets/Brand/34.png';
import img5 from '../../Assets/Brand/35.png';
import img6 from '../../Assets/Brand/36.png';

const serviceData = [
    {
        icon: img1,
        title: 'Residential Cleaning',
        description: 'Trust our experienced team to keep your home immaculate with our comprehensive residential cleaning services',
        link: '/',
    },
    {
        icon: img2,
        title: 'Commercial Cleaning',
        description: ' Maintain a pristine work environment with our professional commercial cleaning services',
        link: '/',
    },
    {
        icon: img3,
        title: 'Janitorial Services',
        description: 'Keep your facilities clean and hygienic with our reliable janitorial services',
        link: '/',
    },
    {
        icon: img4,
        title: 'Specialized Cleaning',
        description: ' Rely on our expertise for specialized cleaning needs, including carpet cleaning, window washing, and post-construction cleanup',
        link: '/',
    },
    {
        icon: img5,
        title: 'Move-In/Move-Out Cleaning',
        description: ' Rely on our expertise for specialized cleaning needs, including carpet cleaning, window washing, and post-construction cleanup',
        link: '/',
    },
    {
        icon: img6,
        title: 'Eco-Friendly Options',
        description: ' Choose our eco-friendly cleaning options for a sustainable approach to cleanliness',
        link: '/',
    },
];

const Card = () => {
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
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Services <span className='text-yellow-400'>we offer</span>
                </h2>
                <ul className="mt-10 text-center grid gap-12 lg:grid-cols-3 md:grid-cols-2">
                    {serviceData.map((service, index) => (
                        <li
                            key={index}
                            className="rounded-xl px-6 py-8 bg-base-300 shadow-lg hover:shadow-lg hover:text-yellow-300 transform hover:translate-y-[-10px] transition duration-300 ease-in-out"
                        >
                            <a href={service.link} className="group block">
                                <img src={service.icon} alt="" className="mx-auto w-[200] object-cover" />
                                <h3 className=" font-display text-xl font-semibold group-hover:text-primary-500">
                                    {service.title}
                                </h3>
                                <p className=" text-sm text-gray-200 leading-6 text-center text-secondary-500 ">{service.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
