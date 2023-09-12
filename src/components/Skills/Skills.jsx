import "../../assets/css/skills/Skills.css";
import { v4 as uuidv4 } from "uuid";
import { ItemCard } from "../item/ItemCard";

export const Skills = () => {
  const skills = [
    {
      id: uuidv4(),
      name: "Html 5",
      image: "Html",
    },
    {
      id: uuidv4(),
      name: "Javascript",
      image: "Javascript",
    },
    {
      id: uuidv4(),
      name: "PHP",
      image: "Php",
    },
    {
      id: uuidv4(),
      name: "Node JS",
      image: "NodeJS",
    },
    {
      id: uuidv4(),
      name: "React",
      image: "React",
    },
    {
      id: uuidv4(),
      name: "CSS",
      image: "CSS",
    },
  ];

  return (
    <div className="skills">
      <div className="container skills__container">
        <h3 className="skills__title">Skills</h3>
        <div className="skills__item-container">
          {skills.map((skill) => (
            <ItemCard key={skill.id} itemName={"skills"} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
