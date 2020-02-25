import React from 'react'
import { Row, Col, Icon, Typography } from 'antd'

const { Title } = Typography
const style = { marginTop: '30px' }
export const DashboardComponent = () => {
    return (
        <div className="dashboard-container">
            <Row>
                <Col span={4}>

                    <span className="icon-container">
                        <Title level={4} style={{ marginLeft: 25 }}>
                        200+ Volunteers</Title>
                        <Icon type="user" />
                    </span>
                </Col>
                <Col span={4}>

                    <span className="icon-container">
                        <Title level={4}> 2 Zones</Title>
                        <Icon type="pie-chart" />
                    </span>
                </Col>
                <Col span={4}>

                    <span className="icon-container">
                        <Title level={4}> 40 Fields</Title>
                        <Icon type="ordered-list" />
                    </span>
                </Col>
                <Col span={4}>
                    <Title level={4}> 50 Areas</Title>
                    <span className="icon-container">
                        <Icon type="area-chart" />
                    </span>
                </Col>
                <Col span={4}>
                    <span className="icon-container">
                        <Title level={4}> 1000+</Title>
                        <Icon type="database" />
                    </span>
                </Col>
                <Col span={4}>
                    <span className="icon-container">
                        <Title level={4} style={{ marginLeft: 25 }}> 400 house holds</Title>
                        <Icon type="usergroup-add" />
                    </span>
                </Col>
            </Row>
            <Row>
                <Col span={16}></Col>
                <Col span={8}></Col>
            </Row>
        </div>
    )
}
