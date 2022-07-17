import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <div className="container text-center">
        <div className="row  gx-5">
          <div className="col-6">
            <ul>
              <label>Ola Contact</label>
              <li>08074502232</li>
              <label>Ola Email</label>
              <li>olawalet075@gmail.com</li>
            </ul>
          </div>
          <div className="col-6 "> <ul>
              <label>Codeverse Contact</label>
              <li>09160782874</li>
              <label>Codeverse Email</label>
              <li>hello@Codeverse.com.ng</li>
            </ul></div>
        </div>
        <label>Address</label>
        <p>2,Tiamiyu Close,iyane Trem,<br/> Abule Ojere,Abeokute</p>
      </div>
    </div>
  );
};

export default Contact;
