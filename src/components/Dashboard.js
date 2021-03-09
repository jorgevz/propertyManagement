import React, {useState} from 'react';
import Fire from './Fire';
import emailjs from 'emailjs-com';
import {Button} from 'react-bootstrap';
import axios from 'axios';


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


handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_ubkybhk', event.target, 'user_OEDF711LULQkIhj373RPR')
      .then((result) => {
        console.log(result.text);
          alert('Succesufully received !, we will get back to you');
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });

      
axios.post('http://localhost:8080/tenants-management/v1/tenants', this.state)
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
})

this.props.history.push('/');

  }

  handleChange = (e) => {
    let {name,value} = e.target 
     this.setState({[name]: value})
    console.log(this.state)
    }



render(){ 

  


return(



<div class='form'>
<h3>Hello</h3>
<h6>Please report your issue below</h6>

<form  onSubmit={this.handleSubmit} method='POST'>
<input placeholder='Full Name' name='fullName' onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.firstName}/>
<br/>
<br/>

<input placeholder='Issue' name='issue' type='text' onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.issue} /> 

<br/>
<br/>
<input placeholder='Building Number' name='buildingNumber' onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.buildingNumber}/>
<br/>
<br/>
<input placeholder='Unit Number' name='unitNumber' onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.unitNumber}/>
<br/>
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