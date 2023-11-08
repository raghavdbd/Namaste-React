import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import RestaurentCard from "./RestaurentCard"
import reslist from "../utils/mockdata"
import { useState } from "react"

const Body =()=>{
    const[Restrurentlist,setRestrurentlist]=useState(reslist);

    useEffect(()=>{
        fetchData();

    },[]);


    const fetchData= async()=>{

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6445807&lng=77.3654611&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const   json=await data.json();
        setRestrurentlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json)
    }
    return (
        <div className="body-container">
            <div className="Filter">
                <button className="filter-btn" onClick={()=>{
              const filterlsit=      Restrurentlist.filter((res)=>(res.info.avgRating>4))
              setRestrurentlist(filterlsit)
                    //  here i write a call abck function which will Execute after clicking


                }}>High Rating</button>
                <button className="Allres-list" onClick={()=>{
                    

                    setRestrurentlist(json);
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