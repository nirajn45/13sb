import React from 'react'
import img from '../assets/home/homeheader.jpg'
const Header = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 ">
                    <div>
                        <img src={img} width="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header