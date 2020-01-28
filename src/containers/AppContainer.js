import React, { Component } from 'react'
import { Layout, Row, Col, Card, Typography, Progress } from 'antd'
import { connect } from 'react-redux'
import Chart from 'chart.js'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import { SideNavComponent } from '../components/SideNavComponent '
import { getObservationsByZone } from '../actions/observationsActions'

const { Header, Content, Sider, Footer } = Layout
const { Title, Text } = Typography
class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartDataByzone: null
        }
        this.chartRef = React.createRef()
        this.doughnutRef = React.createRef()
    }
    componentDidMount() {
        //getting all the observations by zone
        this.getDataByZone()
    }
    componentWillReceiveProps(nextProps) {
        const DataLables = nextProps.dataByZone.map(data => Object.values(data))
        console.log(nextProps.dataByZone)
        const Data = []
        nextProps.dataByZone.forEach((data) => {
            Data.push({
                'rage': data['rage'],
                'HouseholdsVisited': data['HouseholdsVisited'],
                'NumberOFVoluteers': data['NumberOFVoluteers'],
                'PeopleVisited': data['PeopleVisited'],
                'UnusualDeathOrDiseaseInHumans': data['UnusualDeathOrDiseaseInHumans'],
                'acuteWateryDiarrhea': data['acuteWateryDiarrhea'],
                'chikungunya': data['chikungunya'],
                'ebola': data['ebola'],
                'yellowFever': data['yellowFever'],
                'measles': data['measles'],
                'pfa': data['pfa'],
                'unusualDeathOrDiseaseInAnimals': data['unusualDeathOrDiseaseInAnimals']
            })
        })
        const labels = Data.map((data) => Object.keys(data))
        const data = Data.map((data) => Object.values(data))
        const ctx = this.chartRef.current
        //line chart for the dashboard
        const lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels[0],
                datasets: [{
                    label: DataLables[0][8],
                    fill: false,
                    data: data[0],
                    borderColor: '#ec7373',
                    backgroundColor: '#ec7373',
                    showLine: true,
                },
                {
                    label: DataLables[1][8],
                    fill: false,
                    data: data[1],
                    borderColor: '#b9cced',
                    backgroundColor: '#b9cced',
                    showLine: true
                },
                {
                    label: DataLables[0][8],
                    fill: false,
                    data: data[0],
                    borderColor: '#21bf73',
                    backgroundColor: '#21bf73',
                    showLine: true
                }, {
                    label: DataLables[0][8],
                    fill: false,
                    data: data[0],
                    borderColor: '#5f6caf',
                    backgroundColor: '#5f6caf',
                    showLine: true
                },
                {
                    label: DataLables[0][8],
                    fill: false,
                    data: data[0],
                    borderColor: '#8cba51',
                    backgroundColor: '#8cba51',
                    showLine: true
                },
                {
                    label: DataLables[0][8],
                    fill: false,
                    data: data[0],
                    borderColor: '#8cba51',
                    backgroundColor: '#8cba51',
                    showLine: true
                }],
            },
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [
                        {
                            gridLines: {
                                display: true
                            }
                        }
                    ]
                },

            },
        })
        // Doughnut chart for each and everyState
        const ctx2 = this.doughnutRef.current

        const doughnutChart = new Chart(ctx2, {
            type: 'radar',
            data: {
                labels: labels[0]
            }
        })
    }
    getDataByZone = () => {
        const { getObservationsByZone, history } = this.props
        getObservationsByZone('Entebbe')
    }
    // the rendering functions for the all body
    render() {
        const { loggedIn } = this.props
        if (!loggedIn) return <Redirect to="/" />
        return (
            <Layout>
                <Header style={{ background: 'white', borderBottom: " 1px solid gainsboro" }}>
                    <HeaderComponent
                        signOutUsers={this.signOutUsers}
                    ></HeaderComponent>
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
                            {/* <DashboardComponent style={{ marginTop: '100px' }} /> */}
                            <Row>
                                <Col span={0}>
                                </Col>
                                <Col span={24}>
                                    <Card title="General Total of Weekly Data Collected">
                                        <canvas ref={this.chartRef} width="400px" height="100px">
                                            <p>The chart component goes here</p>
                                        </canvas>
                                    </Card>
                                </Col>
                                <Col span={0}>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '30px' }}>
                                <Col span={12}>
                                    <Card title="Radical Comparison of weekly Data collected">
                                        <canvas ref={this.doughnutRef}></canvas>
                                    </Card>
                                </Col>
                                <Col span={1}>
                                </Col>
                                <Col span={11}>
                                    <Card title="Statics of Data Collected">
                                        <Row>
                                            <Col span={8} >
                                                <Progress type="dashboard" percent={75} />
                                                <Title level={4}>HouseHolds</Title>
                                            </Col>
                                            <Col span={8}>
                                                <Progress type="dashboard" percent={30} />
                                                <Title level={4}>Areas Covered</Title>
                                            </Col>
                                            <Col span={8}>
                                                <Progress type="dashboard" percent={80} strokeColor="#ff5d6c" />
                                                <Title level={4}>Zones Covered</Title>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Card title="Region Coverage" style={{ marginTop: 20 }}>
                                        <Title style={{ marginTop: -25 }}> 600.96KM</Title>
                                    </Card>
                                </Col>
                            </Row>
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
/**
 * 
 * @param {*} state 
 */
const mapStateToProps = state => (
    {
        dataByZone: state.observations.observationByzone,
        loggedIn: state.auth.loggedin
    }
)
export default connect(mapStateToProps, { getObservationsByZone })(AppContainer)