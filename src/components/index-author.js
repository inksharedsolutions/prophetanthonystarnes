import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../static/author/dummy.png';

const IndexAuthor = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} alt="author-profiles"/>
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        {/* <p className="italic-tag margin-off">Well done, good and faithful servant</p> */}
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                        Back when I had just become a teenager, my dad gave me his old family Victrola complete with some old records from his family in Virginia. Some of these old records were gospels songs of famous quartets like "The Carter Family," "The Chuck Wagon Gang," and "The Smokey Mountain Boys." Of course, that type of music was different from what we heard over the radio back then and even now.<br />
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                Read more
                            </Link>
                        </p>
                        <p className="margin-off auth-name">
                            Prophet Anthony Starnes
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default IndexAuthor 