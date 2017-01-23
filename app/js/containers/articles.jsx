import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticleIndexes, getArticle } from 'actions/index'

import Article from 'components/article'

import 'styles/articles'

function mapStoreToProps(store) {
  return { page: store.articlesPage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticleIndexes, getArticle }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

class ArticlesPage extends Component {

	componentDidMount() {
		this.props.getArticleIndexes()
	}

	render() {
		const indexes = this.props.page.indexes
		return (
			<div className="articles-page">
				{
					indexes.map((index, idx) => (
						<div className="flex-height" key={index}>
							<Article onVisible={this.props.getArticle.bind(null, index)} 
								article={this.props.page.articles[index]}
								colorStyleReverse={idx % 2 !== 0}
							/>
						</div>
					))
				}
			</div>
		)
	}
}


export default ArticlesPage