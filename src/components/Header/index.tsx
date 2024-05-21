import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/">
        <span className="navbar-brand">Início</span>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products">
          <span className="nav-link me-2">Produtos</span>
        </Link>
        <Link href="/cart">
          <span className="nav-link">Carrinho</span>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
