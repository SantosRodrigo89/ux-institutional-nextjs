import Layout from "@/layouts";
import '../theme/global.css'

export const metadata = {
  title: "A&B :: Areias e Britas",
  icons: {
    icon: "/img/url.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body>
        <Layout> {children} </Layout>
      </body>
    </html>
  );
}

export default  RootLayout