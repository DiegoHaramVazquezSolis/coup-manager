import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    lightTooltip: {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[3],
      fontSize: 13,
    },
});

class OtherChatMessage extends Component {
    render() {
        const { classes } = this.props;
        var algo = new Date(this.props.timeStamp);
        return (
            <GridContainer>
                <GridItem xs={12} sm={10} md={6}>
                    <Card>
                        <CardHeader color="primary">
                            <Tooltip
                                title={algo.getDate()+"/"+(algo.getMonth()+1)+" "+algo.getHours()+":"+algo.getMinutes()} placement="top"
                                classes={{ tooltip: classes.lightTooltip }} >
                                <ListItem>
                                    <Avatar src={this.props.foto} alt="" />
                                    <ListItemText
                                        primary={this.props.name}
                                        secondary={this.props.position || ""} />
                                </ListItem>
                            </Tooltip>
                        </CardHeader>
                        <CardBody>
                            <p>{this.props.message}</p>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

OtherChatMessage.propTypes = {
    foto: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
}

export default OtherChatMessage = withStyles(styles)(OtherChatMessage);
