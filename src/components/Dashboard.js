import React from 'react';
import Fire from './Fire';
import emailjs from 'emailjs-com';
import {Button} from 'react-bootstrap';


class Dashboard extends React.Component {

constructor(props){
super(props)

this.state = {

fullName: '',
issue: '',
buildingNumber: '',
unitNumber: ''

}
}

sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_ubkybhk', event.target, 'user_OEDF711LULQkIhj373RPR')
      .then((result) => {
        console.log(result.text);
          alert('Succesufully received !, we will get back to you');
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });

      this.props.history.push('/');
      
  }

  handleChange = (e) => {
    let {name,value} = e.target 
     this.setState({[name]: value})
    console.log(this.state)
    }

render(){ 
return(

<div>
<h3>Hello</h3>
<h6>Please report your issue</h6>

<form class='form' onSubmit={this.sendEmail} method='POST'>
<input placeholder='Full Name' name='fullName' onChange={this.handleChange} onSubmit={this.sendEmail} value={this.state.firstName}/>
<br/>

<input placeholder='Issue' name='issue' onChange={this.handleChange} onSubmit={this.sendEmail} value={this.state.issue}/>
    {/* <option>Fading paint</option>
    <option>Clogs and Leaks</option>
    <option>Pest control</option>
    <option>Malfunctioning AC units</option>
    <option>Heating issue</option>
    <option>Flooring</option> */}

<br/>

<input placeholder='Building Number' name='buildingNumber' onChange={this.handleChange} onSubmit={this.sendEmail} value={this.state.buildingNumber}/>
<br/>

<input placeholder='Unit Number' name='unitNumber' onChange={this.handleChange} onSubmit={this.sendEmail} value={this.state.unitNumber}/>
<br/>

<Button type='submit' variant='success'>Submit Ticket</Button>
<br/>
<br/>
<br/>
<Button variant='danger' onClick={() => Fire.auth().signOut()}>Sign out</Button>
</form>
</div>

);

};
}

export default Dashboard;