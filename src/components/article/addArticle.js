import React, { useState, useEffect } from 'react';
import './addArticle.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postNewArticleData, getSlugArticle, updateArticleData } from '../../store/articles/actions';

//Create functional Component
function AddArticle(props) {
  //create state
  const [articleForm, setarticleForm] = useState({
    title: '',
    articleAbout: '',
    description: '',
    tags: []
  })
/* useEffect : It allows us to run a function based on whether something changed. 
useEffect also allows us to combine componentDidMount and componentDidUpdate . */
  useEffect(() => {
    if (props.match?.params?.slug) {
      const { getSlugArticle, articleData } = props;
      getSlugArticle({ slug: props.match.params.slug }).then((response) => {
        let articleEditData = response.article;
        let form = {
          title: articleEditData.title,
          articleAbout: articleEditData.description,
          description: articleEditData.body,
          tags: articleEditData.tagList
        }
        setarticleForm(form);
      });
    }
  }, []);
  /*submit  function
  @input : Event { Event}
  */
  const publish = (e) => {
    const { postNewArticleData, updateArticleData } = props;
    e.preventDefault();
    if (articleForm) {
      let tagList = [];
      tagList.push(articleForm.tags);
      let body = {
        "article": {
          "title": articleForm.title,
          "description": articleForm.description,
          "body": articleForm.articleAbout,
          "tagList": tagList
        }
      }
      if (body) {
        //check if slug is available then call api for edit Article
        if (props.match?.params?.slug) {
          updateArticleData({ slug: props.match?.params?.slug, article: body }).then(response => {
            let slug = response.article.slug;
            setarticleForm({
              title: '',
              articleAbout: '',
              description: '',
              tags: []
            });
            props.history.push(`/Details/${slug}`);
          }).catch(error => {
            console.log(error);
          });
        } else {
          //check if slug is unavailable then call api for add Article
          postNewArticleData({ article: body }).then(response => {
            let slug = response.article.slug;
            setarticleForm({
              title: '',
              articleAbout: '',
              description: '',
              tags: []
            });
            props.history.push(`/Details/${slug}`);
          }).catch(error => {
            console.log(error);
          });
        }
      }
    }
  }
  /*Handle change function
  @input : Event { Event}
  */
  const handleChange = (e) => {
    let formTemp = Object.assign({}, articleForm);
    let name = e.target.name;
    let value = e.target.value;
    formTemp[name] = value;
    setarticleForm(formTemp);
  }
  /*Check for inputs value valid
  */
  const canBeSubmitted = () => {
    const { title, articleAbout, description, tags } = articleForm;
    return (
      title.length > 0 &&
      articleAbout.length > 0 &&
      description.length > 0 &&
      tags.length > 0
    );
  }

  //Flag for button enable
  const isEnabled = canBeSubmitted();
  return (
    <div className="container">
      <form onSubmit={publish}>
        <div className="form-container">
          <div className="form-group">
            <input type="text" className="form-control article" name="title" value={articleForm.title} onChange={event => handleChange(event, 'title')} placeholder="Article Title" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control article font-change" value={articleForm.articleAbout} name="articleAbout" onChange={event => handleChange(event, 'articleAbout')} placeholder="What's this article about?" />
          </div>
          <div className="form-group">
            <textarea className="form-control article textarea" name="description" value={articleForm.description} rows="8" onChange={event => handleChange(event, 'description')} placeholder="Write your article"></textarea>
          </div>
          <div className="form-group">
            <input type="text" className="form-control article font-change" name="tags" onChange={event => handleChange(event, 'tags')} placeholder="Enter tags" />
          </div>
        </div>
        <button type="submit" className="submit-btn" >Publish Article</button>
      </form>
    </div>
  );
};
//This deals with Redux store’s stateProps
const mapStateToProps = (state) => {
  return {
    articleData: state.Articles.slugArticles,
  };
};
//This deals with Redux store’s dispatchProps 
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    postNewArticleData,
    getSlugArticle,
    updateArticleData
  },
    dispatch),
});
//connect : This function connects a React component to a Redux store.
export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(AddArticle));