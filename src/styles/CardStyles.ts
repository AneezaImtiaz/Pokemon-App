import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 6px;
  width: 200px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin: 10px auto; // centered horizontally
  padding: 20px; // padding top and bottom
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const Name = styled.div`
  font-size: 1.2em;
  display: inline-block;
  color: #78c1da;
  font-weight: bold;
  text-transform: uppercase;
`;
