import React, { Component } from 'react';
import { withStyles,createStyleSheet } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import IntroCard from '../components/IntroCard';
import TechCard from '../components/TechCard';
import TechnologiesPaper from '../components/TechnologiesPaper';

const styles = {
    root: {
        textAlign: 'center'
    },
    gridParent: {
        padding: 20
    },
    grid: {
        spacing: 8
    }
};

function HomeBody(props) {
    const {classes} = props;
    return (
        <div>
            <IntroCard />
            <div className={classes.gridParent}>
                <Grid className={classes.grid} direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}> <TechCard /> </Grid>
                    <Grid item xs={3}> <TechCard /> </Grid>
                    <Grid item xs={3}> <TechCard /> </Grid>
                </Grid>
            </div>
            <TechnologiesPaper />
        </div>
    );
}

export default withStyles(styles)(HomeBody);
