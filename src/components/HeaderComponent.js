import React from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import { connect } from 'react-redux'
import { signOut } from '../actions/authActions'
import { Redirect } from 'react-router-dom'
import Logo from '../assets/logo.jpg'

const HeaderComponent = ({ signOut, loggedOut, history }) => {
    const logOUtUsers = () => {
        signOut()
        return <Redirect to="/" />
    }
    return (
        < Row style={{ background: 'white', height: '50px' }
        }>
            <Col span={12}>
                <img src={Logo} width="100px"
                style={{ marginLeft: 30 }} height="80px" />
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
                <Avatar size={40} icon="user"></Avatar>
                <span style={{ marginLeft: 20, fontWeight: 'bolder' }} onClick={logOUtUsers}>
                    Logout <Icon type="logout" style={{ fontWeight: 'bold' }}></Icon>
                </span>
            </Col>
        </Row >
    )
}
const mapStateToProps = state => ({
    loggedOut: state.auth.loggedOut
})
export default connect(mapStateToProps, { signOut })(HeaderComponent)
