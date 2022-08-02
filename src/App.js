import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      firstNumber: 0,
      secondNumber: 0,
      currVal: "",
      temp: 0,
    };
  }

  operations(props) {
    this.setState({
      currVal: this.state.currVal + props,
    });

    if (props === "C") {
      this.setState({
        currVal: "",
      });
    } else if (props === "=") {
      let val = [];
      val = this.state.currVal.split(" ");
      let firstNumber = parseInt(val[0]);
      let secondNumber = parseInt(val[2]);
      let sum = 0;

      if (val[1] === "+") {
        sum = firstNumber + secondNumber;
      } else if (val[1] === "-") {
        sum = firstNumber - secondNumber;
      } else if (val[1] === "*") {
        sum = firstNumber * secondNumber;
      } else if (val[1] === "/") {
        sum = firstNumber / secondNumber;
      }
      val = val.slice(3);

      if (val.length > 0) {
        let op = "";
        val.forEach((value) => {
          if (value === "+") {
            op = "+";
          } else if (value === "-") {
            op = "-";
          } else if (value === "*") {
            op = "*";
          } else if (value === "/") {
            op = "/";
          } else {
            if (op === "+") {
              
              sum += parseInt(value);
              op = "";
            } else if (op === "-") {
              sum -= parseInt(value);
              op = "";
            } else if (op === "*") {
              sum *= parseInt(value);
              op = "";
            } else if (op === "/") {
              sum /= parseInt(value);
              op = "";
            }
          }
        });console.log(sum)
        this.setState({
          currVal: sum,
        });}
        else{
          this.setState({
            currVal: sum,
          })
      } 
    }
  }

  render() {
    return (
      <div className="App">
        <br />
        <p>Calculator</p>
        <br />
        {this.state.currVal}
        <br />
        <br />
        <button
          onClick={() => {
            this.operations("1");
          }}
        >
          1
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("2");
          }}
        >
          2
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("3");
          }}
        >
          3
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations(" + ");
          }}
        >
          +
        </button>{" "}
        <t />
        <br />
        <br />
        <button
          onClick={() => {
            this.operations("4");
          }}
        >
          4
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("5");
          }}
        >
          5
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("6");
          }}
        >
          6
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations(" - ");
          }}
        >
          -
        </button>{" "}
        <t />
        <br />
        <br />
        <button
          onClick={() => {
            this.operations("7");
          }}
        >
          7
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("8");
          }}
        >
          8
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("9");
          }}
        >
          9
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations(" * ");
          }}
        >
          *
        </button>{" "}
        <t />
        <br />
        <br />
        <button
          onClick={() => {
            this.operations("C");
          }}
        >
          C
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations("0");
          }}
        >
          0
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations(".");
          }}
        >
          .
        </button>{" "}
        <t />
        <button
          onClick={() => {
            this.operations(" / ");
          }}
        >
          /
        </button>{" "}
        <t />
        <br />
        <br />
        <button
          onClick={() => {
            this.operations("=");
          }}
        >
          =
        </button>{" "}
        <t />
      </div>
    );
  }
}
export default App;
