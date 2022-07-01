import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import {NavLink} from 'react-router-dom'
import {faCapsules, faFlask, faHome, faHospital} from '@fortawesome/free-solid-svg-icons'
export class SideBarNavigation extends Component{
    render(){
        const homeIcon = <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        const medicineIcon = <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>
        const appointmentIcon = <FontAwesomeIcon icon={faHospital}></FontAwesomeIcon>
        const labIcon = <FontAwesomeIcon icon={faFlask}></FontAwesomeIcon>
        return(
        <div className="sidebar-container">
            <div className="navigations">
                <NavLink to="/" className="navigation" title="Home">{homeIcon}</NavLink>
                <NavLink to="/underconstruction" className="navigation" title="Book an Appointment">{appointmentIcon}</NavLink>
                <NavLink to="/underconstruction" className="navigation" title="Book a Lab Test">{labIcon}</NavLink>
                <NavLink to="/ordermedicines" className="navigation" title="Order Medicines">{medicineIcon}</NavLink>
            </div>
        </div>
        )
    }
}