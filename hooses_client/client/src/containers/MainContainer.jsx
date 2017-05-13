import React from 'react'
import MyHouses from '../components/MyHouses.jsx'
import ViewLinks from '../components/ViewLinks.jsx'
import AddressTitle from '../components/AddressTitle.jsx'
import KitchenTable from '../components/KitchenTable.jsx'
import CoOwners from '../components/CoOwners.jsx'
import AllTopicsView from '../components/AllTopicsView.jsx'
import Profile from '../components/Profile.jsx'

class MainContainer extends React.Component {


  constructor(props){
    super(props)

    this.state = {}
  }



render(){

return (

  <div className="container-responsive">

  <div className="row">

  <div className="col-md-3">
    <MyHouses/>
    <CoOwners/>
  </div>
  

  <div className="col-md-7">

  <AddressTitle/>

  <ul className="nav nav-tabs">
    <li role="presentation" className="active"><a href="#">Kitchen Table</a></li>
    <li role="presentation"><a href="#">Topics</a></li>
    <li role="presentation"><a href="#">Job Calls</a></li>
    <li role="presentation"><a href="#">Expenditure</a></li>
  </ul>


  </div>
  


  <div className="col-md-2">
  <Profile/>


  </div>

  
  </div>


  </div>


);

}

}















export default MainContainer

