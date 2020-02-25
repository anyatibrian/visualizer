import React, { Component } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import MapView from '../components/MapView'
import HeaderComponent from '../components/HeaderComponent'
import { SideNavComponent } from '../components/SideNavComponent '
import { generateGeoJson } from '../actions/mapActions'
const { Header, Content, Sider, Footer } = Layout
const { Title, Text } = Typography

class MapContainer extends Component {
    componentDidMount() {
        const { generateGeoJson } = this.props
        generateGeoJson()
    }
    render() {
        const { loggedIn, GeoJSON } = this.props
        if (!loggedIn) return <Redirect to="/" />
        return (
            <Layout>
                <Header style={{ background: '#ff5d6c',
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
                            <MapView GeoJSON={GeoJSON} />
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
/**
 * 
 * @param {*} state 
 */
const mapStateToProps = state => ({
    observationData: state.observations.observationsData,
    successMessage: state.observations.successMessage,
    loggedIn: state.auth.loggedin,
    GeoJSON: state.maps.GeoJSONDATA
})
export default connect(mapStateToProps, { generateGeoJson })(MapContainer)