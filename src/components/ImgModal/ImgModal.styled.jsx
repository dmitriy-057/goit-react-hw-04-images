import styled from 'styled-components';

const ImgModal = styled.img`
  width: 100%;
  @media screen and (min-width: 480px) {
    height: 320px;
  }
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
    height: 600px;
  }
  /* width: 100%;
  height: 600px;
  object-fit: cover; */
`;
export default ImgModal;
