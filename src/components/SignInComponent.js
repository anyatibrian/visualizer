import React from 'react'
import { Row, Col, Form, Icon, Input, Button } from 'antd'
import Logo from '../assets/logo.jpg'

export const SignInComponent = ({
    handleSubmit,
    form: {
        getFieldDecorator
    }
}) => {
    return (
        <div>
            <Row>
                <Col span={9}>
                </Col>
                <Col span={6} className="loginContainer">
                    <img src={Logo} height="200px" style={{ marginLeft: '50px' }} />
                    <Form onSubmit={handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, message: 'username is required'
                                }]
                            })(
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="email-address"
                                    suffix={
                                        <Icon type="mail"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    } />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'password  is required'
                                }]
                            })(
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    suffix={<Icon type="key"
                                        style={{
                                            color: 'rgba(0,0,0,.25)'
                                        }}>
                                    </Icon>} />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="danger" size="large" htmlType="submit">Login</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={9}>
                </Col>
            </Row>
        </div>
    )
}
