import React, { Component } from 'react';
import logo from './logo.svg';
import './Songs.css';

class App extends Component {
  render() {
    return (
      <div className="Songs">


        <ul className="collection">
            <li className="avatar row">

              <div className="col s6">
                <img src="https://images.hearthis.at/c/r/o/_/uploads/283048/image_user/w512_q70_m1494786019----cropped_1494786015.jpg" class="circle"/>
              </div>
              <div className="col s6">
                <span className="title">TDSmix</span>
                <p>
                    <b>Track count:</b> 0<br/>
                    <a className="btn-floating waves-effect waves-light btn indigo">
                        <span aria-hidden="true" className="fa fa-music"></span>
                    </a>
                </p>
              </div>
            </li>
            <li className="avatar row">

              <div className="col s6">
                <img src="https://images.hearthis.at/c/r/o/_/uploads/283048/image_user/w512_q70_m1494786019----cropped_1494786015.jpg" class="circle"/>
              </div>
              <div className="col s6">
                <span className="title">TDSmix</span>
                <p>
                    <b>Track count:</b> 0<br/>
                    <a className="btn-floating waves-effect waves-light btn indigo">
                        <span aria-hidden="true" className="fa fa-music"></span>
                    </a>
                </p>
              </div>
            </li>
            <li className="avatar row">

              <div className="col s6">
                <img src="https://images.hearthis.at/c/r/o/_/uploads/283048/image_user/w512_q70_m1494786019----cropped_1494786015.jpg" class="circle"/>
              </div>
              <div className="col s6">
                <span className="title">TDSmix</span>
                <p>
                    <b>Track count:</b> 0<br/>
                    <a className="btn-floating waves-effect waves-light btn indigo">
                        <span aria-hidden="true" className="fa fa-music"></span>
                    </a>
                </p>
              </div>
            </li>



        </ul>
      </div>
    );
  }
}

export default App;
