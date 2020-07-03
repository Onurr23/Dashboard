import React,{Component} from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";


class Url extends Component{

    state ={

        data : []

    }

    componentDidMount() {

        axios.get('http://localhost:5000/').then(urls=>{

            this.setState({
                data : urls.data
            })

        }).catch(err=>{

            console.log(err)

        })

    }

    render() {
        let datas = this.state.data;
        return (
            <div className="wrapper">
                <Sidebar/>

                <div className="main-panel" id="main-panel">

                    <Navbar/>

                    <div className="panel-header panel-header-sm">
                    </div>

                    <div className="content">
                        <div className="row">
                            {

                                datas.map(data=>(

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title"> URL</h4>
                                            </div>
                                            <div className="card-body">

                                                <p><i class="font-weight-bold">ID:</i> <a href="">{data._id}</a></p>
                                                <p><i className="font-weight-bold">Url Haus Reference:</i> <a href="">{data.urlhaus_reference}</a></p>
                                                <p><i className="font-weight-bold">Url:</i> <a href="">{data.url}</a></p>
                                                <p><i className="font-weight-bold">Url Status:</i> <a href="">{data.url_status}</a></p>
                                                <p><i className="font-weight-bold">Host:</i> <a href="">{data.host}</a></p>
                                                <p><i className="font-weight-bold">Threat:</i> <a href="">{data.threat}</a></p>
                                                <p><i className="font-weight-bold">Reporter:</i> <a href="">{data.reporter}</a></p>
                                                <p><i className="font-weight-bold">Is Larted:</i> <a href="">{data.larted ? 'TRUE' : 'FALSE'}</a></p>
                                                <p><i className="font-weight-bold">Date:</i> <a href="">{data.date_added}</a></p>
                                                <p><i className="font-weight-bold">Tags:</i> <a href="">{data.tags[0]}</a></p>


                                            </div>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>

                    </div>
                </div>



            </div>
        );
    }

}
export default Url;
