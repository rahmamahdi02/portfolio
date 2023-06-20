import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                {/*
                    Use `<Link />` component instead of `<Nav.Link>` or something because we want the linking to be
                    handled by react-router and not the browser.
                */}
                <Link className="navbar-brand" to="/">Vlad&apos;s Template</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}

export default NavBar;
