import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

import Icon from "./icon"

const CustomNavbar = ({ siteTitle }) => (
  <Navbar fixed="top" variant="light" expand="lg" className="bg-white shadow-sm">
    <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="mr-auto"
        css={{
          ".nav-link": {
            fontSize: `1.25rem`,
            paddingTop: `1.375rem`,
            paddingBottom: `1.375rem`
          },
        }}
      >
        <Link to="/" activeClassName="active">
          <Nav.Link as="span">Home</Nav.Link>
        </Link>
        <Link to="/page-2/" activeClassName="active">
          <Nav.Link as="span">Page-2</Nav.Link>
        </Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline className="mr-2">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav
        className="animated fadeIn"
        css={{
          fontSize: `1.25rem`,
        }}
      >
        <Nav.Link href="//github.com">
          <Icon name="github" />
        </Nav.Link>
        <Nav.Link href="//twitter.com">
          <Icon name="twitter" />
        </Nav.Link>
        <Nav.Link href="//linkedin.com">
          <Icon name="linkedin" />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

CustomNavbar.propTypes = {
  siteTitle: PropTypes.string,
}

CustomNavbar.defaultProps = {
  siteTitle: ``,
}

export default CustomNavbar
