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
    setPlanet(data[0].name)
    return (
      <div className="Details">
        <h2 className="Details-heading">{data[0].name}</h2>
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
