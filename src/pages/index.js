import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";

import SEO from "../components/seo"
import Header from "../components/header"
import TestComp from "../components/TestComp"

const IndexPage = () => {
  return (
    <>
      <SEO title={"Martin-John Hearty"} />
      <Helmet>
        <meta name="msapplication-TileColor" content="#7e01fe" />
      </Helmet>
      <Header />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <div>
          <h1 className={"my-title big"}>CSS 4 Module W3C Selectors</h1>
        </div>
        <div>
          <h1>Test# 1 of 172</h1>
        </div>
        <input type={"checkbox"} />
      </div>
      <TestComp />

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <div>
          <h2>Hi people</h2>
          <h3>Hi people</h3>
        </div>
        <div>
          <h2>Hi people</h2>
          <h3>Hi people</h3>
        </div>
        <div>
          <h2>Hi people</h2>
          <h3>Hi Peter</h3>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default IndexPage
