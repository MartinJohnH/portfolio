import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title={"Martin-John Hearty"}/>
    <Helmet>
      <meta name="msapplication-TileColor" content="#7e01fe"/>
    </Helmet>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
