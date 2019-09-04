import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //another method too bind using arrow functions now this keyword to available to us
  onShowClick = e => {
    //updating the state
    this.setState({ showContactInfo: !this.state.showContactInfo });

    //you cant mutate state like this it is not recommended and u should use set state
    /*
    this.state = {
      showContactInfo: false
    };
*/
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact; // destruscturing
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//proptypes is just typechecking of props is it string bool or number any data type

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
