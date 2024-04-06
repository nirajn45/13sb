import React from 'react'
import img1 from '../../Assets/Brand/299310.png'
import img2 from '../../Assets/Brand/299310.png'
import img3 from '../../Assets/Brand/299310.png'
import img4 from '../../Assets/Brand/299310.png'
import img5 from '../../Assets/Brand/299310.png'
import img6 from '../../Assets/Brand/299310.png'
const serviceData = [
    {
        icon: img1,
        title: ' dummy 1',
        description:
            '  lorem ipsum dolor sit amet, con lorem ipsum dolor sit ametlorem ipsum dolor sit amet, con lorem ipsum dolor sit amet',
        link: '/',
    },
    
    {
        icon: img2,
        title: ' dummy 1',
        description:
            '  lorem ipsum dolor sit amet, con lorem ipsum dolor sit ametlorem ipsum dolor sit amet, con lorem ipsum dolor sit amet',
        link: '/',
    },

    {
        icon: img3,
        title: ' dummy 1',
        description:
            '  lorem ipsum dolor sit amet, con lorem ipsum dolor sit ametlorem ipsum dolor sit amet, con lorem ipsum dolor sit amet',
        link: '/',
    },

    {
        icon: img4,
        title: ' dummy 1',
        description:
            '  lorem ipsum dolor sit amet, con lorem ipsum dolor sit ametlorem ipsum dolor sit amet, con lorem ipsum dolor sit amet',
        link: '/',
    },

    {
        icon: img5,
        title: ' dummy 1',
        description:
            '  lorem ipsum dolor sit amet, con lorem ipsum dolor sit ametlorem ipsum dolor sit amet, con lorem ipsum dolor sit amet',
        link: '/',
    },

    {
        icon: img6,
        title: ' dummy 1',
        description:
            '  lorem ipsum dolor sit amet, con lorem ipsum dolor sit ametlorem ipsum dolor sit amet, con lorem ipsum dolor sit amet',
        link: '/',
    },
];

const Card= () => {
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
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-black md:text-4xl">
                Services we offers 
                </h2>
              
                <ul   className="mt-8  text-center h-3/4 grid gap-12 lg:grid-cols-3 md:grid-cols-2 ">
                    {serviceData.map((service, index) => (
                        <li
                            key={index}
                            className="rounded-xl px-6 py-8 bg-white shadow-md hover:shadow-lg hover:text-yellow-300 transform hover:translate-y-[-10px] transition duration-300 ease-in-out"
                        >
                            <a href={service.link} className="group block">
                                <img src={service.icon} alt="" className="mx-auto h-40 w-40" />
                                <h3 className="my-3 font-display text-xl font-semibold group-hover:text-primary-500 ">
                                    {service.title}
                                    
                                </h3>
                                <p className="mt-3.5 text-sm text-slate-700 leading-6 text-secondary-500 text-justify">{service.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Card