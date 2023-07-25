// pages/index.js

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
    return (
        <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Hello, I am <strong>Mark</strong>. When I am not being an academic, I am a coding fiend! You can reach me at{' '}<Link href="mailto://mjnijland@gmail.com" target="_blank">Gmail</Link></p>
            <p>
                (This is a sample website - I've built it as part of{' '}
            <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
            </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                </small>
                </li>
            ))}
            </ul>
        </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}