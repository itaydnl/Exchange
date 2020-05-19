import React, { Component } from 'react'

export default class ActionList extends Component {
    
    
    render() {
        return (
        //this component get :
        //from coin$ to coin$ 
        //from sum$  to sum$ 
        <div className='ActionList'> 
        <h2> #{this.props.id}</h2>

         <p>from: {this.props.from} to: {this.props.to}</p>
            
         <p>{this.props.before}{this.props.before[0]}={this.props.after}{this.props.after[0]}</p>  
         <button onClick={()=>{this.props.del(this.props.id)}}>x</button>
     </div>
        )
    }
}
