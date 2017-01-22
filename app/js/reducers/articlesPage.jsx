const initialState = {
	indexes: [],
	articles: []
}

export default function articlesPage(state=initialState, action) {
    switch (action.type) {
        case "FETCH_ARTICLE_INDEXES_FULFILLED":
            return Object.assign({}, state, {indexes: action.payload.data})
        default: 
            return state
    }
}