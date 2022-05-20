import React, { useEffect, useState } from 'react'
import {MenuContainer, 
       MenuHeading, 
       MenuWrapper,
       MenuPrice, 
       MenuCard, 
       MenuImg, 
       MenuInfo, 
       MenuTitle, 
       MenuDesc, 
       ButtonBox, 
       MenuButton,
      } from '../Styles/Menu.style'

function Menu(){
  
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    fetchMenu();
  }, [])

  function fetchMenu(){
    const url = 'https://localhost:44368/api/Menu'

    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(menuItems => {
      setMenu(menuItems);
      console.log(menuItems);
    })
    .catch(error => console.log(error));
  }

  function AddToOrder(menuItem){
    const url = 'https://localhost:44368/api/Menu'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(menuItem)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
  }

  const meniu = [{image: 'https://vatra.ro/images/ciorba-restaurant-vatra-bucuresti.jpg', name: 'Ciorba', description: 'Ciorba de vita', price: '13'},
                 {image: 'https://1.bp.blogspot.com/-xly5gOldT5c/XAapivnk1xI/AAAAAAAA_E8/Q5JUfWBzMY8guxsS4_NrxOqoHwOFIuFjACLcBGAs/s1600/snitel-de-porc-in-aluat.JPG', name: 'Snitel', description: 'Snitel de pui/porc cu garnitura la alegere', price: '25'},
                 {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaO4V8bPf9yzfXiaXl5UvTyNvIN0Y40FrvlkZsQnSsFvSt30ASCfw9kos2awqJ3Zsnm0&usqp=CAU', name: 'Cotlet', description: 'Cotlet de porc la gratar cu garnitura la alegere', price: '30'},
                 {image: 'https://savoriurbane.com/wp-content/uploads/2018/02/Ostropel-de-pui-reteta-traditionala-savori-urbane.jpg', name: 'Ostropel', description: 'Ostropel de pui cu cartof piure', price: '20'}
                ]
    return (
      <MenuContainer>
        <MenuHeading>Meniu</MenuHeading>
        <MenuWrapper>
          {meniu.map((mancare) => (
            <MenuCard>
                <MenuImg src={mancare.image}/>
                <MenuInfo>
                  <MenuTitle>{mancare.name}</MenuTitle>
                  <MenuDesc>{mancare.description}</MenuDesc>
                  <MenuPrice>Pret: {mancare.price} lei</MenuPrice>
                </MenuInfo>
                <ButtonBox>
                  <MenuButton onClick={AddToOrder(mancare)}>Comanda</MenuButton>
                </ButtonBox>
            </MenuCard>
          ))}   
        </MenuWrapper>
      </MenuContainer>
    )
}

export default Menu