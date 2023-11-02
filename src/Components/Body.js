import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import RestaurentCard from "./RestaurentCard"
import reslist from "../utils/mockdata"
import { useState } from "react"

const Body =()=>{
    const[Restrurentlist,setRestrurentlist]=useState(reslist)
    return (
        <div className="body-container">
            <div className="Filter">
                <button className="filter-btn" onClick={()=>{
              const filterlsit=      Restrurentlist.filter((res)=>(res.data.avgRating>4))
              setRestrurentlist(filterlsit)
                    //  here i write a call abck function which will Execute after clicking


                }}>High Rating</button>
                <button className="Allres-list" onClick={()=>{

                    setRestrurentlist(reslist);
                }}>Show All Res</button>
                
               
            </div>
            <div className="food-card-container">
           {Restrurentlist.map((restaurent)=>(
            <RestaurentCard resdata={restaurent} />
    
           ))}
                
                
                
                
            </div>
        </div>
        
    )
    }

    export default Body;