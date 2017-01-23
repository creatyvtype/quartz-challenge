import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'

axiosDefaults.baseURL = 'http://localhost:3000/api'

export function getArticleIndexes() {
	return axios({
        requestId: 'articles',
        method: 'get',
        url: '/articles',
        cancelPreviousReqeust: true
    })
}

export function getArticle(id) {
	return axios({
		requestId: 'article',
		method: 'get',
		url: `/articles/${id}`
	})
}