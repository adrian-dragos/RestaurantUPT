import React, { useState } from 'react'
import { Background, ListContainer, List, Item, ItemImage, ItemInfo, ItemTitle, Checkbox, ItemPrice, AddButton} from '../Admin.style/AddMenu.style'

function AddMenu() {

    const meniu = [{image: 'https://vatra.ro/images/ciorba-restaurant-vatra-bucuresti.jpg', name: 'Ciorba', description: 'Ciorba de vita', price: '13'},
                {image: 'https://1.bp.blogspot.com/-xly5gOldT5c/XAapivnk1xI/AAAAAAAA_E8/Q5JUfWBzMY8guxsS4_NrxOqoHwOFIuFjACLcBGAs/s1600/snitel-de-porc-in-aluat.JPG', name: 'Snitel', description: 'Snitel de pui/porc cu garnitura la alegere', price: '25'},
                {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaO4V8bPf9yzfXiaXl5UvTyNvIN0Y40FrvlkZsQnSsFvSt30ASCfw9kos2awqJ3Zsnm0&usqp=CAU', name: 'Cotlet', description: 'Cotlet de porc la gratar cu garnitura la alegere', price: '30'},
                {image: 'https://savoriurbane.com/wp-content/uploads/2018/02/Ostropel-de-pui-reteta-traditionala-savori-urbane.jpg', name: 'Ostropel', description: 'Ostropel de pui cu cartof piure', price: '20'}
                ]

  return (
    <Background>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <h2>Adaugati meniurile dorite!</h2>
        </div>
            <List>
                {meniu.map((item) => (
                    <><Item>
                        <ItemImage src={item.image} alt={item.alt} />
                        <ItemInfo style={{ marginTop: '10px' }}>
                            <ItemTitle> <b>Nume:{item.name} </b> </ItemTitle>
                            <ItemPrice> <b>Pret: {item.price} lei</b></ItemPrice>
                        </ItemInfo>
                        <div style={{ height: '100%', width: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '50px', marginBottom: '10px', marginRight: '25px' }}>
                            <Checkbox type="checkbox" />
                            <h4 style={{ fontSize: '12px', marginTop: '30px' }}>Selectati</h4>
                        </div>
                    </Item>
                    <Item>
                            <ItemImage src={item.image} alt={item.alt} />
                            <ItemInfo style={{ marginTop: '10px' }}>
                                <ItemTitle> <b>Nume:{item.name} </b> </ItemTitle>
                                <ItemPrice> <b>Pret: {item.price} lei</b></ItemPrice>
                            </ItemInfo>
                            <div style={{ height: '100%', width: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '50px', marginBottom: '10px', marginRight: '25px' }}>
                                <Checkbox type="checkbox" />
                                <h4 style={{ fontSize: '12px', marginTop: '30px' }}>Selectati</h4>
                            </div>
                        </Item>
                        {/* <Item>
                            <ItemImage src={item.image} alt={item.alt} />
                            <ItemInfo style={{ marginTop: '10px' }}>
                                <ItemTitle> <b>Nume:{item.name} </b> </ItemTitle>
                                <ItemPrice> <b>Pret: {item.price} lei</b></ItemPrice>
                            </ItemInfo>
                            <div style={{ height: '100%', width: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '50px', marginBottom: '10px', marginRight: '25px' }}>
                                <Checkbox type="checkbox" />
                                <h4 style={{ fontSize: '12px', marginTop: '30px' }}>Selectati</h4>
                            </div>
                        </Item> */}
                        </>
                ))}
            </List>

            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>            
                <AddButton>Adauga</AddButton>                
            </div>


    </Background>
    // <input type="checkbox" onChange={(e) => {console.log(e.target.checked)}}></input>
  )
}

export default AddMenu