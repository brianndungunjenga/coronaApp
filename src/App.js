import React, { Component } from 'react';
//import './App.css';
//import CovidConfirmed from './components/covidConfirmed';
import axios from 'axios';
import MapCovid from './components/map';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class App extends Component {

  state = {
    geoData: [],
    countryData: [],
  }

  async getcovidData() {

    let response;

    try {
      response = await axios.get('https://corona.lmao.ninja/v2/countries');
      console.log(response)
    }
    catch (e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }
    const { data = [] } = response;

    // hasData checks if the data variable is an array and has data
    const hasData = Array.isArray(data) && data.length > 0;
    // if hasData doesn't have data, we return out of the function.
    if (!hasData) return;




    console.log([data[0]['countryInfo']['lat'], data[0]['countryInfo']['long']])
    this.setState({ geoData: data });


  }

  async getdataAll() {
    let res;
    try {
      res = await axios({

        url: 'https://corona.lmao.ninja/v2/all',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res)
    }
    catch (e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }
    const dataAll = [];
    dataAll.push(res.data)

    // hasData checks if the data variable is an array and has data
    const hasData = Array.isArray(dataAll) && dataAll.length > 0;
    // if hasData doesn't have data, we return out of the function.
    if (!hasData) return;
    //console.log(data);
    this.setState({ countryData: dataAll });
    console.log(dataAll)

  }

  componentDidMount() {
    this.getcovidData();
    this.getdataAll();

  }



  render() {
    console.log(this.state.geoData)
    console.log(this.state.countryData)
    return (
      <div className="bg-secondary">
        <Header />
        <div className="container-fluid ">


          <div className="row">
            <Sidebar sidebardata={this.state.countryData} countrydata={this.state.geoData} />
            <MapCovid geodata={this.state.geoData} />
          </div>

        </div>
        <Footer timestamp={this.state.countryData} />
      </div>


      //<p>W</p>

    )
  }
}

export default App;
