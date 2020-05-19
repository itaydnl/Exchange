
import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import './App.css';
import Update from './components/Update.js'
import Main from './components/Main';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      coins:[{name:'sheckel',value:1},
               {name:'dollar',value:3.5},
                 {name:'euro',value:4}],
      actions: [],
      tempFrom:'',
      tempTo:'',
      tempSum:0,
      newCoin:'',
      newCoinValue:0
    }
  }

  delAction=(num)=>{
    let filtered=this.state.actions.filter((e)=>(e.id!==num))
    this.setState({actions:filtered})
  };

  handleNewCoin=(e)=>{
    this.setState({newCoin:e.target.value})
  };
  handleNewCoinValue=(e)=>{
    this.setState({newCoinValue:e.target.value}) 
  };

  updateCoin=()=>{
    //check if coin is in the list 
      let flag=0,flag2=0;
      this.state.coins.map((e)=>{
          if(this.state.newCoin===e.name){
            flag++;
          }
      })

      // let englishChars = /^[A-Za-z]*$/;
      // for(let i=0;i>this.state.newCoin.length;i++){
      //   console.log(englishChars.test(this.state.newCoin[i],i));
        
      //   if (englishChars.test(this.state.newCoin[i])){
      //     flag2++;
      //     console.log('not');
          
      // }
      // }
      




      //if not add to the list 
          if( flag===0 && this.state.newCoin.length>3 && this.state.newCoinValue>0){

            let coinObject={name:this.state.newCoin ,value:this.state.newCoinValue}
            this.setState({coins:[...this.state.coins ,coinObject]})
          }else{
            alert('err')
          }
      //reset the temp
      // this.setState({newCoin:'',newCoinValue:0})
      
  };

  handleFrom=(e)=>{
    this.setState({tempFrom:e.target.value})
  };
  handleTo=(e)=>{
    this.setState({tempTo:e.target.value}) 
  };
  handleInputSum=(e)=>{
      this.setState({tempInputSum:e.target.value})
  }

  handleStart=()=>{
      //check input for only numbers ,no chars allowd
        let isNum = isNaN(this.state.tempInputSum)
        let MultiplyOperator=0;
        this.state.coins.map((e)=>{
            if(this.state.tempFrom===e.name){
               MultiplyOperator=e.value;
                
            }
        })
        let DivideOperator=0;
        this.state.coins.map((e)=>{
            if(this.state.tempTo===e.name){
               DivideOperator=e.value;
                
            }
        })
        // console.log(MultiplyOperator);
        // console.log(DivideOperator);
        // console.log(!isnum); test line 
        if(!isNum && this.state.tempInputSum>0){
                //multiply input by {tempFrom} save to sum
                   let sum = this.state.tempInputSum * MultiplyOperator;
                      //divide input by {tempTo} save it to sum 
                        sum = sum/DivideOperator;
                          //alert sum 
                          alert(sum);

                            //update {from} and {to} and {how much before} and {how much after}
                            let actionId = this.state.actions.length+1;
                            let tempAction={from:this.state.tempFrom,
                                              to:this.state.tempTo,
                                               before:this.state.tempInputSum,
                                                  after:sum,
                                                    id:actionId}
                                        // console.log(tempAction);
                            this.setState({actions:[...this.state.actions,tempAction]})
        }else{
            alert('err');
        }

        //reset the temps
        this.setState({tempInputSum:0})
    }
  

  

  

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/Exchange/' render={(props) => <Main {...props}
                                                           state={this.state}
                                                            handleFrom={this.handleFrom}
                                                             handleTo={this.handleTo}
                                                              handleInputSum={this.handleInputSum}
                                                               handleStart={this.handleStart}
                                                                del={this.delAction}


                                                           />}/>
            <Route exact path='/Exchange/update' render={(props) => <Update {...props} 
                                                                    state={this.state}
                                                                     handleNewCoin={this.handleNewCoin}
                                                                      handleNewCoinValue={this.handleNewCoinValue}
                                                                       updateCoin={this.updateCoin}
                                                            />}/>

        
         </Switch>
        </Router>
      </div>//App
    )
  }
}

