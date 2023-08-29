import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Senior Research Strategist</title>
          <meta
            property="og:title"
            content="test-page - Senior Research Strategist"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_rnnorj) => (
            <>
              <h1>{context_rnnorj?.name}</h1>
            </>
          )}
          initialData={props.contextRnnorjProp}
          persistDataDuringLoading={true}
          key={props?.contextRnnorjProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
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

export default TestPage

export async function getStaticProps(context) {
  const contextRnnorjProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextRnnorjProp: contextRnnorjProp?.data?.[0],
    },
  }
}
