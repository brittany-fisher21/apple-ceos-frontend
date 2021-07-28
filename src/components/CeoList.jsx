import { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
// import CeoDetails from "./CeoDetails";
import CeoDetailsAsync from "./CeoDetailsAsync";

import StyledList from "./StyledList";
import Title from "./Title";

const CeoList = () => {
  const [ceos, setCeos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const ceos = await _fetchData();
      setCeos(ceos);
    })();
  }, [setCeos]);

  const _fetchData = async () => {
    const url = "http://127.0.0.1:3000";
    const response = await fetch(url).then((response) => response.json());
    return response;
  };
  return (
    <>
      {!!ceos.length ? (
        <>
          <Route exact path="/">
            <StyledList>
              {ceos.map((ceo, index) => (
                <li key={index}>
                  <Link to={`/ceo/${ceo.slug}`}>{ceo.name}</Link>
                </li>
              ))}
            </StyledList>
          </Route>
          <Route path="/ceo/:ceo_slug">
            {/* <CeoDetails ceoList={ceos} /> */}
            <CeoDetailsAsync />
            <button type="button" onClick={() => history.goBack()}>
              Go Home
            </button>
          </Route>
        </>
      ) : (
        <p>loading CEOs from api</p>
      )}
    </>
  );
};

export default CeoList;
