import Layout from '../components/layout'
import { getAllPostIds2, getPostData } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { pagesDirectory } from '../lib/posts'
import { useRouter } from 'next/dist/client/router'

export default function Page({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  const router = useRouter()
  console.log('router query', router.query)

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>Rendering from [...page]</h1>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds2('bar')

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params
  console.log('page', page)
  const lookup = Array.isArray(page) ? page.slice(-1).pop() : page
  const postData = await getPostData(lookup, pagesDirectory)

  return {
    props: {
      postData
    }
  }
}
