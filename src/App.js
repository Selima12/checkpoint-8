import React from 'react';
import Daniel from './Daniel.jpg';
import Sarra from './Sarra.jpg';
import Harold from './harold.jpg';
import './App.css';

function Button(props) {
  return <button onClick={props.onClick}>{props.btn}</button>}
  export default class App extends React.Component{
    constructor(props){
      super(props);
    this.state={
      photo: Sarra,
      Name : 'Sarra' ,
      Texte : 'Hi my name is Sarra , i m 20 years old ',
     
    }
  }

  render(){
    return (
      <div>
        <center>
    <button onClick={()=>{
      this.setState({Name:"Daniel",photo:Daniel,Texte:"Hi my name is Daniel , i m 25 years old"})
    }}>Daniel</button>  

    <button onClick={()=>{
      this.setState({Name:"Harold",photo:Harold,Texte:"Hi my name is Harold , i m 40 years old"})
    }}>Harold</button> 
    <button onClick={()=>{
      this.setState({Name:"Sarra",photo:Sarra,Texte:"Hi my name is Sarra , i m 20 years old"})
    }}>Sarra</button> 

    <h1> {this.state.Name}</h1>
    <img style={{width:250,height:250}} src={this.state.photo}/>  
    <h3> {this.state.Texte} </h3>
    </center>
    </div>
  
);

}
}


