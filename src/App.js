import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainComponent from "./pages/main/MainComponent";
import AddComponent from "./pages/add/AddComponent";
import EditComponent from "./pages/edit/EditComponent";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

      /*  this.setBg = this.setBg.bind(this);*/

    };


    /*орабатывает при монтировании компонента*/
    componentDidMount() {

    };




    render() {
        return (
            <Switch>

                <Route exact path={'/'}
                       render={props => (
                           <MainComponent  {...props}/>
                       )}/>

                <Route exact path={'/add'}
                       render={props => (
                           <AddComponent  {...props}/>
                       )}/>

                <Route exact path={'/edit/:client_id'}
                       render={props => (
                           <EditComponent {...props}/>
                       )}/>

            </Switch>
        )
    };
}


export default App;

