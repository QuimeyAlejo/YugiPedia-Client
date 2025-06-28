
const ItemCard = ({ id, name, attack, defense, stars, sacrificeRequirement, abilities, type, subType, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Ataque: {attack}</p>
      <p>Defensa: {defense}</p>
      <p>Estrellas: {stars}</p>
      <p>¿Requiere sacrificio?: {sacrificeRequirement}</p>
      <p>Habilidades: {abilities}</p>
      <p>Tipo: {type}</p>
      <p>Subtipo: {subType}</p>
      <img src={img} alt={name} />
    </div>
  );
};

export default ItemCard;