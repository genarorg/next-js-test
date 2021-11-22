import React, { FC, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/dist/client/router'

type Props = {
  title: string
}

const Product: FC<Props> = ({ title }) => {
  console.debug(useRouter()?.query)

  return (
    <>
      <h3>{title}</h3>
      <p>Rendered using <b style={{color: 'green'}}>shop/[taxon]/[id].tsx</b></p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{
    params: {
      id: '48-green',
      taxon: 'backpacks',
    }
  }],
  fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    title: `Shop: ${params.id} / ${params.taxon}`
  }
})

export default Product
