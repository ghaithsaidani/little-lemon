import { Order } from "../../../../../assets";

const MealCard = (props) => {
  return (
    <div className="meal-card">
      <img src={props.src} alt={props.name} />
      <div className="card-body">
        <div className="card-head">
          <h4 className="meal-name">{props.name}</h4>
          <h5 className="meal-price">${props.price}</h5>
        </div>
        <p className="card-description">{props.description}</p>
        <button>
          Order a delivery
          <img src={Order} alt="order motorcycle" />
        </button>
      </div>
    </div>
  );
};

export default MealCard;
