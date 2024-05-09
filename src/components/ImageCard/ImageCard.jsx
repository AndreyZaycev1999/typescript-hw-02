import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description, openModal }) => {
  return (
    <li>
      <div>
        <img
          onClick={() => openModal(urls.regular)}
          className={css.image}
          src={urls.small}
          alt={alt_description}
        />
      </div>
    </li>
  );
};

export default ImageCard;
