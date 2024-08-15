import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from '../App'
import FlightForm from '../components/flightform/FlightForm'
import HotelForm from '../components/hotelform/HotelForm'
import InitialRouteHandler from '../components/InitialRouteHandler/InitialRouteHandler'

export const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<InitialRouteHandler />} />
    <Route path='/flights' element={<App/>}>
        <Route path='' element={<FlightForm/>}/>
    </Route>
    <Route path='/hotels' element={<App/>}>
        <Route path='' element={<HotelForm/>}/>
    </Route>
    </>
)
)