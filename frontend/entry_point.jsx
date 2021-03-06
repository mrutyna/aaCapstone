"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/app');
const LoginForm2 = require('./components/login_form2');
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const Modal = require("react-modal");

const PhotoIndex = require('./components/photo/photo_index.jsx');
const PhotoDetail = require('./components/photo/photo_detail');


const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="/login" component={ LoginForm2 } />
      <Route path="/signup" component={ LoginForm2 } />
      <Route path="/photos" component={ PhotoIndex } >
      </Route>
      <Route path="/photos/:id" component={ PhotoDetail } />

    </Route>
  </Router>
);

// <Route path="/benches/new" component={ BenchForm } onEnter={ _ensureLoggedIn }/>
// <Route path="/benches/:benchId" component={ BenchShow} >
//   <Route path="review" component={ ReviewForm } onEnter={ _ensureLoggedIn }/>
// </Route>
function _ensureLoggedIn(nextState, replace) {
  // We don't want users to be able to visit our 'new' or 'review' routes
  // if they haven't already signed in/up. Let's redirect them!
  // `replace` is like a redirect. It replaces the current entry
  // into the history (and the hashFragment), so the Router is forced
  // to re-route.
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
