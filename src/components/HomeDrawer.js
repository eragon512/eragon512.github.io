import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import WorkIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';

function IconifiedList(props) {
    let listItems = props.listItems.map((listItem) => {
        return (
            <ListItem button>
                <ListItemIcon textAlign='center' children={listItem.icon} />
                <ListItemText primary={listItem.text} />
            </ListItem>
        );
    });
    return (<List alignItems='center' children={listItems} />);
}

function IconList(props) {
    let listItems = props.listItems.map((listItem) => {
        return (
            <ListItem button>
                <Tooltip title={listItem.text} placement="right">
                    <ListItemIcon textAlign='center' children={listItem.icon} />
                </Tooltip>
            </ListItem>
        );
    });
    return (<List alignItems='center' children={listItems} />);
}

const styles = {
    root: {
        mdUp: {
            width: 240
        },
        smDown: {
            alignItems: 'center',
            width: 40
        }
    },
    head: {
        padding: 16
    }
};

class HomeDrawer extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const {classes} = this.props;

        let iconifiedListItems = [{
            icon: <PersonIcon />,
            text: 'Profile'
        }, {
            icon: <SchoolIcon />,
            text: 'Education'
        },  {
            icon: <WorkIcon />,
            text: 'Profile'
        },  {
            icon: <WorkIcon />,
            text: 'Profile'
        },  {
            icon: <WorkIcon />,
            text: 'Profile'
        }, ];

        return (
            <React.Fragment>
                <Hidden mdUp>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} >
                        <MenuIcon />
                    </IconButton>
                    <Drawer className={classes.root.smDown}
                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    variant="temporary">
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} >
                            <MenuIcon />
                        </IconButton>
                        <Divider />
                        <IconList listItems={iconifiedListItems} />
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer className={classes.root.mdUp} fullWidth variant="permanent" open>
                        <Typography className={classes.head} variant="display1" children={"Anirud Samala"} />
                        <Divider />
                        <IconifiedList listItems={iconifiedListItems} />
                    </Drawer>
                </Hidden>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(HomeDrawer);
