import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common'; 
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
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
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle : {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error} = auth;
    return { email, password, error };
}

export default connect( mapStateToProps,{ emailChanged, passwordChanged, loginUser })(LoginForm);
