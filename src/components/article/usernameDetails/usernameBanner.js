import React from 'react';
import '../usernameDetails/usernameBanner.css';
import { getProfileData } from '../../../store/profile/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFollowData } from '../../../store/Follow/actions';
//Create Class Component
class BannerUserName extends React.Component {
  constructor(props) {
    super(props)
    //Declare state
    this.state = {
      profile: ''
    }
  }
  /*ComponentDidMount : component and all its sub-components have rendered properly. 
  it called once in life cycle of component*/
  componentDidMount() {
    const { getProfileData } = this.props;
    //Call api for get Profile data
    getProfileData({ username: this.props.props }).then(response => {
      this.setState({ profile: response.profile })
    }
    )
  }
  /*componentWillReceiveProps :  invoked before a mounted component receives new props*/
  componentWillReceiveProps(nextProps) {
    this.setState({ profile: nextProps.Profile })
  }
  /*followClick : Click on folllow button
  (but functionality is not apply for follow or unfollow)
  */
  followClick = (username) => {
    const { FollowData, getFollowData } = this.props;
    getFollowData({ username: username })
  }
  //Render function 
  render() {
    const { FollowData } = this.props;
    return (
      <div className="banner-username">
        <div className="container-username">
          <div>
            <img src={this.state?.profile.image} className="user-img" height="100px" width="100px" />
            <div className="username-details">{this.state?.profile.username}</div>
          </div>
          <div>
            <button className="username-banner-button" onClick={() => this.followClick(this.state?.profile.username)}>
              Follow  {`${this.state?.profile.username}`}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
//This deals with Redux store’s stateProps
const mapStateToProps = (state) => {
  return {
    Profile: state.ProfileData.profile,
    FollowData: state.FollowData.follow
  };
};
//This deals with Redux store’s dispatchProps 
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    getProfileData,
    getFollowData
  },
    dispatch),
});
//connect : This function connects a React component to a Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerUserName);
