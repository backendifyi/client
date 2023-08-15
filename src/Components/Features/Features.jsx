import React, { useState } from 'react'
import { Card, Col, Row } from "react-bootstrap"
import { AiOutlineApi } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi"
import { MdOutlineAnalytics } from "react-icons/md"
import { LuTimer } from "react-icons/lu" 

import "./Features.css"
import rdimage from "../../assets/rapid-development.png"
import eiimage from "../../assets/easy-interaction.png"
import baimage from "../../assets/analytics.png"
import arlimage from "../../assets/api-throttle.png"


const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState("Easy Integration");

  const featuresData = [
    {
      id: 1,
      title: "Easy Integration",
      content:
        "The best BaaS platforms provide developer-friendly APIs, SDKs, and documentation, simplifying the integration process. Additionally, a user-friendly dashboard or console allows developers to manage and monitor their backend services efficiently, enabling easy maintenance and troubleshooting.",
      image: eiimage,
    },
    {
      id: 2,
      title: "Rapid Development",
      content:
        "A strong BaaS platform should provide pre-built backend components and services that allow developers to quickly integrate complex functionality into their applications. This feature enables developers to focus more on building frontend user experiences and reduces the time required for backend development and deployment.",
      image: rdimage,
    },
    {
      id: 3,
      title: "Built-in Analytics",
      content:
        "Providing built-in analytics and monitoring tools within your Backendifyi platform allows developers to track application performance, monitor user behavior, and identify potential issues. Comprehensive analytics empower developers and businesses to make data-driven decisions for improvements and optimizations.",
      image: baimage,
    },
    {
      id: 4,
      title: "API Rate Limiting",
      content:
        "Implementing API rate limiting and throttling controls prevents abuse and ensures fair usage of your backend services by limiting the number of requests from individual users or IP addresses. This will help you to server quality clients and the correct audience.",
      image: arlimage,
    },
  ];

  const handleFeatureClick = (featureTitle) => {
    setSelectedFeature(featureTitle);
  };

  return (
    <Card className="featuresCard">
      <center>
        <Card.Title className="featuresCardTitle">
          Why you and your team will love Backendifyi
        </Card.Title>
      </center>
      <Card.Body>
        <Row>
          <Col xl={4}>
            {featuresData.map((feature, index) => (
                <Row className="featuresListRow" key={feature.id}>
                  <Col xl={2} lg={2} sm={2} xs={2}>
                    {feature.id === 1 ? (
                      <>
                        <AiOutlineApi size="2.5em" color="#6742f1" />
                      </>
                    ) : (
                      <>
                        {feature.id === 2 ? (
                          <>
                            <BiCodeBlock size="2.3em" color="#6742f1" />
                          </>
                        ) : (
                          <>
                            {feature.id === 3 ? (
                              <>
                                <MdOutlineAnalytics
                                  size="2.5em"
                                  color="#6742f1"
                                />
                              </>
                            ) : (
                              <>
                                <LuTimer size="2.5em" color="#6742f1" />
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </Col>
                  <Col xl={6} lg={6} sm={6} xs={6} key={index}>
                    <div className="featuresListTitle">
                      <a onClick={() => handleFeatureClick(feature.title)}>
                        {feature.title}
                      </a>
                    </div>
                  </Col>
                </Row>

            ))}
          </Col>
          <Col xl={8}>
            <Card className="dataCard">
                {selectedFeature && (
                  <>
                    {featuresData.map((feature) =>
                      feature.title === selectedFeature ? (
                        <Row key={feature.id}>
                          <Col
                            xl={6}
                            lg={6}
                            xs={12}
                            sm={12}
                            className="briefData"
                          >
                            <Card.Title>{selectedFeature}</Card.Title>
                            <p className="featureDataTitle" key={feature.title}>
                              {feature.content}
                            </p>
                          </Col>
                          <Col>
                            <center>
                              <img src={feature.image} className="featureImg" />
                            </center>
                          </Col>
                        </Row>
                      ) : null
                    )}
                  </>
                )}
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Features