import React from 'react';

const Cleaning = () => {
    return (
        <div>
            <section className="py-3 my-3 text-center" id="about">
                <div className="w-4/5 m-auto">
                    <div className="my-3 py-3 text-center">
                        <h3 className="text-2xl font-normal ">
                            13Sb Strives to <span className='text-yellow-500 font-bold'>Make Cleanliness</span> Accessible for Everyone
                        </h3>
                        <p className="text-lg text-gray-400 font-normal mt-4"> Experience the 13Sb difference today and discover the <span className='font-bold text-yellow-500'>joy of a sparkling clean environment</span> that enhances your quality of life</p>
                    </div>
                    <div className="py-3">
                        <i className="fas fa-quote-left"></i>
                        <div className="text-lg text-white px-5 py-2 mb-2">
                            <span className="text-yellow-400">
                                13Sb is dedicated to providing top-quality cleaning services to homes and businesses, ensuring a pristine and hygienic environment for our clients.
                            </span>
                            <br />
                            Our mission is to make cleanliness and hygiene accessible to everyone, creating healthier and happier spaces for families and employees alike. We understand the importance of a clean environment in promoting well-being and productivity, and we're committed to making a positive impact on the communities we serve.
                        </div>
                        <i className="fas fa-quote-right"></i>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Cleaning;
