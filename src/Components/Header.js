import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <>
        <h1 id="title">Dine-amic Recipes</h1>
      <div id="nav-back">
        <ul className="nav">
          {this.props.currentUserId === null ? (
            <>
              <NavLink to="/login">
                <li>Login</li>
              </NavLink>
              <NavLink to="/signup">
                <li>Sign Up</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/meals">
                <li>All Recipes</li>
              </NavLink>
              <NavLink to="/mymeals">
                <li>My Recipes</li>
              </NavLink>
              <NavLink to="/meals/new">
                <li>Add New Recipe</li>
              </NavLink>
              <NavLink to="/login">
                <li onClick={() => this.props.logoutClickHandler()}>Logout</li>
              </NavLink>
            </>
          )}

          <li>Welcome {this.props.currentUser}</li>
        </ul>
        </div>
      </>
    );
  }
}

export default Header;
