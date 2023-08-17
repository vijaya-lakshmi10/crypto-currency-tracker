// Write your JS code here
import './index.css'
const CryptocurrencyItem=props=>{
    const {cryptoCurrencyDetails}=props
    const {cryptoCurrencyImgUrl,cryptoCurrencyName,usdValue,euroValue}=cryptoCurrencyDetails
    return(
        <li className="cryptocurrencies-list">
        <div className="image-and-name-container">
        <img src={cryptoCurrencyImgUrl} alt={cryptoCurrencyName} className="currency-image"/>
        <p className="currency-name">{cryptoCurrencyName}</p>
        </div>
        <div className="usd-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
        </div>
        </li>
    )
}
export default CryptocurrencyItem
