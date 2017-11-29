import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })
    }



    onButtonPress() {
        const { name, shift, phone } = this.props;

        this.props.employeeSave({ name, shift, phone, uid: this.props.employee.uid })
        
    }
    
    onTextPress() {
        const { phone, shift } = this.props;
        console.log(phone)
        Communications.text(phone, `your upcoming shift is on ${shift}`)
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state => {
    const { name, shift, phone } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
