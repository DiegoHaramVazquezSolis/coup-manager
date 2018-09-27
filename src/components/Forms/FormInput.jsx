import React, { Component } from 'react';
import FormGroup from './FormGroup';

class FormInput extends Component {
    render() {
        return (
            <FormGroup>
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <input type={this.props.type ? this.props.type : "text" } className="form-control" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} required={this.props.required} />
            </FormGroup>
        );
    }
}

export default FormInput;
