import React,{useEffect,useState} from 'react';

import { Link } from 'react-router-dom';
import './comp2.css'


const Comp2=(props)=>{
    const [planet, setplanet] = useState('')
        useEffect(()=>{
        const fetchingData = async ()=>{
            const res=await fetch(props.homeworld);
            const data=await res.json();
            setplanet(data);
            return data;
            
        }
        fetchingData();
    },[props.homeworld]);

    
    return(
        <div>

            {
            props.gender==="male"||props.gender==="female"?
            <Link to={`/peopledetails/${props.name}`} className="head-container">
                <div className="main-container">
                <div>
                <p className="person-name">{props.name}</p>
                <p className="planet-name">{planet.name}</p>
                </div>
                <div className="human-text">
                <p >Human</p>
                </div>
                
                </div>
            </Link>:null
            }
        </div>
        )


}

export default Comp2;