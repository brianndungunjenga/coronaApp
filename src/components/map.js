import React, { Component } from 'react';
import { Map, TileLayer, Marker, Tooltip, Popup, CircleMarker } from 'react-leaflet';


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class MapCovid extends Component {
    state = {
        lat: 1,
        long: 38,
        zoom: 3,
        maxZoom: 30
    }

    render() {
        return (
            this.props.geodata ?
                <div className="col-6 d-flex">
                    <Map
                        className="mx-auto"
                        center={[this.state.lat, this.state.long]}
                        zoom={this.state.zoom}
                        style={{ width: '100%', height: '80vh' }}

                    >
                        <TileLayer attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png' />
                        {
                            this.props.geodata.map((markerpos, index) => {
                                let post = [markerpos['countryInfo']['lat'], markerpos['countryInfo']['long']];
                                return (
                                    <CircleMarker
                                        key={index}
                                        //position={post}
                                        center={post}
                                        radius={20 * Math.log(markerpos['cases'] / 10000)}
                                        fillOpacity={0.5}
                                        stroke={false}
                                        onMouseOver={(e) => {
                                            e.target.openPopup();
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.closePopup();
                                        }}


                                    >

                                        <Popup direction="right" offset={[-8, -2]} opacity={1}>
                                            <span>Country: {markerpos['country']}</span><br></br>
                                            <span>Population: {numberWithCommas(markerpos['population'])}</span><br></br>
                                            <span>Tests: {numberWithCommas(markerpos['tests'])}</span><br></br>
                                            <span>Cases: {numberWithCommas(markerpos['cases'])}</span><br></br>
                                            <span>Recoveries: {numberWithCommas(markerpos['recovered'])}</span><br></br>
                                            <span>Deaths: {numberWithCommas(markerpos['deaths'])}</span><br></br>
                                        </Popup>
                                    </CircleMarker>
                                )
                            })
                        }
                    </Map>
                </div>
                :
                'Data is loading...'


        )
    }

}

