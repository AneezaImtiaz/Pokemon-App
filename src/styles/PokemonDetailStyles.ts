import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin: 20px;
`;

export const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const StatChartContainer = styled.div`
  width: 100%; // Full width by default for mobile
  
  // Media query for tablets and above
  @media (min-width: 768px) {
    max-width: 500px; // Fixed max-width for larger screens
`;

export const PokemonSprite = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 10px;
`;
