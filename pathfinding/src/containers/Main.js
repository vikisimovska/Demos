import { Switch, Route } from 'react-router-dom'

// Paths:
// /pathfinding
// /about

const Main = () => (
  <main>
    // **
    <Switch>
      <Route path='/pathfinding/:algorithm' component={Pathfinding}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main;
