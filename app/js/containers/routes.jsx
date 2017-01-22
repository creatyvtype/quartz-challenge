import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import Layout from 'containers/layout'
import ArticlesPage from 'containers/articles'

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                	<IndexRedirect to="articles" />
                	<Route path="articles" component={ArticlesPage} />
                </Route>
            </Router>
        )
    }
}
