import Card from "./components/Card/Card";
import { data } from "../data";

const App = () => {
  /** Get Card Id event
   * @param {string} id - id карточки
   */
  const handleClick = (productId) => {
    console.log(productId);
  };

  return (
    <>
      <main id="app" className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {data?.length > 0 &&
              data?.map((productInfo) => {
                return (
                  <Card
                    onCardClick={() => handleClick(productInfo?.id)}
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

export default App;
