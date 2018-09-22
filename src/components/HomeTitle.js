import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {

};

function HomeTitle(props) {
    const {classes} = props;
    return (
        <Typography>{"Anirud Samala | Developer"}</Typography>
    );
};

export default withStyles(styles)(HomeTitle);
