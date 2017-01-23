const initialState = {
	indexes: [],
	articles: {}
}

export default function articlesPage(state=initialState, action) {
    switch (action.type) {
        case "FETCH_ARTICLE_INDEXES_FULFILLED":
            return Object.assign({}, state, {indexes: action.payload.data})
        case "FETCH_ARTICLE_FULFILLED":
        	const articles = Object.assign({}, state.articles)
        	articles[action.payload.data[0].id]= action.payload.data[0]
        	return Object.assign({}, state, {articles: articles})
        default: 
            return state
    }
}