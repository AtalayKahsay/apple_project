import { Link } from "react-router-dom"

function NavbarList({ LinkURL, LinkName }) {
  return <Link to={LinkURL}>{LinkName}</Link>;
}

export default NavbarList