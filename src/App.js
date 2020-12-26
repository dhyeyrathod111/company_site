import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <section>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/service" component={ServicesPage} />
                    <Route exact path="/projects" component={ProjectPage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
            </BrowserRouter>
        </section>
    );
}

export default App;
