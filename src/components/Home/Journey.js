import React from "react";

const Journey = () => {
    return (
        <div className="flex flex-wrap justify-center items-center glass">
            {/* Left Side - Our Services */}
            <div className="w-full lg:w-1/2 p-5 ">
                <div className="mt-14 ml-28">
                    <h1 className="text-5xl font-bold text-white"><span className="text-yellow-400">Our</span> Journey</h1>
                    
                    <h2 className="text-xl font-semibold my-5">Embark on a transformative journey through the years with our premier cleaning services company. Witness our evolution as we've meticulously crafted innovative solutions and honed our expertise to redefine cleanliness standards</h2>
                   
                
                
                </div>
            </div>

            {/* Right Side - Timeline */}
            <div className="w-full lg:w-1/2 p-5">
                <ul className="timeline justify-center mt-8">
                    <li>
                        <div className="timeline-start timeline-box">2021</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className="bg-yellow-400" />
                    </li>
                    <li>
            <hr className="bg-yellow-400"/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">2022</div>
              <hr className="bg-yellow-400"/>
            </li>
            <li>
              <hr className="bg-yellow-400"/>
              <div className="timeline-start timeline-box">2023</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">2024</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start timeline-box">2025</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
            </li>
          </ul>
        </div>
   </div>
    );
}

export default Journey;
