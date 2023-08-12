import React, { useEffect, useState } from 'react'
import Coin from './Coin';
import { Link } from 'react-router-dom';


const Homepage = () => {
    const [searchText,setSearchText] = useState('');
    const [coinData,setCoinData] = useState([]);
    const [coinFilterData,setFilterCoinData] = useState([]);


    useEffect(()=>{
        getCoinData();
    },[]);

    useEffect(()=>{
        filterCoinData(searchText,coinData);
    },[searchText]);

    const filterCoinData=(searchText,coinData)=>{

        const data = coinData.filter(coin=>coin.name.toLowerCase().includes(searchText.toLowerCase()));

        setFilterCoinData(data);
    }

    const getCoinData = async()=>{
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const json = await data.json();

        setCoinData(json);
        setFilterCoinData(json);
    }

// console.log(data.id);
  return (
    <div className='home'>
        <input type='text' value={searchText}  placeholder='Search Coins' onChange={(e)=>setSearchText(e.target.value)}/>

<div className='coins-list'>
        {coinFilterData.map(coin=>(
            <Link to={'/coins/' + coin.id}  key={coin.id} ><Coin {...coin} key={coin.id}/></Link>
        ))}
        </div>
    </div>
  )
}

export default Homepage