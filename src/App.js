import {Route, Switch} from 'react-router-dom'
import HomePage from './home/components/HomePage'
import WorkPage from './work/components/WorkPage'
import AboutPage from './about/components/AboutPage'
import ContactPage from './contact/components/ContactPage'
import PrototypePage from './prototype/components/PrototypePage'

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
                <Route path='/prototype'>
                    <PrototypePage/>
                </Route>
                <Route path='/'>
                    <HomePage/>
                </Route>
            </Switch>
        </div>
    )
}

export default App
