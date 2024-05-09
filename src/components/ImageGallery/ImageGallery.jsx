import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, morePhotos, openModal }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(images) &&
          images.map((image) => {
            return (
              <ImageCard
                key={image.id}
                urls={image.urls}
                alt_description={image.alt_description}
                openModal={openModal}
              />
            );
          })}
      </ul>
      <button onClick={morePhotos}>More Photos</button>
    </div>
  );
};

export default ImageGallery;
