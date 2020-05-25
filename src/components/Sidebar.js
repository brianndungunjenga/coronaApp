import React from 'react';
import '../css/sidebar.css'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Sidebar = ({ sidebardata, countrydata }) => {
    return (
        <div className="col-3">
            {sidebardata.map((totalcasesWorldwide, index) => (
                <div className="card text-white bg-dark mb-3" key={index} >
                    <div className="card-header">Cases Confirmed</div>

                    <div className="card-body">
                        <h5 className="card-title text-danger">{numberWithCommas(totalcasesWorldwide.cases)}</h5>

                    </div>
                </div>
            ))}


            <div className="mt-1" >
                <h4>Confirmed cases per Country</h4>
                <ul className="list-group overflow-auto" style={{ height: "50vh" }}>


                    {countrydata.sort((a, b) => (a.cases > b.cases) ? -1 : 1).map((casespercountry, index) => (
                        <ul className="list-group " key={index}>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-primary" >
                                {casespercountry.country}
                                <span className="badge badge-primary badge-pill">{numberWithCommas(casespercountry.cases)}</span>
                            </li>

                        </ul>
                    ))}



                </ul>
            </div>


        </div>

    )
}

export default Sidebar;
