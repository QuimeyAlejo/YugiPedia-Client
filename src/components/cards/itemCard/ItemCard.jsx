
import "./itemCard.css"
const ItemCard = ({  name,  sacrificeRequirement, abilities, type, subType, img }) => {


  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>{type} - {subType}</p>
      <img src={img} alt={name} />
      <p>¿Requiere sacrificio?:{sacrificeRequirement}</p>
      <p>Habilidades: {abilities}</p>
      
    </div>
  );
};

export default ItemCard;
