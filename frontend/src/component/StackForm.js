import React from "react";
import {Button, Col, Form, Input} from "antd";
import {addStack} from "../redux/project/actionCreator";
import {useDispatch} from "react-redux";

const StackForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStack(form.getFieldsValue()));
        form.resetFields()
    };
    return (
        <Form
            name="stack"
            form={form}
            layout="vertical"
        >
            <Form.Item
                label="stack"
                name="value"

                rules={[{required: true, message: 'Please input your stack value!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form>


    )
}

export {StackForm}