
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { CreateTripPage } from '../pages/CreateTripPage';
import HomePage from '../pages/HomePage';
import { ListTripsPages } from '../pages/ListTripsPages';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';
import {BrowserRouter, Switch, Route} from "react-router-dom";




export const Router =() => {
  return (
    

<BrowserRouter>
<Switch>
  <Route exact path={"/"}>
    <HomePage/>
  </Route>

  <Route exact path={"/trips/application"}> 
    <ApplicationFormPage/>
  </Route>

   <Route exact path={"/admin/trips/create"}>
    <CreateTripPage/>
  </Route>

  <Route exact path={"/admin/trips/list"}>
    <ListTripsPages/>
  </Route>

  <Route exact path={"/login"}>
    <LoginPage/>
  </Route>

  <Route exact path={"/admin/trips/:id"}>
    <TripDetailsPage/>
   </Route> 
   
</Switch>
    
</BrowserRouter>




    
  );
}

export default Router;
