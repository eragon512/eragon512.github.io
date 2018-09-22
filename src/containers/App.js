import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider,createMuiTheme }  from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import HomeDrawer from '../components/HomeDrawer';
import HomeTitle from '../components/HomeTitle';
import HomeBody from '../components/HomeBody';
import FooterComponent from '../components/FooterComponent';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[700]
        },
        secondary: {
            main: '#2a3eb1'
        }
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        document.title = "Anirud Samala | Developer";
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <Grid container>
                        <Grid item xs={2}><HomeDrawer /></Grid>
                        <Grid item xs={10}><HomeBody /></Grid>
                    </Grid>
                    <FooterComponent />
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
