import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import './Navbar.css';

class NavHome extends Component {
    render() {
        return (
            <Navbar brand='O - T r A c K - U' right>
                <NavItem><Link to='/home'>Home</Link></NavItem>
                <NavItem><Link to='/new'>New</Link></NavItem>

                <Dropdown trigger={
                    <Button id='animeDropBtn'>List Of Animes</Button>
                }>
                    <NavItem><Link to='/anime/myheroacademia'>My Hero Academia (Buko No Hero)</Link></NavItem>
                    <NavItem><Link to='/anime/naruto'>Naruto</Link></NavItem>
                </Dropdown>
            </Navbar>
        )
    }
}

export default NavHome;