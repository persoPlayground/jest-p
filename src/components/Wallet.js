import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBalance, addDepeosit,  withdraw } from '../actions/balance';
export class Wallet extends Component {

    state = {
        balance: undefined
    }

    updateBalance = e =>{
        this.setState({balance: parseInt(e.target.value, 10)});
    }
    deposit = () => this.props.addDepeosit(this.state.balance);
    remove  = () => this.props.withdraw(this.state.balance);
    render(){
        return(
            <div>
                <h3 className="balance">Wallet Balance: { this.props.balance }</h3>
            
            <br />
            <input className="input-wallet" onChange={this.updateBalance} />
            <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
            <button className="btn-remove" onClick={this.remove}>withdraw</button>
            </div>
        )
    }
}

export default connect(state => ({balance: state}),{setBalance, addDepeosit, withdraw })(Wallet);