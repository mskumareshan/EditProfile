import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getProfile, updateProfile} from './action/profile'
import { connect } from 'react-redux';

class EditProfile extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      forceChangePassword: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.profileSubmit = this.profileSubmit.bind(this);
    this.Cancel = this.Cancel.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getProfile());
  }

  profileSubmit() {
    const { dispatch } = this.props;
    dispatch(updateProfile('113403',this.state.forceChangePassword));
  }
  Cancel() {

  }
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;    
    this.setState({forceChangePassword: value });
  } 
    
  
  render() {
    let {profile} = this.props;    
    let data = profile;
    return (
      <div className="container"  id="edit-profile">
    <h2>Edit profile</h2>
    <div id="main">
        <div className="tabbed-content-wrapper">
          <div className="tabs-container">
              <div className="tab-content">
                <form>
                    <div className="model-properties">
                      <fieldset>
                          <legend>
                            <h3 id="" data-name="">
                                Account summary
                            </h3>
                          </legend>
                          <div>
                            <ul className="table summary-table">
                                <li className="input input-label first">
                                  <div className="table-label referer-label">
                                      <label for="referer" title="Referer">
                                      Referer          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value referer-value">
                                      <span title="unknown" id="referer" name="referer" className=" label-field input">{data.Referer}</span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                                <li className="input input-label">
                                  <div className="table-label added-label">
                                      <label for="added" title="Added">
                                      Added          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value added-value">
                                      <span id="added" name="added" className=" label-field input">{data.Added}</span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                                <li className="input input-label">
                                  <div className="table-label last-login-label">
                                      <label for="last-login" title="Last login">
                                      Last login          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value last-login-value">
                                      <span id="last-login" name="last_login" className=" label-field input">{data.lastLogin}</span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                                <li className="input input-label">
                                  <div className="table-label language-label">
                                      <label for="language" title="Language">
                                      Language          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value language-value">
                                      <span id="language" name="language" className=" label-field input">{data.laug}</span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                                <li className="input input-label last">
                                  <div className="table-label orders-count-label">
                                      <label for="orders-count" title="Orders count">
                                      Orders count          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value orders-count-value">
                                      <span id="orders-count" name="orders_count" className=" label-field input"><a href="admin.php?target=order_list&amp;action=searchByCustomer&amp;profileId=1&amp;xcart_form_id=LYmiTFxsrB1jmnQfXXt8HrGTWTe4git8">{data.count}</a></span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                            </ul>
                          </div>
                      </fieldset>
                      <fieldset>
                          <legend>
                            <h3 id="" data-name="">
                                Email &amp; password
                            </h3>
                          </legend>
                          <div>
                            <ul className="table main-table">
                                <li className="input input-label first last">
                                  <div className="table-label login-label">
                                      <label for="login" title="Email">
                                      Email          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value login-value">
                                      <span maxlength="128" id="login" name="login" className=" label-field input">{data.email}</span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                            </ul>
                          </div>
                      </fieldset>
                      <fieldset>
                          <legend>
                            <h3 id="" data-name="">
                                Access information
                            </h3>
                          </legend>
                          <div>
                            <ul className="table access-table">
                                <li className="input input-label first">
                                  <div className="table-label access-level-label">
                                      <label for="access-level" title="Access level">
                                      Access level          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value access-level-value">
                                      <span id="access-level" name="access_level" className=" label-field input">{data.access}</span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                                <li className="input input-checkbox-enabled last">
                                  <div className="table-label forcechangepassword-label">
                                      <label for="forcechangepassword" title="Require to change password on next log in">
                                      Require to change password on next log in          </label>
                                  </div>
                                  <div className="star">&nbsp;</div>
                                  <div className="table-value forcechangepassword-value">
                                      <span className="input-field-wrapper checkbox input input-checkbox-enabled">
                                        <input type="hidden" name="forceChangePassword" value=""/>
                                        <input id="forcechangepassword" name="forceChangePassword" type="checkbox" value="1" onChange={this.handleInputChange} className="form-control"/>
                                      </span>
                                  </div>
                                  <div className="clear"></div>
                                </li>
                            </ul>
                          </div>
                      </fieldset>
                    </div>
                </form>
              </div>
          </div>
        </div>
    </div>
    <button onClick={this.profileSubmit}>Save</button>
    <button onClick={this.Cancel}>Cancel</button>
  </div>

    );
  }
}

//export default EditProfile;
function mapStateToProps(state) {
  let {profile } = state;

let appState=state.app && state.app.appState ? state.app.appState:'';
  return {
    profile
  };
}

export default connect(mapStateToProps)(EditProfile);

