import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from "../main/dashboard";
import Navbar from "../main/components/navBar";
import Register from "../components/registration";
import Login from "../components/login";
import AddSite from "../sites/addSite";
import ListOfSites from "../sites/listOfSites";
import UpdateSites from "../sites/updateSites";
import ViewSiteByID from "../sites/viewSiteByID";




import profile from "../main/components/Profile";

function PageRoutes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <section className="content">
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/dashboard" component={Dashboard} exact/>
                        <Route path="/registration" component={Register}/>
                        
                        <Route path="/view-site/:id" component={ViewSiteByID}/>
                        <Route path="/update-site/:id" component={UpdateSites}/>
                        <Route path="/add-site" component={AddSite}/>
                        <Route path="/sites" component={ListOfSites}/>

                      
                        <Route path="/profile" component={profile}/>
                    </Switch>
                </section>
            </Router>
        </div>
    );
}

export default PageRoutes;

