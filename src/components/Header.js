import { Component } from "react";
import {SideBarNavigation} from '../components/SideBarNavigation'
import {faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CartBtn from "./buttons/CartBtn";
import { NavLink } from "react-router-dom";
import {  useSelector } from 'react-redux'
export class Header extends Component{
    render(){
        const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
        const userIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        // const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        const CartIcon = () => {
            const state = useSelector((state)=> state.addItem)
            return (
                <>
                    <NavLink to="/cart" className="btn shadow-none ms-1 mybutton"> 
                        <span className="fa fa-shopping-cart">&nbsp;({state.length})</span> 
                    </NavLink>
                </>
            )
        }
        return(
        <div className="header-container">
            <div className="heading">ONLINE MEDICINE APPLICATION</div>
            <div className="userOptions">
                <div>{<CartIcon/>}</div>
                <div>{userIcon}</div>
                 &nbsp;
                 &nbsp;
                <div>{logOutIcon}</div>
            </div>
            <SideBarNavigation></SideBarNavigation>
            </div>
        )
    }
}