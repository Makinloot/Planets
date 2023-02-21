import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "../button/Button";

import Data from "../../../data";
import "./Details.scss";

const Details = ({ setPlanet }) => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const filterData = Data.filter((item) => item.name === name);
    setData(filterData);
  }, [name]);


  if (data) {
    const { name, text, rotation, orbital_period, avg_temp, diameter} = data[0];
    setPlanet(data[0].name)
    return (
      <div className="Details">
        <h2 className="Details-heading">{name}</h2>
        <p>{text}</p>
        <div className="Details-details">
          <div className="detail">
            <div>Rotation</div>
            <div>{rotation}</div>
          </div>
          <div className="detail">
            <div>Orbital period</div>
            <div>{orbital_period}</div>
          </div>
          <div className="detail">
            <div>Avarage temp</div>
            <div>{avg_temp} C&deg;</div>
          </div>
          <div className="detail">
            <div>Diameter</div>
            <div>{diameter} km</div>
          </div>
        </div>
        <div className="pagination">
          {data[0].prev && (
            <Link to={`/${data[0].prev}`}>
              <Button text="prev" />
            </Link>
          )}
          {data[0].next && (
            <Link to={`/${data[0].next}`}>
              <Button text="next" />
            </Link>
          )}
        </div>
      </div>
    );
  }
};

export default Details;
