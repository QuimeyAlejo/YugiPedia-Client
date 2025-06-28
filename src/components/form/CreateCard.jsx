import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateCard = () => {
  const navigate = useNavigate()
  const [newCard, setNewCard] = useState({
    name: "",
    attack: 0,
    defense: 0,
    stars: 0,
    abilities: "",
    type: "",
    subType: "",
    img: "",
    sacrificeRequirement: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newCard); // Aquí podrías enviar la carta a un backend
    setNewCard({
      name: "",
      attack: 0,
      defense: 0,
      stars: 0,
      abilities: "",
      type: "",
      subType: "",
      img: "",
      sacrificeRequirement: ""
    });
    navigate("/")
  };

  return (
    <div>
      <h2>Crear Nueva Carta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={newCard.name} onChange={handleChange} required />

        <input type="number" name="attack" placeholder="Ataque" value={newCard.attack} onChange={handleChange} />

        <input type="number" name="defense" placeholder="Defensa" value={newCard.defense} onChange={handleChange} />

        <input type="number" name="stars" placeholder="Estrellas" value={newCard.stars} onChange={handleChange} />

        <textarea name="abilities" placeholder="Habilidades especiales" value={newCard.abilities} onChange={handleChange}></textarea>

        <input type="text" name="type" placeholder="Tipo de monstruo" value={newCard.type} onChange={handleChange} />

        <input type="text" name="subType" placeholder="Tipo de carta" value={newCard.subType} onChange={handleChange} />

        <input type="text" name="img" placeholder="URL de imagen" value={newCard.img} onChange={handleChange} />

        <input type="text" name="sacrificeRequirement" placeholder="Requiere sacrificio?" value={newCard.sacrificeRequirement} onChange={handleChange} />

        <button type="submit">Crear Carta</button>
      </form>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default CreateCard;
