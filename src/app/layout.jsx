import Layout from "@/layouts";

export const metadata = {
  title: "A&B :: Areias e Britas",
  icons: {
    icon: "/img/url.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout> {children} </Layout>
      </body>
    </html>
  );
}
