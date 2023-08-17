// Write your code here
import './index.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import Loader from 'react-loader-spinner'
class CryptocurrencyTracker extends Component{
    state={cryptoCurrenciesData:[],isLoading:true}

    componentDidMount(){
        this.getCryptoCurrencyData()
    }

    getCryptoCurrencyData=async()=>{
        const response=await fetch('https://apis.ccbp.in/crypto-currency-converter')
        const data=await response.json()
        this.setState({
            cryptoCurrenciesData:data.map(eachItem=>({
                id:eachItem.id,
                cryptoCurrencyImgUrl:eachItem.currency_logo,
                cryptoCurrencyName:eachItem.currency_name,
                usdValue:eachItem.usd_value,
                euroValue:eachItem.euro_value, 
            })),
            isLoading:false,
        })
    }

    render(){
        const {isLoading,cryptoCurrenciesData}=this.state
        return(
            <div className="bg-container">
            {isLoading ? (
            <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
            ) : (
            <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData}/>
            )}
            </div>

        )
    }
}
export default CryptocurrencyTracker
