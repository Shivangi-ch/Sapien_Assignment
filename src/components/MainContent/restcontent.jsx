import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestContent()
{
  return(
    <div>
        <h1 style={{textAlign:"left", marginBottom:"25px",marginTop:"15px"}} >Clients</h1>
        <Tabs defaultActiveKey="home" transition={false} height="5px" id="noanim-tab-example" className="mb-3" >
            <Tab  style={{fontSize:"2px"}} eventKey="home" title="Clients"></Tab>
            <Tab  style={{fontSize:"2px"}} eventKey="profile" title="Tab 2"></Tab>
            <Tab  style={{fontSize:"2px"}} eventKey="contact" title="Tab 3"></Tab>
        </Tabs>
        <div className="input-group col-md-4">
            <div> <i style={{marginTop:"30px"}} className="fa fa-search"></i></div>
            <input style={{width:"32%",marginLeft:"10px", marginTop:"20px",padding:"4px",borderColor:"grey",borderRadius:"7px",marginBottom:"20px"}}  type="search" id="example-search-input" />
            <span className="input-group-append"></span>
            <Link to="/addclient">
                <Button style={{marginLeft:"570px",marginBottom:"20px", backgroundColor:"grey", height:"40px"}}>
                    <i className="fa fa-plus"></i>  Add Lead
                </Button>
            </Link>
        </div>
    </div>
  )
}
export default RestContent;