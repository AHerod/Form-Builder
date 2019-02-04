import React from "react";
import SubForm from "./SubForm";
export default class Form extends React.Component {
    constructor() {
        super();

        this.subformData = [];

        this.state = {
            showdata: this.subformData
        };

        this.appendData = this.appendData.bind(this);
    };

    appendData(e) {
        e.preventDefault();
        this.subformData.push(<SubForm/>);
        this.setState({
            showdata: this.subformData
        });
    }
    render() {
        return (
            <div>
                <div className="formContainer">
                    <form>
                        <label htmlFor="question"> Question</label>
                        <input type="text" id="question"/>
                        <label htmlFor="type"> Type</label>
                        <select name="type" id="type">
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="yesNo">Yes/No</option>
                        </select>
                        <div className="btnWrapper">
                            <button onClick={this.appendData}> Add Sub-Input</button>
                            <button> Delete</button>
                        </div>

                    </form>
                </div>
                <div>
                    {this.subformData}
                </div>
            </div>


        )
    }
}
