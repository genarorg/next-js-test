import React, { FC } from 'react'
import Link from 'next/link'

const Home: FC = () =>
  <>
    <p>Test links using anchor links</p>
    <ol>
      <li><a href={`/shop/backpacks/48-green`}>/shop/backpacks/48-green</a></li>
      <li><a href={`/shop/specials/summer-sale`}>/shop/specials/summer-sale</a></li>
    </ol>

    <p>Test links <code>next/link</code></p>
    <ol>
      <li>
        <Link href={`/shop/backpacks/48-green`}>
          <a>/shop/backpacks/48-green</a>
        </Link>
      </li>
      <li>
        <Link href={`/shop/specials/summer-sale`}>
          <a>/shop/specials/summer-sale</a>
        </Link>
      </li>
    </ol>
  </>

export default Home
