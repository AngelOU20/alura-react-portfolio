import PropTypes from "prop-types";
import "../../assets/css/item/Item.css";

export const ItemCard = ({ itemName, name, image }) => {
  return (
    <div className="item__card">
      <img
        className="item__image"
        src={`/image/${itemName}/${image}.svg`}
        alt={name}
      />
      <h4 className="item__name">{name}</h4>
    </div>
  );
};

ItemCard.propTypes = {
  itemName: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};
