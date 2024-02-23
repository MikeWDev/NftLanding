import React from "react";
import clients1 from "../Assets/clients1.png";
import clients2 from "../Assets/clients2.png";
import clients3 from "../Assets/clients3.png";
import clients4 from "../Assets/clients4.png";
import clients5 from "../Assets/clients5.png";

const Clients = () => {
  const data = [clients1, clients2, clients3, clients4, clients5];
  console.log(data);
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, i) => {
            return (
              <div className="client" key={i}>
                <img src={client} alt="client" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
