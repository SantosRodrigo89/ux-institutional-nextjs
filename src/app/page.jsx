const { default: HomeTemplate } = require("@/templates/home");

const HomePage = () => (
  <HomeTemplate/>,
  <a href="/api/auth/login">Login</a>,
//  <a href="/api/auth/logout">Logout</a>
)

export default HomePage