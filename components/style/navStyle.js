import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: white;
  height:200px;
`;

export const Main1 = styled.div`
  display: grid;
  /* grid-template-columns: 68% 15% 10% 9%;
*/
  grid-template-columns: 4fr repeat(3, 0.5fr);
  grid-gap: 16px;
`;
export const Part1 = styled.div`
  height: 100px;
  width: 300px;
  padding-left: 110px;
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 110px;
  display: flex;
  text-transform: uppercase;
  color: #363b97;
`;

export const Part2 = styled.div`
  height: 100px;
  line-height: 110px;
`;

export const Part3 = styled.div`
  height: 100px;
  line-height: 110px;
`;

export const Button = styled.button`
  width: 268px;
  height: 48px;
  color: rgba(255, 255, 255, 1);
  background: #363b97;
  border-radius: 8px;
  align-items: center;
`;
export const Button2 = styled.button`
  width: 187px;
  height: 48px;
  background: white;
  border-radius: 8px;
  align-items: center;
`;
export const Part4 = styled.div`
  height: 100px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #363b97;
  padding-top: 15px;
  line-height: 87px;
`;
