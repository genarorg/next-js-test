import Layout from '../components/layout'
import { getAllPostIds, getAllPostIds2, getPostData } from '../lib/posts'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { pagesDirectory } from '../lib/posts'

export default function Page({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
