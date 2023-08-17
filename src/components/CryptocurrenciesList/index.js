// Write your JS code here
import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component{

    displayCryptocurrencyHeader=()=>(
        <div className="header-container">
        <p className="coin-type">Coin Type</p>
        <div className="coin-value-container">
        <p className="coin-value">USD</p>
        <p className="coin-value">EURO</p>
        </div>
        </div>
    )

    displayCryptocurrenciesList=()=>{
        const {cryptoCurrenciesData}=this.props
        return(
            <div className="cryptocurrencies-list-container">
            {this.displayCryptocurrencyHeader()}
            <ul className="cryptocurrency-items-list">
            {cryptoCurrenciesData.map(eachCurrency=>(
                <CryptocurrencyItem key={eachCurrency.id} cryptoCurrencyDetails={eachCurrency}/>
            ))}
            </ul>
            </div>
        )
    }

    render(){
        return(
            <div className="cryptocurrency-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png" alt="cryptocurrency" className="main-img"/>
            {this.displayCryptocurrenciesList()}
            </div>
        )
    }
}
export default CryptocurrenciesList
