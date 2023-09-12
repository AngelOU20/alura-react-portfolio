import "../../assets/css/section/Hero.css";
import { v4 as uuidv4 } from "uuid";
import { SocialList } from "./SocialList";

const socials = [
  {
    id: uuidv4(),
    name: "Github",
    enlace: "",
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    enlace: "",
  },
  {
    id: uuidv4(),
    name: "Instagram",
    enlace: "",
  },
  {
    id: uuidv4(),
    name: "Curriculum",
    enlace: "",
  },
];

export const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Hola, mi nombre es Fulana de Tal y construyo paginas web
        </h1>
        <p className="hero__description">
          Soy formada en .... lorem ipsum sit amet consectetur y actualmente
          estoy participando del proyecto Oracle ONE en Alura Latam.
        </p>
        <div className="hero__social-media">
          {socials.map((social) => (
            <SocialList key={social.id} {...social} />
          ))}
        </div>
      </div>
      <div className="hero__image">
        <img
          className="hero__image-profile"
          src="/image/profile.jpg"
          alt="Mi imagen de perfil"
        />
      </div>
    </div>
  );
};
