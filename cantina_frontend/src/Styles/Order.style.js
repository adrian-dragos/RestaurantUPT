import styled from 'styled-components'

export const OrderBackground = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 35px;
`

export const OrderBox = styled.div`
    box-shadow: 0px 3px 15px #01135d;
    color: #01135d;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    width: 800px;
    padding-top: 50px; 
    padding-bottom: 75px; 
`

export const ItemsGrid = styled.div`
    display: grid;
    justify-content: center;
    align-items: space-between;
    width: 700px;
`

export const ItemBox = styled.div`
    display: flex;
    border-bottom: 2px solid;
    margin-bottom: 20px;
    align-items: center;
    width: 650px;
`

export const ItemImage = styled.img`
    height: 80px;
    width: 120px;
    margin-bottom: 15px;
    margin-top: 25px;
    border-radius: 25px;
`

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 400px;
  margin-left: 45px;
`

export const ItemTitle = styled.span`
    font-size: 13px;
`

export const ItemPrice = styled.span`
    font-size: 13px;
`

export const Quantity = styled.span`
    font-size: 13px;
`

export const FinalizeButton = styled.button`
    border-radius: 5px;
    background: #01135d;
    padding: 10px 22px;
    width: 400px;
    height: 50px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 35px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #023e8a;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const Summary = styled.div`
    display: flex;
    alignItems: center;
    justify-content: space-between;
    width: 450px;
`

export const SummaryBox = styled.div`
    border: 2px solid;
    color: #01135d;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 23px;
    width: 650px;
    margin-top: 25px;
`

export const RemoveButton = styled.button`
    border-radius: 4px;
    background: #01135d;
    width: 70px;
    height: 30px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 25px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #023e8a;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const PlusButton = styled.button`
    border-radius: 4px;
    background: #01135d;
    width: 30px;
    height: 30px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 25px;
    margin-top: 25px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #023e8a;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const MinusButton = styled.button`
    border-radius: 4px;
    background: #01135d;
    width: 30px;
    height: 30px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 25px;
    margin-top: 25px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #023e8a;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`