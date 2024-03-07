import Layout from '@/layouts';
import '../theme/global.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: 'A&B :: Areias e Britas',
  icons: {
    icon: '/img/url.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <UserProvider>
        <body>
          <Layout> {children} </Layout>
        </body>
      </UserProvider>
    </html>
  );
};

export default RootLayout;
