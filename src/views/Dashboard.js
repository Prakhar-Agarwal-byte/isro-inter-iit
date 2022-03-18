import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
// core components
import WithFluxData from "hoc/WithFluxData";
import Chart from "../components/Chart";
import { useState } from "react";

function Dashboard({ masterChart, AChart, BChart, CChart, XChart, MChart }) {
  const types = ["Type A", "Type B", "Type C", "Type X", "Type M"];
  const [type, setType] = useState("Type A");
  let data;
  if (type === "Type A") data = AChart;
  else if (type === "Type B") data = BChart;
  else if (type === "Type C") data = CChart;
  else if (type === "Type X") data = XChart;
  else data = MChart;
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Flux</CardTitle>
                <p className="card-category">24 Hours flux</p>
              </CardHeader>
              <CardBody>
                <Chart data={masterChart} chartType=""></Chart>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">Rise Time</p>
                  <CardTitle tag="p"></CardTitle>
                  <p />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">Peak Time</p>
                  <CardTitle tag="p"></CardTitle>
                  <p />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">Decay Time</p>
                  <CardTitle tag="p"></CardTitle>
                  <p />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <div className="numbers">
                  <p className="card-category">Peak Flux</p>
                  <CardTitle tag="p"></CardTitle>
                  <p />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Flare classification statistics</CardTitle>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                {/* <Pie
									data={dashboardEmailStatisticsChart.data}
									options={
										dashboardEmailStatisticsChart.options
									}
								/> */}
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle" style={{ color: "#6bd098" }} /> A{" "}
                  <i className="fa fa-circle" style={{ color: "#f17e5d" }} /> B{" "}
                  <i className="fa fa-circle" style={{ color: "#fcc468" }} /> C{" "}
                  <i className="fa fa-circle" style={{ color: "#d296da" }} /> X{" "}
                  <i className="fa fa-circle" style={{ color: "#72b3b3" }} /> M
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Flare distribution</CardTitle>
                {types.map((t) => (
                  <Button
                    color="primary"
                    outline={t !== type}
                    onClick={() => setType(t)}
                  >
                    {t}
                  </Button>
                ))}
              </CardHeader>
              <CardBody>
                <Chart data={data} chartType={type} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WithFluxData(Dashboard);
