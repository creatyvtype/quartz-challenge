import * as API from 'api/index'

export function getArticleIndexes(){
    return dispatch => {
        dispatch({
            type: "FETCH_ARTICLE_INDEXES",
            payload: API.getArticleIndexes()
        })
    }
}

export function getArticle(id) {	
	return dispatch => {
		dispatch({
			type: "FETCH_ARTICLE",
			payload: API.getArticle(id)
		})
	}
}