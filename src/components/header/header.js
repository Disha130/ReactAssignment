import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../header/header.css';
//Create Class Component
class Header extends React.Component {
  constructor(props) {
    super(props)
    //Declare state
    this.state = {
      token: '',
      username : ''
    }
  }
  /*ComponentDidMount : component and all its sub-components have rendered properly. 
  it called once in life cycle of component*/
  componentDidMount(){
    this.setState({token : localStorage.getItem('AuthToken')})
  }
  /*componentWillReceiveProps :  invoked before a mounted component receives new props*/
  componentWillReceiveProps(nextProps) {
    this.setState({token : localStorage.getItem('AuthToken')})
  }
  /*@logout :
  Clear All storage & redirect on home page
  */
  logout = () => {
    const token =  localStorage.removeItem('AuthToken'); //Remove Authtoken from local storage
    const username =  localStorage.removeItem('UserName'); //Remove Username from local storage
    this.setState({ token: '' ,username : ''});
    this.props.history.push('/signin');
}
//Render function
  render() {
    const {token,login} = this.state;
    return (
      <div className="headerContainer">
        <div className="headerTitle">Feed App</div>
        <div>
          <Link to="/" className="linkClass">Home</Link>
          {token ? (<>
            <Link to="/article" className="linkClass">New Post</Link>
            <Link to = "/signin" className="linkClass" onClick={this.logout}>Logout</Link>
          </>
          ) : (
              <>
                <Link to="/signin" className="linkClass">Sign in</Link>
                <Link to="/signup" className="linkClass">Sign up</Link>
              </>
            )}

        </div>
      </div>
    );
  }
}
//withRouter : It connects component to the router.
export default withRouter(Header);