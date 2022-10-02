import { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import fetchImage from '../utils/fetchImage';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal/Modal';
import ImgModal from './ImgModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [page, setPage] = useState(1);
  const [nameImage, setNameImage] = useState('');
  const [fetchedImage, setFetchedImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState('');
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (!nameImage) {
      return;
    }
    setLoading(true);
    fetchImage(nameImage, page)
      .then(({ data: { hits, totalHits } }) => {
        setFetchedImage(prev => [...prev, ...hits]);
        setTotal(totalHits);
        if (!hits.length) {
          notify();
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [nameImage, page]);

  const formSubmitHandler = newNameImage => {
    setPage(1);
    setNameImage(newNameImage);
    setFetchedImage([]);
  };
  const loadMore = () => {
    setPage(page => page + 1);
  };
  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const takeLargeImgUrl = newUrl => {
    setLargeImgUrl(newUrl);
  };
  const notify = () => toast('Not Found Image');

  return (
    <>
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery
        fetchedImage={fetchedImage}
        togleModal={togleModal}
        takeLargeImgUrl={takeLargeImgUrl}
      />
      {fetchedImage.length !== 0 && fetchedImage.length < total && (
        <Button loadMore={loadMore} />
      )}
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {showModal && (
        <Modal onClose={togleModal}>
          <ImgModal src={largeImgUrl} alt="" />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
}
