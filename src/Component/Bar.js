import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paper: {
    backgroundColor: "primary",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "primary",
    width: 200,
    height: 50,
  },
})
);

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root} style={{ zIndex: 9999 }}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop() {
  const classes = useStyles();

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到錨點
      let anchorElement = document.getElementById(anchorName);
      // 如果對應id的錨點存在，就跳轉到錨點
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }
  return (
    <React.Fragment>
      <div>
        <CssBaseline />
        <AppBar style={{ backgroundColor: "#84C1FF" }}>
          <Toolbar>
            <Grid container spacing={6}>

              <Grid item xs={2}>

              </Grid>
              <Grid item xs={2}>
                <Button className={classes.paper} variant="contained" color="primary"
                  onClick={() => scrollToAnchor("back-to-top-anchor")} role="presentation">
                  Home
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Button className={classes.paper} variant="contained" color="primary" value="#about"
                  onClick={() => scrollToAnchor("about")}>
                  About
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button className={classes.paper} variant="contained" color="primary"
                  onClick={() => scrollToAnchor("skills")}>
                  Skill
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button className={classes.paper} variant="contained" color="primary"
                  onClick={() => scrollToAnchor("contact")}>
                  Contact
                </Button>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Toolbar id="back-to-top-anchor" />
        <ScrollTop>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </React.Fragment>
  );
}
