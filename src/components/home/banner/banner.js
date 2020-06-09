import React from 'react';
import '../banner/banner.css';
//functional component
const Banner = () => {
    return (
        <div className = "banner">
            <div className="container-home">
            <div className="titleHomePage">
                    Feed App
                </div>
                <div className = "descriptionBanner">A place to share knowledge.</div>
            </div>

        </div>
    );
};
//Export component
export default Banner;