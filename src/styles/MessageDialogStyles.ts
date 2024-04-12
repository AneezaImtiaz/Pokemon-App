import styled from 'styled-components';

export const AlertOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertContent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
`;

export const AlertButtonContainer = styled.div`
  width: 90%;
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  flex-direction: row;
  height: 40px;
`;

export const Button = styled.button`
  height: 100%;
  width: 45%;
  font-size: 1em;
  font-weight: bold;
  background-color: #a0c9d7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
