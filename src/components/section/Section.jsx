import { Skills } from "../Skills/Skills";
import { Academic } from "../academic/Academic";
import { Hobbies } from "../hobbies/Hobbies";
import { AboutMe } from "./AboutMe";
import { Hero } from "./Hero";

export const Section = () => {
  return (
    <section>
      <Hero />
      <AboutMe />
      <Skills />
      <Hobbies />
      <Academic />
    </section>
  );
};
