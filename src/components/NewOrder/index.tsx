import React, { useState } from 'react';

import { Button, Modal, Row, Col, Form } from 'react-bootstrap';

const NewOrder: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Modal
        show={show}
        centered
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={7}>
                  <Form.Group className="mb-3 " controlId="formName">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
                <Col sm={5}>
                  <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Contact Phone</Form.Label>
                    <Form.Control type="number" placeholder="() xxxxx - xxxx" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Form.Group className="mb-3 " controlId="formDescription">
                    <Form.Label>Order Description</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Form.Group controlId="formCategory">
                    <Form.Label>Select the order category</Form.Label>
                    <Form.Select aria-label="" className="mb-3">
                      <option value="0">Hidraulica</option>
                      <option value="1">Infiltracao</option>
                      <option value="2">Electrica</option>
                      <option value="3">Retirada de mobilia</option>
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
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Form.Group className="mb-4 " controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Form.Group className="mt-3 " controlId="formDeadline">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="date" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col size={12} className="sendButton">
            <Button variant="primary" type="submit">
              Save
            </Button>
            </Col>
          </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewOrder;