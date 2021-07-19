import{BrowserRouter as Router,Switch,Route}from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import reducer from "./Store/reducers/user";
import {createStore} from "redux";
import {Provider} from "react-redux"

const store=createStore(reducer);

const App = () => {
  return (
  <Provider store={store}>
   <Router>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/users" exact component={User}/>
     </Switch>
   </Router>
  </Provider>
  )
}

export default App
