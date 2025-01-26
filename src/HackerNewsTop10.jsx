import { useEffect, useState } from "react";
import NewsList from "./Componenets/NewsList";




const HackerNewsTop10 = () => {

  const[data,setData]=useState()
  useEffect(()=>{
    fetch('http://hn.algolia.com/api/v1/search_by_date')
    .then((res)=>res.json())
    .then((data)=>{
      setData(data)
    })
  },[])



  return <div>
  <h1>TOP 10 Hacker News</h1>
  {!data && <p>Loading</p>}
  {data && <NewsList data={data.hits}/> }

  </div>;
};

export default HackerNewsTop10;
