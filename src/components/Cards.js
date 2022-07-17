import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import background from "../assets/img1.png";
export class Cards extends Component {
  constructor() {
    super();
    this.state = {
      sport: "",
    };
  }
  myArrany = ["Programer", "WebDeveloper", "SoftwearDeveloper"];
  componentDidMount() {
    setInterval(() => {
      this.setState({
        sport: this.myArrany[Math.floor(Math.random() * this.myArrany.length)],
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        {" "}
        <div>
          <div
            class=" container-flud p-5 mb-2 mt-1 style={{ backgroundImage: `url(${background}) rounded-2"
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat fixed botton",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "70vh",

              IDBIndex: "-2",
            }}
          >
            <div class="container-fluid py-4 p-0 text-light text-aline-center">
              <h1 class="display-4 fw-bold text-dark">Hello!!!</h1>
              <h3 class="display-5 fw-bold text-dark">
                <em>
                  <p>I'm Ola</p>A <span>{this.state.sport}</span>
                </em>
              </h3>
              <p class="text-dark">
                <strong>
                  Working Under a great company<br></br> CodeVerse know more
                  about<br></br> ongoing program <br></br>by click on the button
                </strong>
              </p>
              <Button href="coderverse" className="btn btn-light-secondary md-3">
                Codevese
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
