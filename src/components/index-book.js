import React from 'react'
import {Link} from 'gatsby';
import FrontBook from '../static/books/main_book.png';

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                {/* <div className="wrapper">
                    <div className="title">
                        <div className="rect"></div>
                        <h1>Featured Book</h1>
                    </div>
                </div> */}

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="content-wraps">

                            {/* <span className="italic-tag">Read, listen, and learn in various formats</span> */}

                            <h1>Another Jesus Movement</h1>
                            <span></span>
                            <p>
                            ANOTHER JESUS MOVEMENT is a documented record of spiritual gifts including prophecies, words of knowledge and words of wisdom that were given by God to the....
                            </p>
                            <button><Link to="/about-the-book">Read More</Link></button>
                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook} alt="featured-book"/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook