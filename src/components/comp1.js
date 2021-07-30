import React,{useState} from 'react';
import {useQuery } from 'react-query';
import Comp2 from './comp2';

const fetchingData=async ()=>{
    const res=await fetch('https://swapi.dev/api/people');
    return res.json();
}


const Comp1=()=>{
    // const [searching, setsearching] = useState();
    const [searchTerm, setsearchTerm] = useState('')
     const { isLoading, error, data:info } = useQuery('repoData',fetchingData);
       
    
      //  const wholeData = React.useRef(null);
       
      //  React.useEffect(()=>{
      //     if(data){
      //       wholeData.current = data.results.map(x=> x);
      //     }
      //  },[data])
  
     if (isLoading) return 'Loading...';
   
     if (error) return 'An error has occurred: ' + error.message;
   
     return (
       <div>
         <form>
           <div className="d-flex justify-content-between">
            <input className="w-100" placeholder="search" onChange={event=>setsearchTerm(event.target.value)}/>
            <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
           </button>
           </div>
  {        info.results.filter((val)=>{
            if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
           }).map(res=><Comp2 key={res.name} name={res.name} homeworld={res.homeworld} gender={res.gender}/>)}        
         {/* <p>{data.description}</p>
         <strong>👀 {data.subscribers_count}</strong>{' '}
         <strong>✨ {data.stargazers_count}</strong>{' '}
         <strong>🍴 {data.forks_count}</strong> */}   
        </form>
  
     </div>
     )
   }

   export default Comp1;