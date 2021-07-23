import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ReviewSentiment from './components/ReviewSentiment/ReviewSentiment'
import LinkSentiment from './components/LinkSentiment/LinkSentiment'
import PositiveReviewsList from './components/PositiveReviewsList/PositiveReviewsList'
import NegativeReviewsList from './components/NegativeReviewsList/NegativeReviewsList'
import Graph from './components/Graph/Graph'
import Home from './components/Home/Home'

import "./App.css";

export default function App () {
  return(
    <Router>
      <Switch>
        <Route exact path="/sentimentbyreview" component={ReviewSentiment} />
        <Route exact path="/sentimentbylink" component={LinkSentiment} />
        <Route exact path="/" component={Home} />
        <Route exact path="/sentimentbylink/positivereviews" component={PositiveReviewsList} />
        <Route exact path="/sentimentbylink/negativereviews" component={NegativeReviewsList} />
        <Route exact path="/sentimentbylink/graph" component={Graph} />
      </Switch>
    </Router>
  )
}