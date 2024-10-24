import React, {useEffect, useState} from "react";
import Card from "../components/ui/Card/Card";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((responce) => responce.json())
    .then((json) => setData(json));
  }, []);


  const navigate = useNavigate();
  /** Get Card Id event
   * @param {string} id - id карточки
   */
  const handleClick = (productInfo) => {
    navigate(`/cards/${productInfo?.id}`, {state: productInfo})
  };

  return (
    <>
      <main id="cards" className="py-8">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex flex-wrap justify-between">
            {data?.length > 0 &&
              data?.map((productInfo) => {
                return (
                  <Card
                    onCardClick={() => handleClick(productInfo)}
                    key={productInfo?.id}
                    details={productInfo}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
