import React from 'react'

const Coin = ({name,image,current_price,market_cap,price_change_24h}) => {
  return (
    <div className='coin-box'>
        <img src={image}/>
        {/* <h2>{symbol}</h2> */}
        <h3>{name}</h3>
        <p>Price :  <span> {current_price} ₹</span></p>
        <p className='market-price'>Market Price : <span> {market_cap} ₹</span></p>
        <p> Price change after 24hr :  <span>{price_change_24h} ₹</span></p>
    </div>
  )
}

export default Coin