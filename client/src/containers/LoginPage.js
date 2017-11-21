import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { grey500, white } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import { Link } from 'react-router';
import ThemeDefault from '../theme-default';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import config from '../config';
import * as actions from '../actions';

class LoginPage extends Component {

  constructor() {
    super();

    this.state = {
      styles: {
        loginContainer: {
          minWidth: 320,
          maxWidth: 400,
          height: 'auto',
          position: 'absolute',
          top: '20%',
          left: 0,
          right: 0,
          margin: 'auto'
        },
        paper: {
          padding: 20,
          overflow: 'auto'
        },
        buttonsDiv: {
          textAlign: 'center',
          padding: 10
        },
        flatButton: {
          color: grey500
        },
        checkRemember: {
          style: {
            float: 'left',
            maxWidth: 180,
            paddingTop: 5
          },
          labelStyle: {
            color: grey500
          },
          iconStyle: {
            color: grey500,
            borderColor: grey500,
            fill: grey500
          }
        },
        loginBtn: {
          float: 'right'
        },
        btn: {
          background: '#4f81e9',
          color: white,
          padding: 7,
          borderRadius: 2,
          margin: 2,
          fontSize: 13
        },
        btnFacebook: {
          background: '#4f81e9'
        },
        btnGoogle: {
          background: '#e14441'
        },
        btnSpan: {
          marginLeft: 5
        },
      }
    };
  }

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  handleFacebookSignin() {
    this.props.signinFacebookUser();
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="red500">
          <strong>Ooops! Wrong Login or Password</strong>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    const styles = this.state.styles;

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field
                  name="email"
                  {...email}
                  component={TextField}
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                />
                <Field
                  name="password"
                  type="password"
                  {...password}
                  component={TextField}
                  hintText="Password"
                  errorText={this.props.errorMessage}
                  floatingLabelText="Password"
                  fullWidth={true}
                />

                <div>
                  {this.renderAlert()}
                  <RaisedButton label="Login"
                    type="submit"
                    primary={true}
                    style={styles.loginBtn} />

                </div>
              </form>
            </Paper>

            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/signup"
                style={styles.flatButton}
                icon={<PersonAdd />}
              />

              <FlatButton
                label="Forgot Password?"
                href="/"
                style={styles.flatButton}
                icon={<Help />}
              />
            </div>

            <div style={styles.buttonsDiv}>
              <a href={`${config.apihost}/auth/facebook`} style={{ ...styles.btn, ...styles.btnFacebook }}>
                <i className="fa fa-facebook fa-lg" />
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </a>
              <Link to="/" style={{ ...styles.btn, ...styles.btnGoogle }}>
                <i className="fa fa-google-plus fa-lg" />
                <span style={styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}



export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(connect(mapStateToProps, actions)(LoginPage));
