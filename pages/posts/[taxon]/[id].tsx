import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { postsDirectory } from '../../../lib/posts'
import { useRouter } from 'next/dist/client/router'

export default function Post({
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
        <h1>Rendering from posts/[taxon]/[id]</h1>    
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds('foo')

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string, postsDirectory)
  return {
    props: {
      postData
    }
  }
}
