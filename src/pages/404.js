import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h1>Você se perdeu e caiu na página 404 :O</h1>{" "}
      <Link href="/">Ir para a Home Page</Link>
    </>
  );
}
