import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<section>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/about" component={AboutPage} />
                        {/* <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/projects" component={Projetcs} />
                        <Route exact path="/service" component={Services} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/thankyou" component={Thankyou} />
                        <Route exact path="/resume" component={ResumePage} />
                        <Route path="/:project_name/details/:project_id" component={ProjectDetails} />
                        <Route path="/:skill_name/skills_details/:skill_id" component={SkillsDetailsPage} /> */}
                    </Switch>
                </BrowserRouter>
            </section>
	);
}

export default App;
