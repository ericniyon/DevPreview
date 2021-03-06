import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: '4em',
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  tab: {
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    minWidth: 10,
    marginLeft: '25px',
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <img alt='company logo' src={logo} className={classes.logo} />
            <Tabs className={classes.tabsContainer}>
              <Tab className={classes.tab} label='Home' />
              <Tab className={classes.tab} label='Services' />
              <Tab className={classes.tab} label='The Revolution' />
              <Tab className={classes.tab} label='About Us' />
              <Tab className={classes.tab} label='Contact Us' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
