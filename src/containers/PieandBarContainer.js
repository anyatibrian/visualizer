import React, { Component } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import { SideNavComponent } from '../components/SideNavComponent '
import { PieandBarChartComponent } from '../components/PieBarChartComponent '
const { Sider, Header, Content, Footer } = Layout
const { Title, Text } = Typography
class PieandChartBarContainer extends Component {
    constructor(props) {
        super(props)
        //the data that is being loaded the chart
        this.state = {
            pieData: {
                labels: ['Number of people visited', 'Total Population'],
                datasets: [
                    {
                        data: [168, 4460],
                        backgroundColor: ['#3282b8', '#ff5d6c']
                    }
                ]
            },
            pieChart2: {
                labels: ['Number of people visited', 'Total Population'],
                datasets: [
                    {
                        data: [208, 4460],
                        backgroundColor: ['#3282b8', '#ff5d6c']
                    }
                ]

            },
            bargraph1: {
                labels: [],
                datasets: [
                    {
                        label: 'Number of voluntier',
                        data: [52],
                        backgroundColor: ['#ff5d6c']
                    },
                    {
                        label: 'Total population',
                        data: [75],
                        backgroundColor: ['#ff5d6c']
                    }
                ]
            }
        }

    }

    componentDidMount() {
        //getting data from the csv files
        this.generateChart()
    }
    generateChart = async () => { }
    render() {
        const { pieChart2, bargraph1, pieData } = this.state
        const { loggedIn } = this.props
        if (!loggedIn) return <Redirect to="/" />
        return (
            <Layout>
                <Header style={{ background: 'white', borderBottom: " 1px solid gainsboro" }}>
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
                            <PieandBarChartComponent
                                pieData={pieData}
                                pieChart2={pieChart2}
                                bargraph1={bargraph1} />
                        </Content>
                    </Layout>
                </Layout>
                <Footer>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Text style={{ fontSize: 18, fontWeight: 'lighter', textAlign: 'center' }}>·· © 2020 Visualizer ··</Text>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </Footer>
            </Layout>
        )
    }
}
const mapStateToProps = state => ({
    observationData: state.observations.observationsData,
    successMessage: state.observations.successMessage,
    loggedIn: state.auth.loggedin
})
export default connect(mapStateToProps, {})(PieandChartBarContainer)