import styled from "styled-components";

export const Container = styled.div`
  height: 110px;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top:0;
  transition: .3s;


  img{ 
      width: 300px;
      height: 100px;
      object-fit: contain;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  button {
    background-color: transparent;
    font-size: 20px;
    padding: 15px 35px;
    margin: 5px;
    border-radius: 50px;
    border:none;
    transition: ease-in-out 280ms;
    cursor:pointer;

    &:hover {
      background-color: ${props => props.theme.colors.primary}
    }
  }
`;
