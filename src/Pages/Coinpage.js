import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Coinpage = () => {
    const [data,setData] = useState([]);
    const { id } = useParams();
    // console.log(id);

    useEffect(()=>{
        getCoinData();
    },[]);

    const getCoinData = async()=>{
        try{
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
            const json = await data?.json();
    
            const setter = Object.values(json);
            setData(setter);
        }
        catch(e){
            console.log(e.message);
        }
       
    }

  return (
    <div className='coin-page'>
        
       {/* {console.log(data)} */}
        <div className='coin-data'>
            <img src={data[14]?.large} alt='coin-image'/>
            <div className='box-crypto'>
            <h2>Coin Name: {data[2]}</h2>
            
            {/* <p>{data?.market_data?.current_price?.`${data[1]}`}</p>
            <h3>{data?.market_data?.market_cap?.`${data[1]}`}</h3> */}
          
            <p>Price : {data[27]?.price_change_24h} ₹</p>
            <p>Market Cap : {data[27]?.market_cap_change_24h} ₹</p>
            </div>
            </div>
     

    </div>
  )
}

export default Coinpage