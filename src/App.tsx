import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Switch, withRouter } from 'react-router-dom'

import './styles/main.scss'
import { Films } from './components/Films'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import PlanetItem from './components/Planets/PlanetItem/PlanetItem'
import Planets from './components/Planets/Planets'
import ResidentItem from './components/Residents/ResidentItem/ResidentItem'
import Residents from './components/Residents/Residents'
import { Species } from './components/Species'
import { SpecieItem } from './components/Species/SpecieItem'
import { Starships } from './components/Starships'
import { StarshipItem } from './components/Starships/StarshipItem'
import { Vehicles } from './components/Vehicles'
import { VehicleItem } from './components/Vehicles/VehicleItem'

function App() {
  return (
    <div className="appWrapper">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
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
        <Route component={StarshipItem} path="/starship/:starshipId" />
        <Route exact component={Residents} path="/people" />
        <Route component={ResidentItem} path="/resident/:residentId" />
        <Route exact component={Species} path="/species" />
        <Route component={SpecieItem} path="/specie/:specie" />
        <Route exact component={Vehicles} path="/vehicles" />
        <Route component={VehicleItem} path="/vehicle/:vehicle" />
      </Switch>
      <Footer />
    </div>
  )
}

const AppWithRouter = withRouter(App)
AppWithRouter.displayName = 'App'

export default AppWithRouter
