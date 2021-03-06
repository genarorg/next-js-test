import React, { FC, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/dist/client/router'

type Props = {
  title: string
}

const Page: FC<Props> = ({ title }) => {
  console.debug(useRouter()?.query)

  return (
    <>
      <h3>{title}</h3>
      <p>Rendered using <b style={{color: 'blue'}}>[...page].tsx</b></p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{
    params: {
      page: ['shop', 'specials', 'summer-sale'],
    }
  }],
  fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    title: 'Save big on our Summer Sale!'
  }
})

export default Page
