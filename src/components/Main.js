import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import ActionList from './ActionList.js'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toggle:false
        }
    }
    
     
    handleSubmit(e){
        e.preventDefault();
        e.target.reset();
       
        
    }

    switch=()=>{
        if(this.state.toggle===false){
            this.setState({toggle:true})
        }else{
            this.setState({toggle:false})
        }
        
        
    };

    
    

      
    render() {
        return (
            <div className="Main">
                <h1>EXCHANGE</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                <input type="text" onChange={this.props.handleInputSum} />
                        <br/>
                  <label >from: </label>
                     <select value={this.props.state.tempFrom} onChange={this.props.handleFrom}>
                     <option value="" selected>Please select</option>
                    {this.props.state.coins.map((e)=>{return <option value={e.name}>{e.name} </option>})}    
                     </select><br></br>
                </div>

                <div>
                  <label >to: </label>
                     <select value={this.props.state.tempTo} onChange={this.props.handleTo}>
                     <option value="" selected>Please select</option>
                    {this.props.state.coins.map((e)=>{return <option value={e.name}>{e.name} </option>})}    
                     </select><br></br>
                </div>


                        
                        <br/>
                        <button onClick={this.props.handleStart}>START</button>
                        <br/>

                        </form>
                        <Link to='/update'>Update</Link>
                        <a href="http://www.facebook.com">Share on Facebook!</a>
                        <button onClick={this.switch}>View exchange list</button>
                        <br/>

                            
                        <div>
                             {this.state.toggle && this.props.state.actions.map((e,i)=>{
                                return (
                                         <ActionList from={e.from}
                                                      to={e.to}
                                                       before={e.before}
                                                        after={e.after}
                                                         id={e.id}
                                                          del={this.props.del}/>
                                       )
                             })}
                        </div>
            </div>
        )
    }
}
