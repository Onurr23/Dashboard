import React, { Component } from 'react'
import {Line } from "react-chartjs-2";
import axios from "axios";

export default class LineChart2 extends Component {

    state = {

        data : {},
        options : {}

    }
    componentDidMount(){


        this.changeData()

    }

    changeData(){

        let empAge = [];
        let empSalary = []

        axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res=>{

            res.data.data.map(c=>(

                empAge.push(c.employee_age),
                    empSalary.push(c.employee_salary)

            ))
            let data = {

                labels :['Jan','Feb','Mar','April','May'],
                datasets : [
                    {
                        label : 'Sales For 2020 (M)',
                        data : [1,5,9,4,5],
                        borderColor : ['rgba(255,206,86,0.2)'],
                        backgroundColor : ['rgba(255,206,86,0.2)'],
                        pointBackgroundColor : ['rgba(255,206,86,0.2)'],
                        pointBorderColor : ['rgba(255,206,86,0.2)']
                    },
                    {
                        label : 'Sales For 2019 (M)',
                        data : [3,7,8,1,6],
                        borderColor : ['rgba(255,206,86,0.2)'],
                        backgroundColor : ['#B5C2D6'],
                        pointBackgroundColor : ['rgba(255,206,86,0.2)'],
                        pointBorderColor : ['rgba(255,206,86,0.2)']
                    },
                ]

            }

            let options = {

                title :{

                    display : true,
                    text : 'Line Chart'

                },
                maintainAspectRatio : true

            }
            this.setState({

                data,
                options

            })

        }).catch(err=>{

            console.log(err)

        })
    }

    render() {
        return (
            <div>
                <Line data={this.state.data} options={this.state.options} height={"140%"} />
            </div>
        )
    }
}
