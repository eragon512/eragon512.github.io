import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import GithubCirlceIcon from './icons/GithubCircle.js';

function FooterComponent(props) {
  const elements = [];

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs><GithubCircleIcon /></Grid>
      <Grid item xs><MenuIcon /></Grid>
    </Grid>
  );
}

export default FooterComponent;
