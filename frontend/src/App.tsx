import {Router} from 'react-router-dom';
import {ContextApi} from "./ui/context";
import Routes from "src/Routes"
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

function App() {
  return (
      <ContextApi>
          <Router history={history}>
              <Routes />
          </Router>
      </ContextApi>
  );
}

export default App;
