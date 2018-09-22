import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function TechnologyCard(props) {
    return (
        <Card>
            <CardContent>Hello</CardContent>
        </Card>
    );
}

const styles = {
    root: {
        textAlign: 'center'
    },
    sectionHead: {
        padding: 24
    },
    listHead: {
        textAlign: 'justify'
    }
};

function TechnologiesPaper(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <Typography gutterBottom className={classes.sectionHead} variant="display3">
                    Technologies
                </Typography>
            </Paper>
            <Grid container>
                <Grid item xs={12}>
                    <Typography gutterBottom className={classes.listHead} variant="display1">
                        Technologies
                    </Typography>
                </Grid>
                <Grid item xs={3}><TechnologyCard /></Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withStyles(styles)(TechnologiesPaper);
