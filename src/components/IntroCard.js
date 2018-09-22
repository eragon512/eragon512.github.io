import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = {

};

function IntroCard(props) {
    const {classes} = props;
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    Hey there, Im Anirud Samala
                </Typography>
                <Typography component="p">
                    Im a developer
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(IntroCard);
