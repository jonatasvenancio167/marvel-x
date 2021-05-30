import WelcomeComponent from './components/Welcome/welcomeComponent'
import WikiComponent from './components/Wiki/wikiComponent'

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import DescriptionComponent from './components/Description/descriptionComponent';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={WelcomeComponent} />
              <Route path='/sobre' component={WikiComponent} />
              <Route path='/descricao' component={DescriptionComponent} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes