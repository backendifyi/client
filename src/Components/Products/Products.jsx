import React from 'react'
import { Col, Row, Card } from "react-bootstrap"
import EmailBoxImg from "../../assets/undraw_mailbox_re_dvds.svg"

import "./Products.css"

const Products = () => {
  return (
    <>
      <center>
        <div className="workingCardTitle">Our Products</div>
      </center>
      <Row>
        <Col xl={6} lg={6} sm={0} xs={0}>
          <center>
            <img src={EmailBoxImg} alt="" className="emailBoxImg" />
          </center>
        </Col>
        <Col>
          <Card>
            <Card.Title className="productTitle">EmailBox</Card.Title>
            <Card.Body className='productData'>
              <p>
                Introducing Emailbox, the innovative product from Backendifyi
                that streamlines email form handling for your applications. With
                Emailbox, you get access to a powerful API that effortlessly
                manages email addresses submitted through your forms.
              </p>
              <p>
                Unlock the true potential of your email forms with Emailbox from
                Backendifyi. Sign up now and experience the convenience of
                automated email form handling. Empower your application with
                Emailbox and take email management to the next level. 
              </p>
              <p>  
                Say
                goodbye to manual validation and monitoring; Emailbox takes care
                of it all.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Products