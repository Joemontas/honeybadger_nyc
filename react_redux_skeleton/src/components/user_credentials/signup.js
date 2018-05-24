import React, { Component } from 'react';
import CredentialsForm from './credentials_form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionsw from '../../actions/user-actions';

class CredentialsForm = props => {
    const { handleSubmit, formHandler } = props;

    )
}
class Signup extends Component {
    formHandler(values) {
        this.props.userActions.createUser(values);
    }
    

    render() {
        return (
            <div>
                <CredentialForms 
                    hformHandler={this.handleSubmit.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usr.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        routerProps: bindActionCreators({ changePage: () => {push('/')} }, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);