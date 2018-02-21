import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import Layout from '../components'
import ManyContainer from '../components/MenyContainer'
import StarComponent from '../components/StarComponent'
import HistoryComponent from '../components/HistoryComponent'

export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={ManyContainer} />
          <Route path="game" component={Layout} />
          <Route path="star" component={StarComponent} />
          <Route path="history" component={HistoryComponent} />         
        </Route>
      </Router>
    )
  }
}