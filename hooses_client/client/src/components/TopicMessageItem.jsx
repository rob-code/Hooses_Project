import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'


class TopicMessageItem extends React.Component {

  constructor(props){
    super(props)

  }

render(){

  const dateTime = this.props.dateTime.toString()
  const year = dateTime.substring(0,4)
  const month = dateTime.substring(5,7)
  const day = dateTime.substring(8,10)
  const time = dateTime.substring(11,16)


    // var req = new AjaxRequest()

    // console.log('props = ', this.props)

    // req.get('http://localhost:8000/api/users/' + this.props.user_id, (err, res) => {



    //   if(!res.error){



    //      const first_name = res.profiles[0].first_name
    //      const last_name = res.profiles[0].last_name
    //       const address = res.profiles[0].address
    //       const email = res.email
    //       const url = res.profiles[0].url
    //   }
    // })








  return (
<div>

    <div className="topic-message-item-header">{this.props.firstName} {this.props.lastName} posted: </div>
    <div className="panel-body message-item">
      {this.props.message}</div>
      <div className="topic-message-item-footer">Posted at {time} on {day}-{month}-{year}.</div>
    </div>

    )
}


}

export default TopicMessageItem