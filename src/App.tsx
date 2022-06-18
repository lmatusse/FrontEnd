import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Modal, Row, Col, Form } from "react-bootstrap";

import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyles';

import { Container, Header, NewOrderButton,SaveOrderButton } from './styles';

const App: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const hideOrderDetails = () => setShowDetails(false);
  const showOrderDetails = () => setShowDetails(true);

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categorys, setCategorys] = useState<any>([]);
  const [ordemOne, setOrdemOne] = useState<any>([]);
  const[ordem, setOrdems]=useState<any>([]);
 
  useEffect(()=>{
    //To get Categories
      axios.get<any>("http://localhost:8080/refera/categories")
      .then((res)=>{
          setCategorys(res.data)
        }).catch(()=>{
          console.log("Erro")
        })


        // To get Ordem
        axios.get<any>("http://localhost:8080/refera/ordems")
        .then((res)=>{
            setOrdems(res.data)
            console.log(res.data)
          }).catch((e)=>{
            console.log(e)
          })
          
  },[])

  async function saveCategoria(env:any){
    env.preventDefault()
    const create={
      name:["Hidraulica","Marketing","Mecanica"]
    }
    const response=await axios.post<any>("http://localhost:8080/refera/categories/create", { ...create })
  console.log(response)
  }
  //Create new ordem
  async function saveOrdem(env: any) {

    env.preventDefault()
    const name= document.getElementById('name') as HTMLInputElement;
    const contact=document.getElementById('contact') as HTMLInputElement;
    const company=document.getElementById('company') as HTMLInputElement;
    const estateAgency=document.getElementById('estateAgency') as HTMLInputElement;
    const categoria=document.getElementById('categoria') as HTMLSelectElement;
    const deadline=document.getElementById('deadline') as HTMLInputElement;
    const description=document.getElementById('description') as HTMLInputElement;
const form_register=document.getElementById('form_register') as HTMLFormElement
    const create={
      name:name.value,
      categoriaId:categoria.value,
      contact:contact.value,
      company:company.value,
      estateAgency:estateAgency.value,
      description:description.value,
      deadline:deadline.value
    }
    const response=await axios.post<any>("http://localhost:8080/refera/ordems/create", { ...create })
    console.log(response.statusText)

    if (response.statusText === "Created") {
      alert('Sucesso')
    }
    form_register.reset();
    
  }
  return (
    <>
      <GlobalStyle />
      <Layout >
      <Container>
        <Header>
          <NewOrderButton outlined onClick={handleShow}>
            Open new order
          </NewOrderButton>
        </Header>
        <Table striped bordered hover>
          <thead>
            <tr onClick={showOrderDetails}>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Contact</th>
              <th>Agency</th>
              <th>Company</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              ordem?.map((ord: any, index: number) => (
                <tr key={index}>
                  <td>{ord.id}</td>
                  <td>{ord.name}</td>
                  <td>{ord.categoriaId}</td>
                  <td>{ord.contact}</td>
                  <td>{ord.estateAgency}</td>
                  <td>{ord.company}</td>
                  <td>{ord.deadline}</td>
                  <td>
                    
                  <a onClick={() => {
                       axios.get<any>(`http://localhost:8080/refera/${ord.id}/ordems`)
                       .then((res)=>{
                         setOrdemOne(res.data)
                         console.log(res.data)
                       }).catch((e)=>{
                         console.log(e)
                       })
                       showOrderDetails()
                       
                        }}>Details</a>
                    
                   
                    </td>
                </tr>
              ))
            }
        </tbody>
        </Table> 
        
            
          
        {/* Order Details */}
        <Modal
          show={showDetails}
          centered
          size="lg"
          onHide={hideOrderDetails}
          className="modalOrderDetails"
          
        >
          <Modal.Header closeButton className='modalHeader pt-4 pb-4 px-5'>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='px-5'>
          {
          ordemOne.map((o: any, i: number) => (
            <Row key={i}>
              <Col sm={8}>
                <Row className='mb-4'>
                  <Col sm={7} className='info-data'>
                    <label>Contact Name</label>
                    <strong>{o.name}</strong>
                  </Col>
                  <Col sm={5} className='info-data'>
                    <label>Contact Phone</label>
                    <span>{o.contact}</span>
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col sm={12} className='info-data'>
                    <label>Order Description</label>
                    <p>{o.description}</p>
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col sm={12} className='info-data'>
                    <label>Category</label>
                    <p>{o.categoriaId}</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <Row className='mb-4'>
                  <Col sm={12} className='info-data'>
                    <label>Real Estate Agency</label>
                    <strong>{o.estateAgency}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} className='info-data mb-3'>
                    <label>Company</label>
                    <strong>{o.company}</strong>
                  </Col>
                </Row>
                <Row className='mt-4'>
                  <Col sm={12} className='info-data mt-4'>
                    <label>Deadline</label>
                    <span>{o.deadline}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
   
            ))
          }
          </Modal.Body>
        </Modal>

        <Modal
          show={show}
          centered
          size="lg"
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className='modalNewOrder'
        >
          <Modal.Header closeButton className='modalHeader pt-4 pb-4 px-5'>
            <Modal.Title>New Order</Modal.Title>
          </Modal.Header>
          <Modal.Body className='px-5'>
            <Form id='form_register' onSubmit={saveOrdem}>
              <Row>
                <Col sm={8}>
                  <Row>
                    <Col sm={7}>
                      <Form.Group className="mb-3 " controlId="formName">
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control type="text" id='name' placeholder="" />
                      </Form.Group>
                    </Col>
                    <Col sm={5}>
                      <Form.Group className="mb-3"  controlId="formContact">
                        <Form.Label>Contact Phone</Form.Label>
                        <Form.Control
                          type="text" id="contact"
                          placeholder="() xxxxx - xxxx"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Form.Group className="mb-3 " controlId="formDescription">
                        <Form.Label>Order Description</Form.Label>
                        <Form.Control id='description'
                          as="textarea"
                          aria-label="With textarea"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Form.Group controlId="formCategory">
                        <Form.Label>Select the order category</Form.Label>
                        <Form.Select id='categoria' aria-label="" className="mb-3">
                       
                          {
                            categorys.map((cate:any, index:number) => (
                              <option value={cate.id} key={"chave"+index}>{cate.name}</option>
                            ))
                          }
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                
                <Col sm={4}>
                  <Row>
                    <Col sm={12}>
                      <Form.Group className="mb-3 " controlId="formAgency">
                        <Form.Label>Real Estate Agency</Form.Label>
                        <Form.Control type="text" id='estateAgency' placeholder="" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Form.Group className="mb-4 " controlId="formCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" id='company' placeholder="" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Form.Group className="mt-3 " controlId="formDeadline">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control type="date" id='deadline' placeholder="" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col size={12} className="saveButton pb-3 mt-1">
                  <SaveOrderButton type="submit">
                    Save
                  </SaveOrderButton>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
      </Layout>
    </>
  );
}

export default App;