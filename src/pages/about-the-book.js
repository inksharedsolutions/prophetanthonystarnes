import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook1 from '../static/books/main_book.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'prophet-anthony-starnes',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
                 <Helmet title="Books | Prophet Anthony Starnes"/>
		 		<Nav />
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Books`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Another Jesus Movement`,
                                    spanFirst: ``,
                                    imgSrc: FrontBook1,
                                    id:'misha-and-phoebe',
                                    content:
                                    `
                                    <p>
                                    ANOTHER JESUS MOVEMENT is a documented record of spiritual gifts including prophecies, words of knowledge and words of wisdom that were given by God to the New Testament Prophet Anthony Starnes as evidence that God still speaks today about the past, present, and future...
                                    </p> 
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/another-jesus-movement/',
                                        barnes: 'https://www.barnesandnoble.com/w/another-jesus-movement-prophet-anthony-starnes/1131711216?ean=9781643459837',
                                        amazon :'https://www.amazon.com/Another-Movement-Prophet-Anthony-Starnes-ebook/dp/B0872H4F8M/ref=sr_1_1?dchild=1&keywords=9781643459837&qid=1588018124&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Another-Movement-Prophet-Anthony-Starnes/dp/1643459821/ref=sr_1_1?dchild=1&keywords=9781643459820&qid=1588018143&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/another-jesus-movement-prophet-anthony-starnes/1131711216?ean=9781643459820',
                                        booksamillion:'https://www.booksamillion.com/p/Another-Jesus-Movement/Prophet-Anthony-Starnes/9781643459820?id=8049069540563&_ga=2.78106260.144254833.1606293192-2145380449.1604906972',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;