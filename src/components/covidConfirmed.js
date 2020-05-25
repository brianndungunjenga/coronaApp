import React from 'react';

const CovidConfirmed = ({ covidconfirmed }) => {
    return (

        <div className="container-fluid">
            <center><h1>Covid-19 Confirmed Cases</h1></center>
            <div className="row">


                {covidconfirmed.map((cases, index) => (
                    <div className="col-4" key={index}>

                        <div className="card mt-3" >
                            <div className="card-header">{cases.countryRegion}</div>
                            <ul className="list-group list-group-flush" >
                                <h1 className="text-muted float-left">Active</h1><li className="list-group-item float-right">{cases.active}</li>
                                <h1 className="text-muted">Confirmed</h1><li className="list-group-item" >{cases.confirmed}</li>
                                <h1 className="text-muted">Deaths</h1><li className="list-group-item" >{cases.deaths}</li>
                                <h1 className="text-muted">Recovered</h1><li className="list-group-item">{cases.recovered}</li>
                            </ul>
                        </div>
                    </div>


                ))}
            </div>



        </div>


    )
};

export default CovidConfirmed;
