import React, { Component } from 'react'
import LineChart from './LineChart';
import LineChart2 from './LineChart2'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChart from './DoghnutChart'
import BarChart from './BarChart'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from "./Footer";

export default class Dashboard extends Component {


  render() {
        return (
            <div className="wrapper">

                <Sidebar/>

            <div class="main-panel" id="main-panel">

            <Navbar/>

              <div className="panel-header panel-header-sm">
              </div>

      <div>
        <LineChart/>
      </div>
      <div class="content" style={{marginTop : '100'}}>
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-chart">
              <div class="card-header">
                <h4 class="card-title">Shipped Products</h4>
                <br/>

              </div>
              <div class="card-body">
                <div class="chart-area">
                  <BarChart/>
                </div>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <br/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Shipped Products</h4>
                <br/>

              </div>
              <div className="card-body">
                <div className="chart-area">
                  <DoughnutChart/>
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <br/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Shipped Products</h4>
                <br/>

              </div>
              <div className="card-body">
                <div className="chart-area">
                 <LineChart2/>
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 <Footer/>
    </div>
            </div>

        )
    }
}
