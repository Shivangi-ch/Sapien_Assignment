import './App.css';
import  Navigation  from './components/nav';
import {Container, Col, Row} from "react-bootstrap";
import Sidebar from './components/MainContent/sidebar';
import ClientContent from './components/MainContent/ClientContent';
import ClientForm from './components/MainContent/ClientForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Navigation />
		<Container fluid>
			<Row>
				<Col xs={1} id="sidebar-wrapper">      
					<Sidebar />
				</Col>
				<Col xs={10}  style={{marginLeft:"38px"}} id="page-content-wrapper">
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<ClientContent />} />
							<Route exact path="/addclient" element={<ClientForm />} />
						</Routes>
					</BrowserRouter>
				</Col> 
			</Row>
		</Container>
    </div>
  );
}

export default App;
