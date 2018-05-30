import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import { AnimatedSwitch } from 'react-router-transition';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,

} from 'react-router-dom';

const Test = ( {match} ) => {
    return (
        <div className='test'>
            <h2>{match.params.id}</h2>
        </div>
    )
};




class App extends Component {


    render () {

        const appTitle = '< My Movies >';

        return (

            <Router>

                <div className='App'>

                    <header className='App-header'>



                        <img src={logo} className='App-logo' alt='logo'/>
                        <Link to='/'><h2 className='App-title'>{appTitle}</h2></Link>


                    </header>

                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}>


                        <Route exact path='/' component={MoviesList}/>
                        <Route path='/:movieId' component={MovieDetail}/>


                    </AnimatedSwitch>



                </div>

            </Router>

        )
    }

}


export default App;


