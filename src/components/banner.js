import React from 'react';
import {Link} from 'gatsby';
// import  ImgBanner from '../../static/banner/banner.jpeg';

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="banner-text">
                                <h1>
                                    Another Jesus Movement
                                </h1>
                                <p>is a documented record of spiritual gifts including prophecies, words of knowledge and words of wisdom that were given by God to the New Testament Prophet Anthony Starnes</p>
                            </div>
                            <br />
                            <button><Link to="/about-the-book">Read More</Link></button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;