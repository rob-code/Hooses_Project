import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import MainContainer from './containers/MainContainer.jsx'
import {HashRouter, Route} from 'react-router-dom'


window.onload = () => {
  render(
    <HashRouter>
    <div>
      <Route path = "/" component = {MainContainer} />
    </div>
    </HashRouter>,
    document.getElementById('app')
    )
}

// <Route path = "/login" component = {LogInContainer} />
// <Route path = "/commuity" component = {CommunityContainer} />
// <Route path = "/about" component = {AboutContainer} />
// <Route path = "/logout" component = {LogOutContainer} />





// <Route path = "/" component = {Footer} />

// window.onload = function () {
//   ReactDOM.render(
//     <MainContainer/>,
//     document.getElementById('app')
//   );
// };



