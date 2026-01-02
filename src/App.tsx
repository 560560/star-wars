import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Switch, withRouter } from 'react-router-dom'

import './index.css'
import { Films } from './components/Films'
import { Header } from './components/Header'
import { Home } from './components/Home'
import Planets from './components/Planets'
import PlanetItem from './components/Planets/PlanetItem'
import Residents from './components/Residents'
import ResidentItem from './components/Residents/ResidentItem'
import { Species } from './components/Species'
import { Starships } from './components/Starships'
import { Vehicles } from './components/Vehicles'

function App() {
  return (
    <div className="appWrapper">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Planets} path="/planets" />
        <Route component={PlanetItem} path="/planet/:planetId" />
        <Route component={Films} path="/films/:filmId?" />
        <Route exact component={Starships} path="/starships" />
        <Route exact component={Residents} path="/people" />
        <Route component={ResidentItem} path="/resident/:residentId" />
        <Route exact component={Species} path="/species" />
        <Route exact component={Vehicles} path="/vehicles" />
      </Switch>
    </div>
  )
}

const AppWithRouter = withRouter(App)
AppWithRouter.displayName = 'App'

export default AppWithRouter
