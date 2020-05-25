import React from 'react';
import moment from 'moment';

const Footer = ({ timestamp }) => {
    return (
        <footer className="navbar navbar-dark bg-dark text-center my-3">
            {timestamp.map((time, index) => (
                <span key={index} className="navbar-brand mb-0 h1 mx-auto">Last updated at <span className="text-info">{moment(time.updated).format("DD MMM YYYY hh:mm a")}</span></span>
            ))}

        </footer>
    )
}

export default Footer;
