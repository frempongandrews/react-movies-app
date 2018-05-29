import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink
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

                        {/*<div className='small-screens-menu'>*/}
                            {/*<button>Menu</button>*/}
                        {/*</div>*/}

                        <img src={logo} className='App-logo' alt='logo'/>
                        <Link to='/'><h2 className='App-title'>{appTitle}</h2></Link>

                        {/*<div className='movies-section-container'>*/}
                            {/*<NavLink activeStyle={{color: '#00D171'}} className='movies-section discover' exact to='/'>Discover</NavLink>*/}
                            {/*<NavLink activeStyle={{color: '#00D171'}} className='movies-section popular' to='/test'>Most Popular</NavLink>*/}
                            {/*<NavLink activeStyle={{color: '#00D171'}} className='movies-section top-rated' to='/test'>Top Rated</NavLink>*/}
                        {/*</div>*/}
                    </header>

                    <Switch>


                        <Route exact path='/' component={MoviesList}/>
                        <Route path='/:movieId' component={MovieDetail}/>


                    </Switch>



                </div>

            </Router>

        )
    }

}


export default App;


