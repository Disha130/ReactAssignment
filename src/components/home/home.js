import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserFeed, getGlobalFeed, getClickFavouriteArticle, getTagList } from '../../store/articles/actions';
import Banner from "./banner/banner";
import { Tabs } from "antd";
import '../home/home.css';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';

const { TabPane } = Tabs;
//Create Class Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    //Declare state
    this.state = {
      token: localStorage.getItem('AuthToken'),
      offset: 0,
      perPage: 10,
      currentPage: 0
    }
    this.favouriteClick = this.favouriteClick.bind(this); //bind  function
  }

  /*ComponentDidMount : component and all its sub-components have rendered properly. 
  it called once in life cycle of component*/
  componentDidMount() {
    const { getTagList } = this.props;
    this.callback();
    getTagList();
  }
  /*favouriteClick :Get Favourite Articles Data*/
  favouriteClick(slugData) {
    const { getClickFavouriteArticle } = this.props;
    getClickFavouriteArticle({ slug: slugData });
  }
  /*handlePageClick : Call on page click*/
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      //Call Api for get Global Feed Data
      this.props.getGlobalFeed({ limit: 10, offset: this.state.offset })
    });
  };
  /*callback : Call on tab change*/
  callback = (key) => {
    if (!this.state.token || key === "2") {
      //call Api for global articles data
      this.props.getGlobalFeed({ limit: 10, offset: this.state.offset });
    }
    else {
      //call Api for  articles data
      this.props.getUserFeed({ limit: 10, offset: this.state.offset })
    }
  };

  //Render function 
  render() {
    const { token } = this.state;
    const { UserArticles, GlobalArticles, TagList } = this.props;
    return (
      <div>
        {/* Call Banner component */}
        <Banner />
        <div className="feed-container">
          <div className="feed-tab">
            <Tabs defaultActiveKey="1" size="large" onChange={this.callback}>
              {/* Check token is exist or not*/}
              {token ? (
                <TabPane tab="Your Feed" key="1">
                  {(UserArticles && UserArticles.length > 0) && UserArticles.map((article, i) => {
                    return (
                      <div className="feed-item-container" key={i}>
                        <div className="feed-item">
                          <div className="feed-user-detail">
                            <div>
                              <Link to={`/username/${article.author.username}`} ><img src={article.author.image} className="feed-user-detail-img" height="32px" width="32px" /></Link>
                            </div>
                            <div className="feed-username-date">
                              <div className="feed-username">
                                <Link to={`/username/${article.author.username}`} className="username-link">{article.author.username}</Link></div>
                              <span className="feed-item-date">{new Date(article.createdAt).toDateString()}</span>
                            </div>
                          </div>
                          <div className="feed-desc">
                            <div className="feed-desc-title">
                              <Link to={`/Details/${article.slug}`} className="title-link">{article.title}</Link>
                            </div>
                            <div className="feed-desc-info">
                              <Link to={`/Details/${article.slug}`} className="description-link">{article.description}</Link>
                            </div>
                          </div>
                          <div className="feed-more">
                            <Link to={`/Details/${article.slug}`} className="description-link">Read more...</Link>
                          </div>
                        </div>
                        <ul className="feed-tags">
                          {(article.tagList && article.tagList.length > 0) && article.tagList.map(tag => {
                            return (
                              <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
                            )
                          })}
                        </ul>
                        <div className="feed-favorite">
                          <button onClick={() => this.favouriteClick(article.slug)}>
                            <i></i>{article.favoritesCount}
                          </button>
                        </div>
                      </div>
                    )
                  })
                  }
                </TabPane>) : ("")}
              <TabPane tab="Global feed" key="2">
                {(GlobalArticles && GlobalArticles.length > 0) && GlobalArticles.map((article, i) => {
                  return (
                    <div className="feed-item-container" key={i}>
                      <div className="feed-item">
                        <div className="feed-user-detail">
                          <div>
                            <Link to={`/username/${article.author.username}`} ><img src={article.author.image} className="feed-user-detail-img" height="32px" width="32px" /></Link>
                          </div>
                          <div className="feed-username-date">
                            <div className="feed-username">
                              <Link to={`/username/${article.author.username}`} className="username-link">{article.author.username}</Link>
                            </div>
                            <span className="feed-item-date">{new Date(article.createdAt).toDateString()}</span>
                          </div>
                        </div>
                        <div className="feed-desc">
                          <div className="feed-desc-title">
                            <Link to={`/Details/${article.slug}`} className="title-link">{article.title}</Link>
                          </div>
                          <div className="feed-desc-info">
                            <Link to={`/Details/${article.slug}`} className="description-link"> {article.description}</Link>
                          </div>
                        </div>
                        <div className="feed-more">
                          <Link to={`/Details/${article.slug}`} className="description-link"> Read more...</Link></div>
                      </div>
                      <ul className="feed-tags">
                        {(article.tagList && article.tagList.length > 0) && article.tagList.map(tag => {
                          return (
                            <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
                          )
                        })}
                      </ul>
                      <div className="feed-favorite">
                        <button onClick={() => this.favouriteClick(article.slug)}>
                          <i></i>{article.favoritesCount}
                        </button>
                      </div>
                    </div>
                  )
                })
                }
              </TabPane>
            </Tabs>
            < ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={0}
              pageRangeDisplayed={20}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"} />
          </div>
          <div className="feed-tag">
            <div className="tag-title">Popular Tags</div>
            <div style={{ marginTop: 10 }}>
              {(TagList && TagList.length > 0) && TagList.map((tags, i) => {
                return (
                  <a href="" key={tags} className="tag-item">{tags}</a>
                )
              })
              }
            </div>
          </div>
        </div>

      </div>

    );
  }
}

//This deals with Redux store’s stateProps
const mapStateToProps = (state) => {
  return {
    UserArticles: state.Articles.userArticles,
    GlobalArticles: state.Articles.globalArticles,
    TagList: state.Articles.tagList,
    FavoriteClickArticles: state.Articles.getClickFavouriteArticles
  };
};

//This deals with Redux store’s dispatchProps 
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    getUserFeed,
    getGlobalFeed,
    getTagList,
    getClickFavouriteArticle
  },
    dispatch),
});
//connect : This function connects a React component to a Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
