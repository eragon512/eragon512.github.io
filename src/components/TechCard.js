import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    root: {
        textAlign: 'center'
    }
};

function TechCard(props) {
    const {classes} = props;
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="title">
                    Front-end Developer
                </Typography>
                <Typography gutterBottom component="p">
                    {"I tend to code things from scratch,"+
                    "and enjoy bringing ideas to life in the browser."}
                </Typography>
                <Typography gutterBottom variant="subheading" color="secondary">
                    Languages I speak:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText className={classes.root}>HTML</ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(TechCard);
