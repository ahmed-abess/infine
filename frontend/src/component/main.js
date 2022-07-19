import React from "react";
import {Button, Col, Row} from "antd";
import {MainContent} from "./styled";
import {StackForm} from "./StackForm";
import {Stacks} from "./Stacks";
import {Operator} from "./Operator";
import {useState} from "react";

export const Main=()=>{
    const [stackval, setStackval] = useState()
    return(
        <>
            <MainContent>

            <Row className="main" >
                <Col span={24} className="formCol">  <StackForm /> </Col>
                <Col span={24} className="operator">
                   <Operator stackval={stackval} setStackval={setStackval}/>
                </Col>
                <Col span={24}> <Stacks  setStackval={setStackval}/> </Col>

            </Row>
            </MainContent>
        </>
    )
}