import React, { Component } from 'react';

class Footer extends Component{

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className=" container-fluid ">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        GAIS
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright" id="copyright">
                            &copy;
                            <script>
                                document.getElementById('copyright').appendChild(document.createTextNode(new
                                Date().getFullYear()))
                            </script>
                            , Designed and Coded
                            by <a href="#" target="_blank">GAIS</a>.
                        </div>
                    </div>
                </footer>
            </div>
        );
    }


}

export default Footer;
