import React, { Component } from 'react';
import Clock from './clock';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Image from './christmas.gif';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            deadline: 'December 25, 2018'
        };
    }

    currentValue = "";

    changeDate = (e) => {
        this.currentValue = e.target.value;
        e.preventDefault();
    }

    setDate = (e) => {
        this.setState({
            deadline: this.currentValue
        })
        e.target.value = null;
    }

    revertToOriginal = () => {
        this.setState({
            deadline: 'December 25, 2018'
        })
    }

    render(){
        return(
            <div className="App">
                <h1 className="App-title"> Countdown to {this.state.deadline} </h1>
                <div>
                    <Clock deadline={this.state.deadline}/>
                    <Form inline>
                    <FormControl type="text" onChange={this.changeDate} placeholder="New Date" 
                    className="deadline-input"/>
                    <Button onClick={this.setDate}> Submit </Button>
                    <Button onClick={this.revertToOriginal}> Revert </Button>
                    </Form>
                </div>
                <img className="main-image" src={Image} alt="christmas is coming" />
            </div>
        )
    }
}

export default App;