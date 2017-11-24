import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common'; 
import { emailChanged } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder='user@email.com'
                        label='Email'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='Password'
                        label='Password'
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect( mapStateToProps,{ emailChanged })(LoginForm);
