import React, { Component } from 'react';
import CredentialsForm from './credentials_form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionsw from '../../actions/user-actions';

class Signup extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const formBody = new FormData(e.target);


    }

    render() {
        return (
            <div>
                <CredentialForms 
                    handler={this.handleSubmit.bind(this)}
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