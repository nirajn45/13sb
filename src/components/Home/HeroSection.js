import React from "react";

const HeroSection = () => {
    return (
        <div className="hero min-h-screen relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/552c09e0e4b04e8c94c1739c/1483656851502-I4DQ5GXG0TS09MZOBNEA/6088292_original-min.jpg?format=2500w')", opacity: "0.3"}}></div>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center relative z-10">
                <div className="mt-48 my-48 max-w-[70%]">
                    <h1 className="text-5xl font-bold text-white text-center">Experience the <span className="text-yellow-400">Power of Our Cleaning</span> Services</h1>
                    <p className="py-6 text-white">Providing comfort and tranquility. Seeking refuge in the familiar <span className="text-yellow-400 font-bold"> Delighting in simplicity and grace</span> Embracing authenticity and warmth.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;