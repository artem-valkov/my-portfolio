import styled from 'styled-components'
import img from '../../images/portfolio-bg.jpg'

const Background = styled.li ` 
  width: 100%
  min-height: 100vh;
  height: 100%;
  display: flex;
  background-image: url(${img}); 
  background-size: cover;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
  padding-top: 70px;

  }
`;

export default Background;
