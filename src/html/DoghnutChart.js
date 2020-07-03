import React, { Component } from 'react'
import {Doughnut } from "react-chartjs-2";

export default class DoughnutChart extends Component {

    state = {

        data : {},
        options : {}


    }

    componentDidMount(){


        this.changeData()

    }

   changeData(){

        let data = {

            labels :['Jan','Feb','Mar','Apr','May'],
            datasets : [

                {

                    label : 'Sales For 2020 (M)',
                    data : [3,2,2,1,5],
                    backgroundColor : ['rgba(255,99,132,1)','rgba(255,205,86,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,1)'],

                }
            ]

        }

        let options = {

            title :{

                display : true,
                text : 'Doughnut Chart'

            },
            scales :{

                yAxes:[

                    {

                        ticks :{

                            min : 0,
                            max : 6,
                            stepSize : 1

                        }

                    }

                ]

            },
            maintainAspectRatio : true

        }
        this.setState({

            data,
            options

        })



    }


    render() {
        return (
            <div>
                <Doughnut data={this.state.data} options={this.state.options} />

            </div>
        )
    }
}
