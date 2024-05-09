import { useState, useEffect, useMemo } from "react";
import { requestImagesByQuery } from "../services/api";

const useImagesSearch = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log(selectedImage);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const morePhotos = () => {
    setPage(page + 1);
    setIsMore(true);
  };

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImagesByQuery() {
      try {
        console.log(page);
        setIsLoading(true);
        const data = await requestImagesByQuery(query, page);
        console.log(data.results);
        if (isMore) {
          setImages((prevState) => [...prevState, ...data.results]);
          setIsMore(false);
        } else {
          setImages(data.results);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImagesByQuery();
  }, [query, page]);

  const newQuery = useMemo(() => {
    setPage(1);
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    newQuery;
  };

  return {
    images,
    isLoading,
    isError,
    onSetSearchQuery,
    morePhotos,
    openModal,
    closeModal,
    modalIsOpen,
    selectedImage,
  };
};

export default useImagesSearch;
