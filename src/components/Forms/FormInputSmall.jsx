import React, { Component } from 'react';
import FormGroup from './FormGroup';

class FormInputSmall extends Component {
    render() {
        return (
            <FormGroup>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type={this.props.type ? this.props.type : "text" } className="form-control" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} aria-describedby={this.props.smallId} value={this.props.value} onChange={this.props.onChange} required={this.props.required} />
                <small id={this.props.smallId} className="form-text text-muted">{this.props.small}</small>
            </FormGroup>
        );
    }
}

export default FormInputSmall;
