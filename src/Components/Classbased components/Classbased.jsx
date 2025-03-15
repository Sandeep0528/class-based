import { Component } from "react";

class Classbased extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.myFunction = this.myFunction.bind(this)
    }

    myFunction = (e) => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (
            <div style={{ textAlign: "center", margin: "auto" }}>
                <h1 style={{ color: "red" }}>
                    Counting App
                </h1>
                <p>hello from counting app</p>
                <p>Counter:{this.state.counter}</p>
                <button onClick={this.myFunction}> cliq</button>
            </div>



        )
    }
}

export default Classbased