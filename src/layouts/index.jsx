import Link from "next/link";
import menuHome from "./menuHome.json";
import FirstHeader from "@/components/organisms/firstHeader/FirstHeader";

const Layout = ({ children }) => (
  <>
    <FirstHeader />
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

export default Layout;
