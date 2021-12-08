import Head from "next/head" 
import FooterList from "../components/footer/FooterList";
import { Fragment } from "react";
export default function Home({data}) {
  return (
    <Fragment>
      <Head>
        <title>Footer App Main</title>
        <meta name='description' content="Browse a hug list of highly active React to do list!!"></meta>
      </Head>
      <FooterList footers={data} />
      
    </Fragment>
    )
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()


  return { props: { data } }
  
}

