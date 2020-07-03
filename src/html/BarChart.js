import React, { Component } from 'react'
import {Bar } from "react-chartjs-2";

export default class BarChart extends Component {

    state = {

        data : {

            labels :['Jan','Feb','Mar','Apr','May'],
            datasets : [

                {

                    label : 'Sales For 2020 (M)',
                    data : [3,2,2,1,5],
                    borderColor : ['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
                    backgroundColor : ['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
                   
                },
                {
                    label : 'Sales For 2019',
                    data : [1,3,2,2,3],
                    borderColor : ['rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)'],
                    backgroundColor : ['rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)'],
                   

                }

            ]

        },

        options : {

            title :{

                display : true,
                text : 'Bar Chart'

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


    }

    render() {
        return (
            <div>
                <Bar data={this.state.data} options={this.state.options} />
            </div>
        )
    }
}
