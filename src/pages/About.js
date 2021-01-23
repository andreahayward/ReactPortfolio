import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
//import Skill from "../components/Skill"

function About() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1521449256184-170b4a4c437c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80">
        <h1>Andrea Hayward</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am an experienced Client Delivery Manager with a demonstrated history of customer satisfaction from working in both the e-commerce and telecom industries. I am currently enrolled in a Full Stack Web Development boot camp course with the hopes of becoming a full stack web developer. I hope to be able to combine my current skill set with the new skills and knowledge I acquire over this course to further enchance my current position. I would like to combine my current customer service work with my newfound development knowledge to provide a more technical experience to my customers and employer. When I am not working or practicing my coding skills I am busy keeping up with my 3 dogs, peddling for miles on my Peloton, and watching Food Network for new and exciting recipes that I will never make!
            </p>
          </Col>
        </Row>
      </Container>
      {/* <Skill /> */}
    </div>
  );
}

export default About;