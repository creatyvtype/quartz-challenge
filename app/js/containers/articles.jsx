import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticleIndexes } from 'actions/'

import 'styles/articles'

function mapStoreToProps(store) {
  return { page: store.articlesPage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticleIndexes }, dispatch)
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
					indexes.map(index => (
						<div key={index}>
							{index}
						</div>
					))
				}
			</div>
		)
	}
}


export default ArticlesPage