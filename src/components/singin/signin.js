import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './signin.css';
import isValidEmail from '../../helper/emailValidation';
import { login } from '../../store/auth/actions';
import {Link} from 'react-router-dom';

//Create Class Component
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    //Declare state for form Inputs
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      },
    };
    this.login = this.login.bind(this); //bind login submit function
    this.handleChange = this.handleChange.bind(this); //bind handle change  function
  }

  /*Handle change function
  @input : Event { Event}
  @input : name {Field name}
  */
  handleChange = (event, name) => {
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
  login = (event) => {
    event.preventDefault(); // Stop Default behaviour of event
    const { email, password } = this.state;
    const { authLogin } = this.props;
    if (email && password) {
      const userData = {
        "user": {
          "email": email,
          "password": password
        }
      };
      //Call Api through Reducer for Authentication
      authLogin(userData).then(response => {
        const AuthToken = response.user.token;
        const UserName = response.user.username;
        localStorage.setItem('AuthToken', AuthToken);//Store Authtoken  in Local Stroage
        localStorage.setItem('UserName', UserName);//Store Username  in Local Stroage
        this.setState({
          email: '',
          password: ''
        });
        this.props.history.push('/');
      }).catch(error => {
        console.log(error);
      });
    }
  }
  /*Check for inputs value valid
  */
  canBeSubmitted() {
    const { email, password } = this.state;
    return (
      email.length > 0 &&
      password.length > 0
    );
  }
  //Render function 
  render() {
    // assign state data in these varaibles
    const { errors, email, password } = this.state;
    const isEnabled = this.canBeSubmitted();
    //return function
    return (
      <div className="container">
        <form onSubmit={this.login}>
          <div className="title-signin">Sign In</div>
          <p className="linksignin">
            <Link to="/signup">
              Need an account?
            </Link>
          </p>
          <div className="form-container">
            <div className="form-group">
              <input type="email" className="form-control"
                name="email" value={email} onChange={event => this.handleChange(event, 'email')} placeholder="Email" />
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>
            <div className="form-group">
              <input type="password" className="form-control"
                name="password" value={password} onChange={event => this.handleChange(event, 'password')} placeholder="Password" />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
          </div>
          <button type="submit" className="submit-btn" disabled={!isEnabled}>Login</button>
        </form>
      </div>
    )
  }
}

//This deals with Redux store’s stateProps
const mapStateToProps = (state) => {
  return {
    loggedInUser: state.AuthReducer.loggedInUser,
  };
};

//This deals with Redux store’s dispatchProps 
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    authLogin: login,
  },
    dispatch),
});

//connect : This function connects a React component to a Redux store.
//withRouter : It connects component to the router.
export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(SignIn));

