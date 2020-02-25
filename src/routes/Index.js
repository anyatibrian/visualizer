import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppContainer from '../containers/AppContainer'
import MapContainer from '../containers/MapContainer'
import FieldDataContainer from '../containers/FieldDataContainer'
import { store } from '../store/store'
import BarChartContainer from '../containers/BarChartContainer'
import PieandChartBarContainer from '../containers/PieandBarContainer'
import SignInContainer from '../containers/SignInContainer'
import HeaderComponent from '../components/HeaderComponent'

class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Switch>
                        <Route path="/dashboard" exact component={AppContainer} />
                        <Route path="/header" component={HeaderComponent} />
                        <Route path="/map" component={MapContainer} />
                        <Route path="/barchart" component={BarChartContainer} />
                        <Route path="/pie/bar" component={PieandChartBarContainer} />
                        <Route path="/field/data" component={FieldDataContainer} />
                        <Route path="/" component={SignInContainer} />
                    </Switch>
                </Provider>
            </div>
        )
    }
}

export default AppRoutes
