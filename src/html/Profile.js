import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default class Profile extends Component {

    state = {

        ad : {},
        data : {}

    }

    componentDidMount() {

        axios.get('https://reqres.in/api/users/2').then(user=>{

            this.setState({

                ad : user.data.ad,
                data : user.data.data

            })

        }).catch(err=>{

            console.log(err)

        })

    }

    render() {

        let ad = this.state.ad;
        let data = this.state.data;

        return (

            <div className="user-profile">
            <div className="wrapper">

                <Sidebar/>
                <div className="main-panel" id="main-panel">
                    <Navbar/>
                    <div className="panel-header panel-header-sm">
                    </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="title">Edit Profile</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-5 pr-1">
                                                <div className="form-group">
                                                    <label>Company</label>
                                                    <input type="text" className="form-control" disabled=""
                                                            value={ad.company}/>
                                                </div>
                                            </div>
                                            <div className="col-md-3 px-1">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control"
                                                           value={data.first_name}/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-1">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" value={data.email}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>About Me</label>
                                                    <textarea rows="4" cols="80" className="form-control"
                                                              placeholder="Here can be your description" value={ad.text}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-user">
                                <div className="image">
                                    <img src="../assets/img/bg5.jpg" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <div className="author">
                                        <a href="#">
                                            <img className="avatar border-gray" src={data.avatar} alt="..."/>
                                                <h5 className="title">{data.first_name + " " + data.last_name}</h5>
                                        </a>

                                    </div>
                                    <p className="description text-center">
                                        {ad.text}
                                    </p>
                                </div>
                                <hr/>
                                    <div className="button-container">
                                        <button href="#" className="btn btn-neutral btn-icon btn-round btn-lg">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button href="#" className="btn btn-neutral btn-icon btn-round btn-lg">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                        <button href="#" className="btn btn-neutral btn-icon btn-round btn-lg">
                                            <i className="fab fa-google-plus-g"></i>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer/>
            </div>
            </div>
            </div>
        )
    }
}
