import React, { Component } from "react";
import Fade from "react-reveal";
import {withStyles} from "@material-ui/core/styles"
import Grade from './grade'
import { connect } from "react-redux";

const styles = () => ({
  footer: {
    height:227,
    backgroundColor:"#84C1FF",
    paddingTop: 0,
    fontSize: 15,
    textAlign: "center",
    position: "static",
  },
  copyright:{
    marginTop:0,
    marginBottom:0
  },
  copyrightli: {
    display: "inline-block",
    margin: 0,
    padding: 0,
    lineHeight: 1,
  },
  social:{
    margin: 50,
    padding: 0,
    fontSize: 40,
  },
  footerli: {
     display: "inline-block",
     marginLeft: 42,
  },
  icon:{
    width:130,
    height:130,
  }
}
);

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    const { classes } = this.props;
    const footer= this.props.get; 
    const social = footer.social.map(function (social,index) {
      let Image = "image/" + social.icon;
      return (
        <li className={classes.footerli}>
          <a href={social.href}><img alt={social.name} src={Image} className={classes.icon}/></a>
        </li>
      );
    })
    return (
      <footer className={classes.footer}>
        <Fade left>
          {social}
        </Fade>
        <Fade left>
            <div>
              <ul className={classes.copyright}>
                <li className={classes.copyrightli} style={{marginRight:10}}>&copy; Copyright 2021 Nordic Giant</li>
                ●
                <li className={classes.copyrightli} style={{marginLeft:10}}>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
                <li className={classes.copyrightli} style={{marginLeft:10}}>
                <Grade/>
                </li>
              </ul>
            </div>
          </Fade>
      </footer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    get: state.footer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler: () => dispatch({ type: "INCREMENTHANDLER" }),
    incrementTenNumberHandler: (number) =>
      dispatch({
        type: "INCREMENTTENNUMBERHANDLER",
        payload: {
          number
        }
      })
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Footer));
