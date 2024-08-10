import React from 'react'
import "./AdminLayout.css";
import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <>
    <header>
      <nav className="nav">
        <ul className="AdminNav">
          <li className="li" style={{listStyle:"none"}}>
            <Link to="/admin/user" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex" }}>
                <div style={{ alignItems: "center", display: "flex" }}>
                <FaUserTie />
                </div>
                Users
              </div>
            </Link>
          </li>
          <li className="li" style={{listStyle:"none"}}>
            <Link to="/admin/contact" style={{ textDecoration: "none"}}>
            <div style={{ display: "flex", gap: "5px" }}>
            <div style={{ alignItems: "center", display: "flex" }}>
            <BiSolidContact />
            </div>
            Contacts
          </div>
            </Link>
          </li>
          <li className="li" style={{listStyle:"none"}}>
            <Link style={{ textDecoration: "none" }}>Services</Link>
          </li>
          <li className="li" style={{listStyle:"none"}}>
            <Link style={{ textDecoration: "none" }}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <Outlet />
    </div>
  </>
  )
}

export default AdminLayout
