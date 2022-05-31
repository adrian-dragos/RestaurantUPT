import React, { useState, useEffect } from 'react'
import { Background, ListContainer, List, Item, ItemImage, ItemInfo, ItemTitle, Checkbox, ItemPrice, AddButton} from '../Admin.style/AddMenu.style'

function AddMenu() {
    const date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth()  + 1).toString();
    if(date.getMonth() + 1 < 10){
        month = "0" + month;
      }
      var day = date.getDate().toString();
      if(date.getDate() < 10){
        day = "0" + day;
      }
    var currentDate = year + "-" + month + "-" + day;
    const [currentDate2, setCurrentDate2] = useState(year + "-" + month + "-" + day);
    const [chosenDate, setChosenDate] = useState("");
    const [meals, setMeals] = useState([]);
    const [idList, setIdList] = useState([]);
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
    const [mealIDs, setMealIds] = useState({
                                            mealId1: false,
                                            mealId2: false,
                                            mealId3: false,
                                            mealId4: false,
                                            mealId5: false,
                                            mealId6: false,
                                            mealId7: false,
                                            mealId8: false,
                                            mealId9: false,
                                            mealId10: false
                                        });

    const meniu = [{image: 'https://vatra.ro/images/ciorba-restaurant-vatra-bucuresti.jpg', name: 'Ciorba', description: 'Ciorba de vita', price: '13'},
                {image: 'https://1.bp.blogspot.com/-xly5gOldT5c/XAapivnk1xI/AAAAAAAA_E8/Q5JUfWBzMY8guxsS4_NrxOqoHwOFIuFjACLcBGAs/s1600/snitel-de-porc-in-aluat.JPG', name: 'Snitel', description: 'Snitel de pui/porc cu garnitura la alegere', price: '25'},
                {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaO4V8bPf9yzfXiaXl5UvTyNvIN0Y40FrvlkZsQnSsFvSt30ASCfw9kos2awqJ3Zsnm0&usqp=CAU', name: 'Cotlet', description: 'Cotlet de porc la gratar cu garnitura la alegere', price: '30'},
                {image: 'https://savoriurbane.com/wp-content/uploads/2018/02/Ostropel-de-pui-reteta-traditionala-savori-urbane.jpg', name: 'Ostropel', description: 'Ostropel de pui cu cartof piure', price: '20'}
                ]
    
    async function fetchMenu(paramDate){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Menu/date'
    
        await fetch(url + "?date=" + paramDate, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(menuItems => {
            setMenu(menuItems);
            console.log(menuItems);
        })
        .catch(error => console.log(error));
        }
                
                
    async function fetchMealsForOldMenu(){
    var j = 0;
    const url = 'https://rgrestaurantapi.azurewebsites.net/api/Meal/';

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

    var i = 0;
    async function fetchMeals(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Meal/'
        for(i = 1; i <= 8; i++){
            await fetch(url + i.toString(), {
                method: 'GET'
              })
              .then(response => response.json())
              .then(meal => {
                setMeals(prevstate => [...prevstate, meal]);
              })
              .catch(error => console.log(error));
        }
    }

    function ChooseMealsToAdd(index){
        switch(index){
            case 0: if(mealIDs.mealId1 === false){
                setMealIds({...mealIDs, mealId1 : true});
            }else{
                setMealIds({...mealIDs, mealId1 : false});
            }
                break;
            case 1: if(mealIDs.mealId2 === false){
                setMealIds({...mealIDs, mealId2 : true});
            }else{
                setMealIds({...mealIDs, mealId2 : false});
            }
                break;
            case 2: if(mealIDs.mealId3 === false){
                setMealIds({...mealIDs, mealId3 : true});
            }else{
                setMealIds({...mealIDs, mealId3 : false});
            }
                break;
            case 3: if(mealIDs.mealId4 === false){
                setMealIds({...mealIDs, mealId4 : true});
            }else{
                setMealIds({...mealIDs, mealId4 : false});
            }
                break;
            case 4: if(mealIDs.mealId5 === false){
                setMealIds({...mealIDs, mealId5 : true});
            }else{
                setMealIds({...mealIDs, mealId5 : false});
            }
                break;
            case 5: if(mealIDs.mealId6 === false){
                setMealIds({...mealIDs, mealId6 : true});
            }else{
                setMealIds({...mealIDs, mealId6 : false});
            }
                break;
            case 6: if(mealIDs.mealId7 === false){
                setMealIds({...mealIDs, mealId7 : true});
            }else{
                setMealIds({...mealIDs, mealId7 : false});
            }
                break;
            case 7: if(mealIDs.mealId8 === false){
                setMealIds({...mealIDs, mealId8 : true});
            }else{
                setMealIds({...mealIDs, mealId8 : false});
            }
                break;
            case 8: if(mealIDs.mealId9 === false){
                setMealIds({...mealIDs, mealId9 : true});
            }else{
                setMealIds({...mealIDs, mealId9 : false});
            }
                break;
            case 9: if(mealIDs.mealId10 === false){
                setMealIds({...mealIDs, mealId10 : true});
            }else{
                setMealIds({...mealIDs, mealId10 : false});
            }
                break;
            default: console.log("SOMETHINGS WROOONG I CAN FEEL IT!");
        }
    }

    async function addMenu(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Menu/date'
    
      await fetch(url + "?date=" + chosenDate, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + (JSON.parse(localStorage.getItem('user')))?.value.token 
        },
        body: JSON.stringify(mealIDs),
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchMeals();
    }, [])

  return (
    <Background>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <h2>Adaugati meniurile dorite!</h2>
        </div>

        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <input style={{marginBottom: '25px', border: '2px solid #01135d', color: '#01135d', fontWeight: 'bold', width: '300px', height: '50px', fontSize: '15px'}} type="date" defaultValue={currentDate} minValue={currentDate} 
                onChange={async e => {
                    setChosenDate((e.target.valueAsDate.getFullYear().toString() + "-" + ((e.target.valueAsDate.getMonth() < 9) ? ("0" + (e.target.valueAsDate.getMonth()+1).toString()) : (e.target.valueAsDate.getMonth()+1).toString()) + "-" + ((e.target.valueAsDate.getDate() < 10) ? ("0" + e.target.valueAsDate.getDate().toString()) : e.target.valueAsDate.getDate().toString()))); 
                    // setMeals([]);
                    // if(chosenDate > currentDate && chosenDate.length !== 0 ){
                    //     await fetchMeals();
                    // }
                    // else if(chosenDate.length !== 0 && chosenDate < currentDate){
                    //     await fetchMenu(chosenDate);
                    //     await fetchMealsForOldMenu();
                    // }else if(chosenDate === currentDate){
                    //     await fetchMenu(chosenDate);
                    //     await fetchMealsForOldMenu();
                    // }
                }}></input>
        </div>    
            <List>
                {meals.map((item, index) => (
                    <Item>
                        <ItemImage src={item.imageData} alt={item.alt} />
                        <ItemInfo style={{ marginTop: '10px' }}>
                            <ItemTitle> <b>Nume: {item.name} </b> </ItemTitle>
                            <ItemPrice> <b>Pret: {item.price} lei</b></ItemPrice>
                        </ItemInfo>
                        <div style={{ height: '100%', width: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '50px', marginBottom: '10px' }}>
                            <Checkbox type="checkbox" onChange={() => { ChooseMealsToAdd(index); }}/>
                            <h4 style={{ fontSize: '12px', marginTop: '30px' }}>Selectati</h4>
                        </div>
                    </Item>
                ))}
            </List>

            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>            
                <AddButton onClick={() => {
                    // 
                    addMenu();
                }}>Adauga</AddButton>
            </div>


    </Background>
    // <input type="checkbox" onChange={(e) => {console.log(e.target.checked)}}></input>
  )
}

export default AddMenu