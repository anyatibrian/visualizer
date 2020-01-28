import React, { Component } from 'react'
import { Layout, Form, Row, Col, Typography } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { CreateObservationData, FetchObservation } from '../actions/observationsActions'
import { FieldDataComponent } from '../components/FieldDataComponent'
import HeaderComponent from '../components/HeaderComponent'
import { FieldDataTableComponent } from '../components/FieldDataTableComponent'
import { SideNavComponent } from '../components/SideNavComponent '

const { Header, Content, Sider, Footer } = Layout
const { Title, Text } = Typography
class FieldDataContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            AcuteWateryDiarrhea: 0,
            pfa: 0
        }
    }
    //method for showing the modal box
    openModal = (e) => {
        e.preventDefault()
        this.setState({ showModal: true })
    }
    //method for canceling the the modal box
    handleCancel = (e) => {
        e.preventDefault()
        this.setState({ showModal: false })
    }
    handleSubmit = e => {
        const { CreateObservationData } = this.props
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const val = values.healthArea.split(",")
            const data = {
                ...values,
                healthArea: val[0],
                lat: val[1],
                long: val[2]
            }
            console.log(data)
            if (!err) {
                CreateObservationData(data)
            }
        });
    };
    componentDidMount() {
        const { FetchObservation } = this.props
        //making call to fetch observation function
        FetchObservation()
    }
    render() {
        const {
            showModal,
            AcuteWateryDiarrhea,
            pfa
        } = this.state
        const { form, successMessage, observationData, loggedIn } = this.props
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
                            <FieldDataComponent
                                handleCancel={this.handleCancel}
                                openModal={this.openModal}
                                showModal={showModal}
                                form={form}
                                handleSubmit={this.handleSubmit}
                            />
                            <FieldDataTableComponent
                                observationData={observationData}
                            />
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
export default connect(mapStateToProps, { CreateObservationData, FetchObservation })(Form.create()(FieldDataContainer))