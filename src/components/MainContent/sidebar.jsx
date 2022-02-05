import React from "react";
import {Nav} from "react-bootstrap";
import "./style.css"

const Sidebar = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link style={{fontSize:"14px" , color:"white"}} href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{fontSize:"14px",color:"white"}} eventKey="link-1">Chats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{fontSize:"14px", color:"white"}} eventKey="link-2">Schedule</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{fontSize:"14px", color:"white"}} eventKey="link-2">Clients</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{fontSize:"14px", color:"white"}} eventKey="link-2">Bookings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{fontSize:"14px", color:"white"}} eventKey="link-2">Programs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{fontSize:"14px", color:"white"}} eventKey="link-2">Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{fontSize:"14px", color:"white"}}eventKey="link-2">Finance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{fontSize:"14px", color:"white"}}eventKey="link-2">Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{fontSize:"14px", color:"white"}}eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{fontSize:"14px", color:"white"}}eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  style={{fontSize:"14px", color:"white"}}eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            
            </Nav>
          
        </>
        );
  };
  export default Sidebar