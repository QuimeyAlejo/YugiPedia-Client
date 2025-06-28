import { useState } from "react";
import { Link } from "react-router-dom";
import { useCardContext } from "../../context/CardContext";
import axios from "axios";
import Swal from "sweetalert2";
import "./navBar.css"

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setCards } = useCardContext();
  const [selectedValue, setSelectedValue] = useState('Filtros');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    try {
      const response = await axios.get(`http://localhost:3000/monster?name=${searchInput}`);

      if (response.data.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No se encontró la carta",
          text: "Se restableció la lista completa.",
        });

        const all = await axios.get("http://localhost:3000/deck");
        setCards(all.data);
      } else {
        setCards(response.data);
      }

      setSearchInput("");
    } catch (error) {
      console.error("Error en la búsqueda:", error);

      Swal.fire({
        icon: "error",
        title: "Error al buscar",
        text: "Ocurrió un error al buscar la carta.",
      });

    
      try {
        const all = await axios.get("http://localhost:3000/deck");
        setCards(all.data);
      } catch (err) {
        console.error("Error al restablecer cartas:", err);
      }
    }finally {
      setSearchInput("")
    }
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="nav-card">
      <div>
        <button><Link to="/createCard">Crear carta</Link></button>
        <button><Link to="/createCard">Filtro 1</Link></button>
      </div>
      <div>
      <select value={selectedValue} onChange={handleChange}> 
          <option value="Filtros">Filtrar por:</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar carta"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          />
        <button disabled={!searchInput.trim()}>Buscar</button>
      </form>
          </div>
    </div>
  );
};

export default Navbar;
