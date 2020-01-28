import React, { Component } from 'react'
import { Form, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { SignInComponent } from '../components/SignInComponent'
import { authenticateUsers } from '../actions/authActions'
import MapView2 from '../components/MapView2'

class SignInContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nexprops) {
        if (nexprops.loggedIn === true) {
            this.props.history.push('/dashboard')
        } else {
            return false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { form: { validateFields },
            authenticateUsers
        } = this.props
        validateFields((err, values) => {
            if (!err) {
                authenticateUsers(values)
            }
        })
    }
    render() {
        const { form, authError, authSuccess, userInfo, loggedIn } = this.props
        return (
            <div>
                <Row>
                    
                </Row>
                <SignInComponent
                    form={form}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => ({
    authSuccess: state.auth.authSuccess,
    authError: state.auth.authError,
    userInfo: state.auth.userInfo,
    loggedIn: state.auth.loggedin
})
export default connect(mapStateToProps,
    {
        authenticateUsers
    }
)(Form.create({ name: 'user-login' })(SignInContainer))
