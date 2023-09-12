import "../../assets/css/section/AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container about-me__container">
        <h3 className="about-me__title">Sobre mi</h3>
        <p className="about-me__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          velit velit, volutpat semper dignissim dictum, imperdiet ut lacus.
          Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper
          sagittis ligula et lacinia.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          velit velit, volutpat semper dignissim dictum, imperdiet ut lacus.
          Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper
          sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas
          metus vitae, aliquet metus.
        </p>
        <img className="about-me__image" src="/image/signature.png" alt="" />
      </div>
    </div>
  );
};
