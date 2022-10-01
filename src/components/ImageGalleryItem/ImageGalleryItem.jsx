import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  togleModal,
  takeLargeImgUrl,
}) => {
  const toDo = () => {
    togleModal();
    takeLargeImgUrl(largeImageURL);
  };
  return (
    <GalleryItem onClick={toDo}>
      <GalleryItemImage src={webformatURL} alt="" loading="lazy" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  togleModal: PropTypes.func,
  takeLargeImgUrl: PropTypes.func,
};
