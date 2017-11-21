import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { grey500, white } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import ThemeDefault from '../../theme-default';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import * as actions from '../../actions';

class Signup extends Component {

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

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { username, email, password, passwordConfirm } } = this.props;
    const styles = this.state.styles;

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field
                  name="username"
                  {...username}
                  component={TextField}
                  hintText="User Name"
                  floatingLabelText="User Name"
                  fullWidth={true}
                />
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
                  floatingLabelText="Password"
                  fullWidth={true}
                />
                <Field
                  name="passwordConfirm"
                  type="password"
                  {...passwordConfirm}
                  component={TextField}
                  hintText="Confirm you password"
                  floatingLabelText="Confirm you password"
                  fullWidth={true}
                />

                <div>
                  {this.renderAlert()}
                  <RaisedButton label="Register"
                    type="submit"
                    primary={true}
                    style={styles.loginBtn} />

                </div>
              </form>
            </Paper>

            <div style={styles.buttonsDiv}>
              <Link to="/" style={{ ...styles.btn, ...styles.btnFacebook }}>
                <i className="fa fa-facebook fa-lg" />
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </Link>
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

function validate(formProps) {
  const errors = [];

  if (!formProps.username) {
    errors.username = "Please enter a user name.";
  }

  if (!formProps.email) {
    errors.email = "Please enter a e-mail.";
  }

  if (!formProps.password) {
    errors.password = "Please enter a password.";
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation.";
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Password must match';
  }

  return errors;
}


export default reduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'passwordConfirm'],
  validate
})(connect(mapStateToProps, actions)(Signup));
