import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import background from "../assets/img1.png";
import M from "../assets/img4.png";
import Card from "react-bootstrap/Card";

export const Junbotron = () => {

  
  return (
    <div>
      
      <div
        class="p-5 mb-4 mt-1 style={{ backgroundImage: `url(${background}) rounded-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "100%",
        }}
      >
        <div class="container-fluid py-9 px-1 text-blak">
          <h1 class="display-5 fw-bold text-black">Hello!!!</h1>
          <h3 class="display-5 fw-bold text-secondary">
            <em>
              <p>i'm Ola</p>A SoftwearDeveloper{this.state.sport}
            </em>
          </h3>
          <p class="color-ligt">
          <strong>Working Under a great company Codeverse know more <br></br>about ongoing program by click on the button</strong>
          </p>
          <Button href="nomatch" className="btn btn-light-info md-3">Codevese</Button> 
        </div>
      </div>
    </div>
  );
};
