import PropTypes from "prop-types";

export const SocialList = ({ name }) => {
  return (
    <ul className="social-media__list">
      <li className="social-media__item">{name}</li>
      <img src="/arrow_back.svg" alt="Arrow back" />
    </ul>
  );
};

SocialList.propTypes = {
  name: PropTypes.string,
};
