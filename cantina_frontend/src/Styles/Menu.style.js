import styled from 'styled-components';

export const MenuContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1800px) / 2);
  padding-top: 0;
  background: #fff;
  color: #01135d;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MenuHeading = styled.h1`
  margin-top: -80px;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
`;

export const MenuCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  align-items: center;
  border-radius: 15px;
  width: 240px;
  margin: 20px;
  box-shadow: 0px 3px 15px #01135d;
  color: #01135d;
  display: grid;
  justify-content: center;
  align-items: center;
  padding-left: 35px;
  padding-right: 25px;
`;

export const MenuImg = styled.img`
  height: 160px;
  width: 200px;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: -5px;
  box-shadow: 8px 8px #01135d;
`;

export const MenuInfo = styled.div`
  text-align: center;
  padding-bottom: -25px;
`;

export const MenuTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: -20px;
  text-align: left;
`;

export const MenuDesc = styled.p`
  margin-bottom: -15px;
  text-align: left;
  line-height: 1.3;
`

export const MenuPrice = styled.p`
  font-weight: 700;
  text-align: left;
  margin-bottom: -15px;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 2rem;
`

export const MenuButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #01135d;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 4px;
  outline: none;
  cursor: pointer;    
  text-decoration: none;
  
  &:hover {
    background: #023e8a;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`