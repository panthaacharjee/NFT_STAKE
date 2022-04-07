import React from 'react'
// import {Link} from 'react-router-dom'
import { HomeData } from './HomeData'

const Home = () => {
  return (
    <div className='container'>
        <div className="connect_wallet_box">
            <p>0 ~ 30 days, 1%, 31 ~ 60 days 2%, 60 ~ 90 days, 5%.</p>
            <a>Connect Wallet</a>
        </div>
        <div className="wallet_ballance_box">
            <div className="wallet_ballance">
                <p style={{textAlign: "center"}}>Wallet Ballance : 200,000 Tokens</p>
                <div className="input_box">
                    <input type="text" placeholder='Input Here'/>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <button>Max</button>
                        <button style={{background : "#FFD78C"}}>Half</button>
                    </div>
                </div>
                <p style={{marginTop: 50}}>Total Staked Tokens : 120350 Tokens</p>
                <p>Total Pending Reward : 2605 Tokens</p>
                <p>Total Claimed Reward : 500 Tokens</p>
            </div>
            <div className="staked_more">
                <button className='staked_more_btn'>Staked More</button>
                <div className="withdraw_claim">
                    <button>Withdraw All</button>
                    <button style={{background : "#FFC601", marginTop: 10}}>Claim All</button>
                </div>
            </div>
            <div className="reward_per_day">
                <button>Reward Per day : 1207</button>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop: 30}}>
                <button className="add_item">Add Item</button>
        </div>
        <div className="item_box">
                {
                    HomeData.map((val, ind)=>{
                        return(
                            <div className='item' key={ind}>
                                <p>{val.tokens} Tokens</p>
                                <p>Staked Time : {val.staketime}</p>
                                <p>{val.passed} days passed</p>
                                <div style={{lineHeight : 0.5}}>
                                    <p>Claimed : {val.claimed} Tokens</p>
                                    <p>Reward : {val.reward} Tokens</p>
                                </div>
                                <div className="item_button">
                                    <button style={{marginRight : 20}}>Claim</button>
                                    <button style={{background: "#F6B69B"}}>Withdraw</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Home