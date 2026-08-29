import chefLogo from "../assets/cooking.png";
function Header() {
  return <header className="header">
    <img src={chefLogo} alt="Chef" />
    <h1>Chef Claude</h1>
  </header>;
}

export default Header;
