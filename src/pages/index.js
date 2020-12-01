import React from "react"
import { Helmet } from "react-helmet"

//components
import Layout from "../components/layout"
import Navigation from '../components/nav';
import Banner from '../components/banner';
import Book from '../components/index-book';
import Author from '../components/index-author';

const IndexPage = (props) => (
  <Layout>
    <Helmet title="Home | Prophet Anthony Starnes"/>
    <Navigation />
    <Banner />
    <Book />
    <Author />
  </Layout>
)

export default IndexPage
