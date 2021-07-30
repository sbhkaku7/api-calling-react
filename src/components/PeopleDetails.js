import React,{ useState,useRef,useEffect }  from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Vehicles from './vechicles';
import './PeopleDetails.css';

const fetchingData=async (url)=>{
            const res=await fetch(url);
            return  res.json();
            
}

const PeopleDetails=(props)=>{
    let people= null;
    //const [people, setpeople] = useState();
    const params=useParams();
    
const searching=(val)=>{
    if(val.name.includes(params.name))
    { return val
    }

}

    
    const peopleQuery=useQuery('people',()=>fetchingData('https://swapi.dev/api/people'));
    if (peopleQuery.isLoading) 
{   return 'Loading...';}

    if (peopleQuery.error) 
{    return 'Error occured';}    

    if (peopleQuery.data!==undefined &&!peopleQuery.isLoading)
   { people=peopleQuery.data.results.filter((val)=>searching(val));
        
}
    
    
    return(
        <>
         {
         people.map(res=><div className="people-main">
            <p className="people-name">{res.name}</p>
            <p className="people-height">Height:{res.height}</p>
            <p className="people-mass">Mass:{res.mass}</p>
            <p className="people-vehicles-list">Vehicles :</p>
            <div className="people-vehicle">{!res.vehicles.length ? 'No Vehicles' : res.vehicles.map(resp=><Vehicles vehicle={resp} />)}</div>
        </div>)
         }
        {
        /* <h1>{peopleQuery.data!==undefined && peopleQuery.data.results.filter((val)=>{
            if(val.name.includes(params.name))
        { return val}
        }).map(res=><div className="people-main">
                <p className="people-name">{res.name}</p>
                <p className="people-height">Height:{res.height}</p>
                <p className="people-mass">Mass:{res.mass}</p>
                <div className="people-vehicle">{res.vehicles.map(resp=><Vehicles vehicle={resp} />)}</div>
            </div>
        )}
        </h1> */
        }
       
        </>
    )
}

export default PeopleDetails;

