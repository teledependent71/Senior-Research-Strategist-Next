import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Senior Research Strategist</title>
          <meta property="og:title" content="Senior Research Strategist" />
        </Head>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
