import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.2em;
`;

export const Description = styled.p`
color: #333;
font-size: 18px;
font-size: 1em;
`;
