import React from "react";
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        vien nguyen.
      </Link>
      <ul className="menu">
        <CustomLink to="/home" className="link_item">
          Home
        </CustomLink>

        <CustomLink to="/about" className="link_item">
          About
        </CustomLink>

        <CustomLink to="/portfolio" className="link_item">
          Portfolio
        </CustomLink>

        <CustomLink to="/contact" className="link_item">
          Contact
        </CustomLink>
        <Link to="/login" className="login">
          <i class="bx bx-user-circle"></i>
        </Link>
      </ul>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  // Đặt điều kiện để nút Home luôn có lớp active
  const className = isActive ? "item active" : "item";
  return (
    <li className={className}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
