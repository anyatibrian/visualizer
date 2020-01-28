import React from 'react'
import { Row, Col, Icon, Button, Modal, Typography, Form, InputNumber, Input, Select } from 'antd'
const { Text } = Typography
const { Option } = Select
export const FieldDataComponent = (props) => {
    const {
        openModal,
        showModal,
        handleCancel,
        AcuteWateryDiarrhea,
        handleSubmit,
        pfa,
        form: {
            getFieldDecorator
        }
    } = props
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };
    return (
        <div>
            <Row>
                <Col span={16}></Col>
                <Col span={8} style={{ float: 'right' }}>
                    <Button type="primary" icon="export" size="large">Export</Button>
                    <Button type="primary" icon="import" size="large">Import</Button>
                    <Button type="primary" icon="printer" size="large">Print</Button>
                    <Button type="primary" icon="plus" shape="circle" size="large" onClick={openModal} ></Button>
                </Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={22}>
                    <Modal
                        title="Field Imformation"
                        visible={showModal}
                        onCancel={handleCancel}
                        onOk={handleSubmit}
                        width='70%'
                    >
                        <Form onSubmit={handleSubmit} {...formItemLayout}>
                            <Row>
                                <Col span={12} style={{ marginLeft: -50 }}>
                                    <Form.Item label="AcuteWateryDiarrhea">
                                        {getFieldDecorator('acuteWateryDiarrhea', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label='PFA'>
                                        {getFieldDecorator('pfa', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Measles">
                                        {getFieldDecorator('measles', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Ebola">
                                        {getFieldDecorator('ebola', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Yellow Fever">
                                        {getFieldDecorator('yellowFever', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label='Chikungunya'>
                                        {getFieldDecorator('chikungunya', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Rage">
                                        {getFieldDecorator('rage', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Unusual death or disease in humans">
                                        {getFieldDecorator('UnusualDeathOrDiseaseInHumans', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Unusual death or disease in animals">
                                        {getFieldDecorator('unusualDeathOrDiseaseInAnimals', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Number of Households visited">
                                        {getFieldDecorator('HouseholdsVisited', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Number of people visited">
                                        {getFieldDecorator('PeopleVisited', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Number of Voluteers">
                                        {getFieldDecorator('NumberOFVoluteers', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <InputNumber
                                                max={100}
                                                min={0}
                                                style={{ position: 'relative' }}
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Heath Area">
                                        {getFieldDecorator('healthArea', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <Select>
                                                <Option value="baita-ababiri,0.101570,32.508560"> Abaita-ababiri-Entebbe</Option>
                                                <Option value="kitoro,0.040520,32.459440 "> Kitoro-Entebbe</Option>
                                                <Option value="kitubulu,0.091358,32.497063"> Kitubulu-Entebbe</Option>
                                                <Option value="nkumba,0.086655,32.511287"> Nkumba-Entebbe</Option>
                                                <Option value="mpala,0.110739,32.501686"> Mpala-Entebbe</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Heath Zone">
                                        {getFieldDecorator('healthZone', {
                                            rules: [{
                                                required: false
                                            },]
                                        })(
                                            <Select>
                                                <Option value="Entebbe">Entebbe</Option>
                                                <Option value="Kampala Central">Kampala Central</Option>
                                                <Option value="kawempe division">Kawempe Division</Option>
                                                <Option value="Lubaga divison">Lubaga Division</Option>
                                                <Option value="makindye divison">Makindye Division</Option>
                                                <Option value="nakawa divison">Nakawa Division</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Modal>
                </Col>
                <Col span={1}></Col>
            </Row>
        </div>
    )
}
