import styled from 'styled-components'


const Case = styled.div `
  text-decoration: none;
  text-align: center;
  background-color: #ffffff;  
  text-align: center;
  list-style-type: none;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  margin: 10px;
  opacity: 0.7;
  flex-wrap: wrap;
  -webkit-box-shadow: 2px 6px 23px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 6px 23px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 6px 23px 0px rgba(0,0,0,0.75);;
  &hover: {
   background-color: #fff;
   }
   a {
   text-decoration: none;
   color: black;
   }
`;

export default Case;
