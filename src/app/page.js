import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>
          {" "}
          VMS Areias 
        </title>
      </Head>
      <ul>
        <li>
          <Link href="/">index</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/products">products</Link>
        </li>
      </ul>
    </>
  );
}
