import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CeoDetails = ({ ceoList }) => {
  const { ceo_slug } = useParams();
  const [ceo, setCeo] = useState({});

  useEffect(() => {
    (async () => {
      const url = `http://localhost:3000/${ceo_slug}`;
      const ceo = await fetch(url).then((response) => response.json());
      setCeo(ceo);
    })();
  }, [setCeo, ceo_slug]);

  return (
    <>
      <p>
        {ceo.name} was Ceo of Apple in {ceo.first_year_active}
      </p>
    </>
  );
};

export default CeoDetails;
