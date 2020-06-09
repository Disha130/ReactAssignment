import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isValidEmail from '../../helper/emailValidation';
import isValidUserName from '../../helper/alphabate';
import { signUp } from '../../store/auth/actions';
import './signup.css';
import {Link} from 'react-router-dom';

//Create Class Component
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    //Declare state for form Inputs
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: ''
      },
      apiError : ''
    };
    this.signUpHandle = this.signUpHandle.bind(this); //bind sign up submit function
    this.handleChange = this.handleChange.bind(this); //bind handle change  function
  }

  /*Handle change function
  @input : Event { Event}
  @input : name {Field name}
  */
  handleChange = (event, name) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ [name]: value });
    //check validation for email
    if (name == "email") {
      if (!isValidEmail(value)) {
        this.setState({
          errors: {
            email: "*Please enter valid email"
          }
        })
      } else {
        this.setState({
          errors: {
            email: ""
          }
        })
      }
      //check validation for Password
    } else if (name == "username") {
      if (!isValidUserName(value)) {
        this.setState({
          errors: {
            username: "*It contains alphabet characters only."
          }
        })
      } else {
        this.setState({
          errors: {
            username: ""
          }
        })
      }
    } if (name == "password") {
      if (value.length < 8) {
        this.setState({
          errors: {
            password: "Password minimum length should be 8"
          }
        })
      } else {
        this.setState({
          errors: {
            password: ""
          }
        })
      }
    }

  }
  /*Submit function
  @input : Event { Event}
  */
  signUpHandle = (event) => {
    event.preventDefault(); // Stop Default behaviour of event
    const { signUp } = this.props;
    const { username, email, password } = this.state;
    const userData = {
      user: {
        username,
        email,
        password
    }
    }
    //Call Api through Reducer for Sign up
    signUp(userData).then(response => {
        this.props.history.push('/signin');
        this.setState({
          user: {
            username: '',
            email: '',
            password: ''
          }
        });
      }).catch(errors => {
        console.log(errors);
      });
  }
  /*Check for inputs value valid
  @input : Event { Event}
  */
  canBeSubmitted() {
    const { username, email, password} = this.state;
    return (
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  }
//Render function 
  render() {
    // assign state data in these varaibles
    const { username, email, password ,apiError} = this.state;
    const isEnabled = this.canBeSubmitted();
    //return function
    return (
      <div className="container-signup">
        <form onSubmit={this.signUpHandle}>
          <div className="title-signup">Sign Up</div>
          <p className="linksignup">
            <Link to="/signin">
              Have an account?
            </Link>
          </p>
          <div className="form-container-signup">
            <div className="form-group">
              <input type="text" className="form-control-signup" name="username"
                value={username} onChange={event => this.handleChange(event, 'username')} placeholder="Username"
              />
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control-signup" name="email" value={email} onChange={event => this.handleChange(event, 'email')} placeholder="Email" />
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>
            <div className="form-group">
              <input type="password" className="form-control-signup" name="password" value={password} onChange={event => this.handleChange(event, 'password')} placeholder="Password" />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
          </div>
          <button type="submit" className="submit-btn-signup" disabled={!isEnabled}>Sign Up</button>
        </form>
      </div>
    )
  }
}
//This deals with Redux store’s stateProps
const mapStateToProps = (state) => {
  return {
    registeredUser: state.AuthReducer.registeredUser,
  };
};

//This deals with Redux store’s dispatchProps 
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    signUp,
  },
    dispatch),
});

//connect : This function connects a React component to a Redux store.
export default connect(mapStateToProps,
  mapDispatchToProps)(SignUp);
