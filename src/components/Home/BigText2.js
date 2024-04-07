import React from "react";
import img3 from '../assets/home/img3.png'
const BigText2 = () => {
    return(
        <>
        <div className="hero min-h-72 bg-base-200">
        <div className="hero-content text-center">
            <div className="mt-12">
                <h1 className="text-6xl font-bold text-gray-200">Services <span className="text-yellow-400">We</span> Providing</h1>
            <img src={img3} alt="" className="w-full mt-16 my-8"/>
            </div>
        </div>
        </div>
        </>
    )
}
export default BigText2;