import React from "react";
import Card from "../components/ui/Card/Card";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  /** Get Card Id event
   * @param {object} productInfo - info карточки
   */
  const handleClick = (productInfo) => {
    console.log(productInfo?.id);
    navigate(`/cards/${productInfo?.id}`, { state: productInfo });
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
