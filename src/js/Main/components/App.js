import React from 'react'
import Values from './Values'
import { Link } from 'react-router-dom'
import links from "./../links"

const App = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-white">
                        <h1 className="display-1">Activeeon</h1>
                        <p className="h2">Workflow engine for scheduling, <br /> meta-scheduling and orchestration</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <Values/>
        </div>
        <div className="background-image-datacenter">
            <div className="background-white">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-8 text-center">
                            <h2>Try Online</h2>
                            <hr/>
                            <p className="h4">
                                Try it for free <a href={links.external.try.home} target="_blank">here</a> and follow this tutorial in <Link to={links.getstarted}>3 steps</Link>.
                            </p>
                            <div>
                                <a className="btn btn-outline-primary" href={links.external.try.home} target="_blank">Try It</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
