import React from 'react';
import {Table,Button,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './tables.css';

function ClientTable()
{
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a href="" ref={ref} onClick={e => { e.preventDefault(); onClick(e); }} >
          <i class="fa fa-ellipsis-v"></i>
          {children}
        </a>
      ));
    return(
        <div>
            <Table responsive="md" >
                <thead >
                    <tr>
                    <th style={{marginBottom:"90px"}}>Lead Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{new Date(Date.now()).toLocaleString().slice(0,20)}</td>
                        <td>Sapiens</td>
                        <td>hello@sapiens.com</td>
                        <td>Active</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>{new Date(Date.now()).toLocaleString().slice(0,20)}</td>
                        <td>Sapiens</td>
                        <td>hello@sapiens.com</td>
                        <td>Active</td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>{new Date(Date.now()).toLocaleString().slice(0,20)}</td>
                        <td>Sapiens</td>
                        <td>hello@sapiens.com</td>
                        <td>Active</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>{new Date(Date.now()).toLocaleString().slice(0,20)}</td>
                        <td>Sapiens</td>
                        <td>hello@sapiens.com</td>
                        <td>Active</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td>{new Date(Date.now()).toLocaleString().slice(0,20)}</td>
                        <td>Sapiens</td>
                        <td>hello@sapiens.com</td>
                        <td>Active</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default ClientTable;