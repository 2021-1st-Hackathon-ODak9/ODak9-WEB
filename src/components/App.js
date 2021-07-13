import * as Pages from '../pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' render={() => <Pages.IntroPage />} />
      </Switch>
    </>
  );
}

export default App;
