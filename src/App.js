import React,{useState} from 'react';
import Comp1 from './components/comp1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Peopledetails from './components/PeopleDetails';

 
const App=()=>{
   
  return (
    <>
    <BrowserRouter>
     <Switch>
      <Route path='/' exact ><Comp1/></Route>
      <Route path='/peopledetails/:name' exact><Peopledetails/></Route>

     </Switch>
    </BrowserRouter>
     </>
   ) }
 
 
 
 export default App;
