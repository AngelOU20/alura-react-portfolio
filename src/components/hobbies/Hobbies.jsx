import "../../assets/css/hobbies/Hobbies.css";
import { v4 as uuidv4 } from "uuid";
import { ItemCard } from "../item/ItemCard";

export const Hobbies = () => {
  const Hobbies = [
    {
      id: uuidv4(),
      name: "Patinaje",
      image: "patinaje",
    },
    {
      id: uuidv4(),
      name: "Tocar bajo",
      image: "guitar",
    },
    {
      id: uuidv4(),
      name: "Oír música",
      image: "musica",
    },
    {
      id: uuidv4(),
      name: "Ver series",
      image: "tv",
    },
    {
      id: uuidv4(),
      name: "Cocinar",
      image: "cocinar",
    },
    {
      id: uuidv4(),
      name: "Tomar fotos",
      image: "camara",
    },
  ];

  return (
    <div className="hobbies">
      <div className="container hobbies__container">
        <h3 className="hobbies__title">Hobbies</h3>
        <div className="hobbies__item-container">
          {Hobbies.map((hobby) => (
            <ItemCard key={hobby.id} itemName={"hobbies"} {...hobby} />
          ))}
        </div>
      </div>
    </div>
  );
};
