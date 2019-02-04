import React from "react";

export default class SubForm extends React.Component {

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

        this.subformData.push(<SubForm key={this.subformData.index}/>);
        this.setState({
            showdata: this.subformData
        });
        // var parentMargin = this.style.width;

        // document.getElementById("subForm").style.marginLeft = parentMargin + (parseInt("50px".replace(/px/, "")) + 50) + "px";
    }

    render() {
        return (
            <div>
                <div className="formContainer " id="subForm">
                    <form>
                        <label htmlFor="condition"> Condition</label>
                        <div className="conditionsWrapper">
                            <select name="type" id="type">
                                <option value="text">Equals</option>
                                <option value="number">Greater than</option>
                                <option value="text">Less than</option>
                            </select>
                            <input type="text" id="condition"/>
                        </div>
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
