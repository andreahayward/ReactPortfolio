import React from "react";
import {Card,CardImg, CardTitle, CardText,CardBody, CardHeader
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Wrapper from './Wrapper';


function Projects(props) {
  return (
    <div className="container">
      <Wrapper>
      <div className="card portfolio">
        <div className="img-container">
          <Card>
            <CardHeader className="header text-light bg-primary">{props.name}</CardHeader>
            <CardImg top width="100%" src={props.picture} alt="website image" className="img-size"/>
              <CardBody className="card body">
  
                <CardTitle 
                  style={{fontSize: "18px", fontWeight: "bold"}}>
                  DESCRIPTION:
                </CardTitle>
  
                <CardText 
                  style={{fontSize:"18px"}}> 
                  {props.description} 
                </CardText>
  
                <CardTitle 
                  style={{fontSize: "18px", fontWeight: "bold"}}>
                  TECHNOLOGIES USED:
                </CardTitle>
  
                <CardText> 
                  {props.tech }
                </CardText>
  
                <div className="portfolio-link">
                  <a
                    className="external-links"
                    id="github"
                    style={{fontSize: "18px", fontWeight: "bold", color:"#287bff",textAlign:"center"}}
                    tag={Link} href={`${props.github}`}
                    rel="noopener noreferrer" 
                    target="_blank"
                  > 
                     GITHUB 
                  </a>
                  | 
                  <a
                    className="external-links"
                    id="website"
                    style={{fontSize: "18px", fontWeight: "bold", color:"#287bff", textAlign:"center"}}
                    tag={Link} 
                    href={`${props.site}`}
                    rel="noopener noreferrer" 
                    target="_blank"
                    > 
                      DEPLOYED SITE
                  </a>
                </div>
  
              </CardBody>
          </Card>
        </div>
      </div> 
  
      </Wrapper>


    </div>
    
  );
};
  
  export default Projects