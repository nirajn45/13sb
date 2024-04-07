import React from 'react';

const CUMain = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Div - Text Content */}
                <div className="md:w-1/2 p-10">
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        <span className='text-yellow-400'>Get in</span> Touch
                    </h2>
                    <p className="text-lg text-gray-200">
                    We're here to make your space shine! Whether it's your home or office, <span className='font-bold text-yellow-500 px-2'>our professional cleaning</span>
                     services ensure a pristine environment. Contact us today for a free estimate or to schedule a
                      cleaning appointment.
                    </p>
                    <p className="text-lg text-gray-200 mt-4">
                    experience the difference our attention to detail and personalized service can make!
                    </p>
                </div>

                {/* Right Div - Contact Form */}
                <div className="md:w-1/2 p-10">
                    <form className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 ">
                            Contact Us
                        </h2>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border bg-gray-300 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-300 p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full bg-gray-300 p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.545827406161!2d76.79421371512939!3d30.64675493166722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb27cb386e73%3A0xa1d405520e78e8a!2sTrishla%20City!5e0!3m2!1sen!2sin!4v1689660840242!5m2!1sen!2sin" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default CUMain;
