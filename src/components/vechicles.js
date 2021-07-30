import React from 'react';
import { useState ,useEffect} from 'react';


const Vehicles =(props)=>
{    const [vehicle, setvehicle] = useState(null);

    useEffect(() => {
        const fetchingDatas=async ()=>{
            const res=await fetch(props.vehicle);
            const data=await res.json();
            console.log('www',data.name);
            setvehicle(data.name);
            return data.name;

        }
        fetchingDatas();

    }, [props.vehicle])

if(!vehicle){
    return <p>No Vehicle</p>
}
return(
    <>
    <div>{vehicle==={} && <p>No vehicle</p>}</div>
    <div>{!vehicle ? <p>No Vehicle</p>: vehicle }</div>
    </>
)

}

export default Vehicles;