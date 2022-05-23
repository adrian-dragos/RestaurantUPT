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
  
  const [meals, setMeals] = useState([]);
  const [idList, setIdList] = useState([]);
  const [toCart, setToCart] = useState({mealId: 0, studentId: 0});
  const [menu, setMenu] = useState({
    day: "",
    mealId1: false,
    mealId2: false,
    mealId3: false,
    mealId4: false,
    mealId5: false,
    mealId6: false,
    mealId7: false,
    mealId8: false,
    mealId9: false,
    mealId10: false,
    id: 0
  });
  var date = new Date();
  var year = date.getFullYear().toString;
  var month = (date.getMonth() + 1).toString();
  if(date.getMonth() + 1 < 10){
    month = "0" + month;
  }
  var day = date.getDate().toString();
  if(date.getDate() < 10){
    day = "0" + day;
  }
  var currentDate = year + "-" + month + "-" + day;

  useEffect(() => {
    fetchMenu();
    fetchMeals();
  }, [menu.id])

  async function fetchMenu(){
    const url = 'https://localhost:44368/api/Menu/date'

  await fetch(url + "?date=" + "2022-05-19", {
      method: 'GET'
    })
    .then(response => response.json())
    .then(menuItems => {
      setMenu(menuItems);
      console.log(menuItems);
    })
    .catch(error => console.log(error));
  }

  async function addToCart(){
    const url = 'https://localhost:44368/api/Order/add-to-basket'
    await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(toCart),
      })
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  // function addToCart(index){
  //   console.log(idList[index]);
  // }

  async function fetchMeals(){
    var j = 0;
    const url = 'https://localhost:44368/api/Meal/';

    for(j = 0; j < 9; j++){
      switch(j){
        case 0: 
        if(menu.mealId1 == true){
        await fetch(url +"1", {
            method: 'GET'
          })
          .then(response => response.json())
          .then(meal => {
              setMeals(prevState => [...prevState, meal]);
              setIdList(prevState => [...prevState, 1]);
          })
          .catch(error => console.log(error));
        }
        break;
        case 1:
          if(menu.mealId2 == true){
            await fetch(url + "2", {
              method: 'GET'
            })
            .then(response => response.json())
            .then(meal => {
              setMeals(prevState => [...prevState, meal]);
              setIdList(prevState => [...prevState, 2]);
            })
            .catch(error => console.log(error));
          }
          break;
          case 2:
            if(menu.mealId3 == true){
              await fetch(url + "3", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 3]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 3:
            if(menu.mealId4 == true){
              await fetch(url + "4", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 4]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 4:
            if(menu.mealId5 == true){
              await fetch(url + "5", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 5]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 5:
            if(menu.mealId6 == true){
              await fetch(url + "6", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 6]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 6:
            if(menu.mealId7 == true){
              await fetch(url + "7", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 7]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 7:
            if(menu.mealId8 == true){
              await fetch(url + "8", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 8]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 8:
            if(menu.mealId9 == true){
              await fetch(url + "9", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 9]);
              })
              .catch(error => console.log(error));
            }
            break;
          case 9:
            if(menu.mealId10 == true){
              await fetch(url + "10", {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevState => [...prevState, meal]);
                setIdList(prevState => [...prevState, 10]);
              })
              .catch(error => console.log(error));
            }
            break;
            default: break;
      }
    }
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
          {meals?.map((mancare, index) => (
            <MenuCard>
                <MenuImg src={mancare.imageData}/>
                <MenuInfo>
                  <MenuTitle>{mancare.name}</MenuTitle>
                  {/* <MenuDesc>{mancare.id}</MenuDesc> */}
                  <MenuPrice>Pret: {mancare.price} lei</MenuPrice>
                </MenuInfo>
                <ButtonBox>
                  <MenuButton onMouseOver={() => { setToCart({mealId: idList[index], studentId: 1});}} 
                    onClick={() => {addToCart();}}>Comanda
                  </MenuButton>
                </ButtonBox>
            </MenuCard>
          ))}   
        </MenuWrapper>
      </MenuContainer>
    )
}

export default Menu