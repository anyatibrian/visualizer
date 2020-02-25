import React, { Component } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import { SideNavComponent } from '../components/SideNavComponent '
import { BarChartComponent } from '../components/BarChartComponents'
const { Header, Content, Sider, Footer } = Layout
const { Text } = Typography
class BarChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: [
                    'Liquid diarrhea',
                    'Bloody diarrhea',
                    'PFA', 'Rougeole',
                    'Viral hemorrhagic fever',
                    'Yellow fever',
                    'chikungunya',
                    'Rage',
                    'Peste',
                    'Number of Households visited',
                    'Number of people visited',
                    'Volunteer Having notified'
                ],
                datasets: [
                    {
                        label: 'LUBUDI',
                        data: [0, 0, 0, 3, 0, 0, 0, 0, 0, 154, 600, 3],
                        backgroundColor: '#916dd5',
                        borderColor: '#916dd5'
                    },
                    {
                        label: 'CONGO',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 574, 0],
                        backgroundColor: '#8cba51',
                        borderColor: '#8cba51',
                        borderColor: '#8cba51',
                    },
                    {
                        label: 'DJELO BINZA',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 352, 791, 0],
                        backgroundColor: '#f0134d',
                        borderColor: '#f0134d'
                    },
                    {
                        label: 'LONZO',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 157, 1110, 0],
                        backgroundColor: '#3282b8',
                        borderColor: '#3282b8'
                    }
                ]
            },
            chartData2: {
                labels: [
                    'Liquid diarrhea',
                    'Bloody diarrhea',
                    'PFA', 'Rougeole',
                    'Viral hemorrhagic fever',
                    'Yellow fever',
                    'chikungunya',
                    'Rage',
                    'Peste',
                    'Number of Households visited',
                    'Number of people visited',
                    'Volunteer Having notified'
                ],
                datasets: [
                    {
                        label: 'KIPOMPO',
                        data: [0, 0, 2, 0, 0, 1, 0, 0, 0, 422, 262, 3],
                        backgroundColor: '#916dd5',
                        borderColor: '#916dd5'
                    },
                    {
                        label: 'MALAKU',
                        data: [0, 0, 1, 0, 1, 0, 0, 0, 0, 100, 1762, 2],
                        backgroundColor: '#8cba51',
                        borderColor: '#8cba51'
                    },
                    {
                        label: 'MAGENGENGE',
                        data: [0, 0, 1, 0, 0, 1, 0, 0, 0, 634, 1475, 2],
                        backgroundColor: '#f0134d',
                        borderColor: '#f0134d'
                    },
                    {
                        label: 'MONACO',
                        data: [0, 0, 0, 3, 0, 3, 2, 0, 0, 724, 3750, 2],
                        backgroundColor: '#3282b8',
                        borderColor: '#3282b8'
                    }
                ]
            },
        }
    }
    render() {
        const { chartData, chartData2 } = this.state
        const { loggedIn } = this.props
        if (!loggedIn) return <Redirect to="/" />
        return (
            <Layout>
                <Header style={{ background: 'white',
                borderBottom: " 1px solid gainsboro" }}>
                    <HeaderComponent></HeaderComponent>
                </Header>
                <Layout>
                    <Sider width={255} style={{ background: '#fff' }}>
                        <SideNavComponent></SideNavComponent>
                    </Sider>
                    <Layout style={{ padding: '0' }}>
                        <Content style={{
                            background: '#fff',
                            padding: 20,
                            margin: 0,
                            minHeight: 280,
                        }}>
                            <BarChartComponent
                                horizontalChart1={chartData}
                                horizontalChart2={chartData2}
                            />
                        </Content>
                    </Layout>
                </Layout>
                <Footer>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Text style={{ fontSize: 18, fontWeight: 'lighter',
                            textAlign: 'center' }}>·· © 2020 Visualizer ··</Text>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </Footer>
            </Layout>
        )
    }
}
const mapStateToProps = state => (
    {
        dataByZone: state.observations.observationByzone,
        loggedIn: state.auth.loggedin
    }
)
export default connect(mapStateToProps, {})(BarChartContainer)