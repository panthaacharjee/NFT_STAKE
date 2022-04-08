import React, { useState } from 'react'
import HomeData from './HomeData';
import { useForm } from "react-hook-form";

const Home = () => {
    const [item, setItem] = useState([...HomeData]); //Item Set
    const [value, setValue] = useState();
    const [half, setHalf] = useState();
    const handleChange=(e)=>{
        const val = e.target.value;
        setHalf(val);
    }
    // console.log(typeof(item))
    const onsubmit=(data)=>{
        setItem([...item, data])
        
    }
    // For Add Item
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showItme, setShowItem] = useState(false)
  return (
    <div className='container'>
        <div className="connect_wallet_box">
            <p>0 ~ 30 days, 1%, 31 ~ 60 days 2%, 60 ~ 90 days, 5%.</p>
            <button className='connect_wallet'>Connect Wallet</button>
        </div>
        <div className="wallet_ballance_box">
            <div className="wallet_ballance">
                <p style={{textAlign: "center"}}>Wallet Ballance : 200,000 Tokens</p>
                <div className="input_box">
                    <input type="text" placeholder='Input Here' value={value} onChange={handleChange}/>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <button onClick={()=>setValue(100)}>Max</button>
                        <button className='half' onClick={()=>setValue(half/2 || value/2)}> Half</button>
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
                    <button className='claim'>Claim All</button>
                </div>
            </div>
            <div className="reward_per_day">
                <button>Reward Per day : 1207</button>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop: 30}}>
                <button className="add_item" onClick={()=>setShowItem(!showItme)}>Add Item</button>
        </div>
        <div className={showItme ? "add_item_input" : "add_item_none"}>
           <form>
                <label>Tokens : </label><br/>
                <input {...register("tokens", {required:true})} type="text"/>
                {errors.tokens && <p style={{color :"red"}}>This field is required!</p>}<br/>
                <label>StakeTime : </label><br/>
                <input {...register("staketime", {required:true})} type="text"/>
                {errors.tokens && <p style={{color :"red"}}>This field is required!</p>}<br/>
                <label>Passed : </label><br/>
                <input {...register("passed", {required:true})} type="text"/>
                {errors.tokens && <p style={{color :"red"}}>This field is required!</p>}<br/>
                <label>Claimed : </label><br/>
                <input {...register("claimed", {required:true})} type="text"/>
                {errors.tokens && <p style={{color :"red"}}>This field is required!</p>}<br/>
                <label>Reward : </label><br/>
                <input {...register("reward", {required:true})} type="text"/>
                {errors.tokens && <p style={{color :"red"}}>This field is required!</p>}<br/>
                <button onClick={handleSubmit(onsubmit)}>Submit</button>
           </form>
        </div>
        <div className="item_box">
                {
                    item.map((val, ind)=>{
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
                                    <button className='item_withdraw'>Withdraw</button>
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