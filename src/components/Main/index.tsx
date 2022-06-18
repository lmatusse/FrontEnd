import React from "react";
import { useState } from "react";

import './index.css';

import { Container, Header, NewOrderButton } from "./styles";
import { Table, Modal, Button, Row, Col, Form } from "react-bootstrap";

const Main = () => {
  const [showDetails, setShowDetails] = useState(false);
  const hideOrderDetails = () => setShowDetails(false);
  const showOrderDetails = () => setShowDetails(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
    </>
  );
};

export default Main;
