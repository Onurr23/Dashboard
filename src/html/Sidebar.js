import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Sidebar extends Component {

    render() {
        return (
            <div>

            <div class="sidebar" data-color="blue">

            <div class="logo">
                <a href="http://www.creative-tim.com" class="simple-text logo-normal">
                GAIS
                </a>
            </div>
            <div class="sidebar-wrapper" id="sidebar-wrapper">
                <ul class="nav">
                <li>
                    <NavLink to="/" exact activeStyle={{ color:'green' }}>
                    <i class="now-ui-icons design_app"></i>
                    <p>Dashboard</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/profile" exact activeStyle={{ color:'green' }}>
                    <i class="now-ui-icons users_single-02"></i>
                    <p>User Profile</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/urls" exact activeStyle={{ color:'green' }}>
                    <i class="now-ui-icons ui-1_lock-circle-open"></i>
                    <p>URLS</p>
                    </NavLink>
                </li>
                </ul>
            </div>
            </div>

            </div>
        )
    }
}
