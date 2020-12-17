import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './home/components/HomePage'
import WorkPage from './work/components/WorkPage'
import AboutPage from './about/components/AboutPage'
import ContactPage from './contact/components/ContactPage'
import PrototypePage from './prototype/components/PrototypePage'
import {Helmet} from 'react-helmet'

const StylizedApp = styled.div`
    background-color: ${props => props.theme.background};
    height: 100vh;
    width: 100vw;
`

function App() {
    return (
        <StylizedApp>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Drake Lee</title>
            </Helmet>
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
        </StylizedApp>
    )
}

export default App
