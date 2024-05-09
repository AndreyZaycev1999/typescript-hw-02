import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import useImagesSearch from "./hooks/useImagesSearch";

function App() {
  const {
    images,
    isLoading,
    isError,
    onSetSearchQuery,
    morePhotos,
    openModal,
    closeModal,
    modalIsOpen,
    selectedImage,
  } = useImagesSearch();
  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && (
        <ImageGallery
          openModal={openModal}
          images={images}
          morePhotos={morePhotos}
        />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;
