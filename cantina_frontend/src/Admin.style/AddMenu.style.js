import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    alig-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    color: #01135d;
`
export const List = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 700px;
    // position: absolute;
    // top: 250px;
    // left: 300px;
`

export const Item = styled.div`
    border: 2px solid #01135d;
    display: flex;
    border-bottom: 2px solid;
    align-items: center;
    padding-left: 30px;
    width: 500px;
    height: 100px;
    padding-bottom: 10px;
    padding-top: 8px;
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
  width: 200px;
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

export const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin-top: 20px;
`

export const AddButton = styled.button`
    border-radius: 4px;
    background: #01135d;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 410px;
    height: 45px;
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