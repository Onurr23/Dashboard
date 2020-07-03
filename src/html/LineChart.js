import React, { Component } from 'react'
import {Line } from "react-chartjs-2";
import axios from "axios";

export default class LineChart extends Component {

    state = {

        data : {},
        options : {}

    }
    componentDidMount(){


        this.changeData()

    }

    changeData(){

        let empAge = [];
        let empSalary = [];
        let empSalaries2 = []

        axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res=>{

            res.data.data.map(c=>(

                empAge.push(c.employee_age),
                    empSalary.push(c.employee_salary)

            ))
            let data = {

                labels :empAge,
                datasets : [
                    {
                        label : ["Salaries According To Age"],
                        data : empSalary,
                        borderColor : ['rgba(255,206,86,0.2)'],
                        backgroundColor : ['rgba(255,206,86,0.2)'],
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
                <Line data={this.state.data} options={this.state.options} height={"100%"} />
            </div>
        )
    }
}

