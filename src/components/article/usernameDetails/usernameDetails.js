import React from 'react';
import '../usernameDetails/usernameDetails.css';
import BannerUserName from './usernameBanner';
import { Tabs } from 'antd';
import { getFavouriteArticle, getMyArticle } from '../../../store/articles/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { TabPane } = Tabs;
//Create Class Component
class UserNameDetails extends React.Component {
  constructor(props) {
    super(props)
  }
   /*ComponentDidMount : component and all its sub-components have rendered properly. 
  it called once in life cycle of component*/
  componentDidMount() {
    const { getFavouriteArticle, getMyArticle } = this.props;
    //call api for favourite Articles & my articles
    getFavouriteArticle({ favorited: this.props.match.params.author, limit: 20, offset: 0 });
    getMyArticle({ author: this.props.match.params.author, limit: 20, offset: 0 });
  }
  /*callback : Call on tab change*/
  callback = (key) => {
    console.log(key);
  }
   //Render function 
  render() {
    const { FavouriteArticles, MyArticles } = this.props;
    return (
      <div>
        {/*Call Banner username component & pass props */}
        <BannerUserName props={this.props.match.params.author} />
        <div className="username-container-details">
          <div className="username-tab">
            <Tabs defaultActiveKey="1" size="large" onChange={this.callback}>
              <TabPane tab="My Articles" key="1">
                {(MyArticles && MyArticles.length > 0) && MyArticles.map((article, i) => {
                  return (
                    <div className="username-item-container" key={i}>
                      <div className="username-item">
                        <div className="username-detail">
                          <div>
                            <img src={article.author.image} className="username-detail-img" height="32px" width="32px" />
                          </div>
                          <div className="username-date">
                            <div className="username-details-username">
                              <a href={`/username/${article.author.username}`} className="username-my-link">{article.author.username}</a>
                            </div>
                            <span className="username-item-date">{new Date(article.createdAt).toDateString()}</span>
                          </div>
                        </div>
                        <div className="username-desc">
                          <div className="username-desc-title">
                            <a href={`/Details/${article.slug}`} className="title-link">{article.title}</a>
                          </div>
                          <div className="username-desc-info">
                            <a href={`/Details/${article.slug}`} className="description-link">{article.description}</a>
                          </div>
                        </div>
                        <div className="username-more">
                          <a href={`/Details/${article.slug}`} className="description-link">Read more...</a>
                        </div>
                      </div>
                      <div className="username-favorite">
                        <button> <i></i>{article.favoritesCount}</button>
                      </div>
                    </div>
                  )
                })
                }
              </TabPane>
              <TabPane tab="Favorited Articles" key="2">
                {(FavouriteArticles && FavouriteArticles.length > 0) && FavouriteArticles.map((article, i) => {
                  return (
                    <div className="username-item-container" key={i}>
                      <div className="username-item">
                        <div className="username-detail">
                          <div>
                            <img src={article.author.image} className="username-detail-img" height="32px" width="32px" />
                          </div>
                          <div className="username-date">
                            <div className="username-details-username">
                              <a href={`/username/${article.author.username}`} className="username-my-link">{article.author.username}</a>
                            </div>
                            <span className="username-item-date">{new Date(article.createdAt).toDateString()}</span>
                          </div>
                        </div>
                        <div className="username-desc">
                          <div className="username-desc-title">
                            <a href={`/Details/${article.slug}`} className="title-link">{article.title}</a>
                          </div>
                          <div className="username-desc-info">
                            <a href={`/Details/${article.slug}`} className="description-link">{article.description}</a>
                          </div>
                        </div>
                        <div className="username-more">
                          <a href={`/Details/${article.slug}`} className="description-link">Read more...</a>
                        </div>
                      </div>
                      <div className="username-favorite">
                        <button>
                          <i></i>{article.favoritesCount}
                        </button>
                      </div>
                    </div>
                  )
                })
                }
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
//This deals with Redux store’s stateProps
const mapStateToProps = (state) => {
  return {
    FavouriteArticles: state.Articles.favouriteArticles,
    MyArticles: state.Articles.myArticles
  };
};
//This deals with Redux store’s dispatchProps 
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    getFavouriteArticle,
    getMyArticle
  },
    dispatch),
});
//connect : This function connects a React component to a Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNameDetails);