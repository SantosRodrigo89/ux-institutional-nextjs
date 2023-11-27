import Link from "next/link";

export default function Home() {
  return (
    <>
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
