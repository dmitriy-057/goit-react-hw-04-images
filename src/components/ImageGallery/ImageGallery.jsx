import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({
  fetchedImage,
  togleModal,
  takeLargeImgUrl,
}) {
  return (
    <Gallery>
      {fetchedImage
        // .filter((elem, index, array) => elem.id !== array[index])
        .map(({ id, webformatURL, largeImageURL }, index) => (
          <ImageGalleryItem
            takeLargeImgUrl={takeLargeImgUrl}
            togleModal={togleModal}
            key={id * 5 + index}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
    </Gallery>
  );
}
ImageGallery.propTypes = {
  fetchedImage: PropTypes.array.isRequired,
  togleModal: PropTypes.func,
  takeLargeImgUrl: PropTypes.func,
};
