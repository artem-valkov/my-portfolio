import styled from 'styled-components'
import img from '../../images/background.jpg'

const HeaderBackground = styled.section`
  display: flex;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
`;

export default HeaderBackground