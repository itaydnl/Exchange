import React, { Component } from 'react'
import {HashRouter as Router,Switch,Route,Link} from "react-router-dom"

export default class Update extends Component {
   
    handleSubmit(e){
        e.preventDefault();
        e.target.reset();
    }
    
    render() {
        return (
            <div className='Update'>
                <h1>Update</h1>
                <br/>
                <div className='table'>
                    <table >
                         <tr>
                            <th>Type</th>
                            <th>value</th>
                        </tr>
                        {this.props.state.coins.map((e)=>{
                            return (
                                <tr>
                                     <td>{e.name}</td>
                                     <td>{e.value}</td>
                                 </tr>
                            )})}
                    </table>
                </div>
                <br/>

                <form onSubmit={this.handleSubmit.bind(this)}>
                <p>Type</p>
                    <input id="coinsInputs" type="text" onChange={this.props.handleNewCoin}/>
                    <br/>
                <p>New Value</p>
                    <input id="coinsInputs" type="text" onChange={this.props.handleNewCoinValue}/>
                    <br/>
                

                <Link to='/Exchange/'>Back</Link>
                <button onClick={this.props.updateCoin}>Update</button>
               </form>
            </div>
        )
    }
}
