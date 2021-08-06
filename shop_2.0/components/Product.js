export const Product = ({ name, price }) => {
  //const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button>Kup</button>
    </div>
  );
};


