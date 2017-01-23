import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load';

class Article extends Component {
	constructor(props) {
		super(props);
		this.layoutArticle = this.layoutArticle.bind(this)
	}

	contentHtml(article) {
		return {
			__html: article.content
		}
	}

	titleHtml(article) {
		return {
			__html: article.title
		}
	}

	layoutArticle() {
		const { article, colorStyleReverse } = this.props
		const colorStyle = colorStyleReverse ? "reverse" : "normal"

		if (article) {

			return (
				<div className={"article " + colorStyle}>
					<div className="title" dangerouslySetInnerHTML={this.titleHtml(article)}>
					</div>
					<img className="graphic" href={article.hero.url} />
					<div className="content" dangerouslySetInnerHTML={this.contentHtml(article)}>
					</div>
				</div>
			)
		} else {
			return (
				<div className="loading">
					Loading...
				</div>
			)
		}
	}
	render() {
		console.log(this.props)
		return (
			<LazyLoad
				onContentVisible={this.props.onVisible}>
				{ this.layoutArticle()}
    		</LazyLoad>
		)
	}
}

export default Article