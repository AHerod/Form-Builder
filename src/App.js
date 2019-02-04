import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Form from './Form';
import SubForm from './SubForm';
import './App.scss';


class App extends Component {
    constructor() {
        super();

        this.displayData = [];

        this.state = {
            showdata: this.displayData
        };

        this.appendData = this.appendData.bind(this);
    };

    appendData() {
        this.displayData.push(<Form key={this.displayData.index}/>);
        this.setState({
            showdata: this.displayData
        });
    }

    render() {
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Your data won't be storage. ");
        }

        return (
            <div className="App">
                <h1> Form Builder </h1>
                <button className="addInputBtn" onClick={this.appendData}> Add Input</button>
                <div>
                    {this.displayData}

                </div>
            </div>
        );
    }
}

export default App;
