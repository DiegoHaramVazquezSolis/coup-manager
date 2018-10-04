import React, { Component } from 'react';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';
import ThumbnailLogo from './ThumbnailLogo';

class Match extends Component {
    render() {
        return (
            <Row>
                <Col cols="3">
                    <ThumbnailLogo className="w-100" logo={this.props.teamLogo} />
                </Col>
                <Col cols="9" left={true}>
                    {this.props.team}
                </Col>
            </Row>
        );
    }
}

export default Match;
