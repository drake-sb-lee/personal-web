import './App.css'
import {Route, Switch} from 'react-router-dom'
import HomePage from './home/components/HomePage'
import WorkPage from './work/components/WorkPage'
import AboutPage from './about/components/AboutPage'
import ContactPage from './contact/components/ContactPage'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/about'>
                    <AboutPage/>
                </Route>
                <Route path='/work'>
                    <WorkPage/>
                </Route>
                <Route path='/contact'>
                    <ContactPage/>
                </Route>
                <Route path='/'>
                    <HomePage/>
                </Route>
            </Switch>
        </div>
    )
}

export default App
