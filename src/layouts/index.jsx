import Link from 'next/link';
import menuHome from './menuHome.json';
import FirstHeader from '@/components/organisms/firstHeader/FirstHeader';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Layout = ({ children }) => (
  <>
    <FirstHeader />
    <a href='/api/auth/login'>Login</a>
    <ul>
      {menuHome.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
    {children}
  </>
);

export default withPageAuthRequired(Layout);
