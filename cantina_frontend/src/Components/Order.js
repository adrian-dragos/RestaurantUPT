import React, { useState, useEffect } from 'react'
import {
    OrderBackground, 
    OrderBox,
    ItemsGrid,
    ItemBox,
    ItemImage,
    RemoveButton,
    ItemInfo,
    ItemTitle,
    ItemPrice,
    Quantity,
    FinalizeButton,
    Summary,
    SummaryBox,
    } from '../Styles/Order.style'

function Order() {

    const meniu = [{image: 'https://vatra.ro/images/ciorba-restaurant-vatra-bucuresti.jpg', name: 'Ciorba', description: 'Ciorba de vita', price: '13'},
                 {image: 'https://1.bp.blogspot.com/-xly5gOldT5c/XAapivnk1xI/AAAAAAAA_E8/Q5JUfWBzMY8guxsS4_NrxOqoHwOFIuFjACLcBGAs/s1600/snitel-de-porc-in-aluat.JPG', name: 'Snitel', description: 'Snitel de pui/porc cu garnitura la alegere', price: '25'},
                ]
    const [order, setOrder] = useState();
    const [discount, setDiscount] = useState(25);
    var totalPrice = order?.reduce((a,c) => a+c.price,0);

    async function fetchCart(){
        const url = 'https://localhost:44368/api/Order/'
    
      await fetch(url + "1" + "/basket", {
          method: 'GET'
        })
        .then(response => response.json())
        .then(orderItems => {
          setOrder(orderItems);
        })
        .catch(error => console.log(error));
      }

    async function deleteFromCart(mealId){
        const url = 'https://localhost:44368/api/Order/delete-from-basket'
        await fetch(url + "/" + mealId.toString(), {
            method: 'DELETE',
          })
          .then(response => response.json())
          .catch(error => console.log(error));
    }

      useEffect(() => {
        fetchCart();
      }, [])

    return (
        <OrderBackground>
            <OrderBox>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <h2>Comanda ta</h2>
                </div>
                    <ItemsGrid>
                    {order?.map((item) => (
                    <ItemBox>
                        {/* <ItemImage src={item.image} alt={item.alt}/> */}
                        <ItemInfo style={{marginTop: '10px'}}> 
                            <ItemTitle> <b>Nume: {item.name} </b> </ItemTitle>
                            <Quantity> <b>Cantitate:   {item.quantity == null ? 1 : item.quantity}</b></Quantity>
                            <ItemPrice> <b>Pret:   {item.price} lei</b></ItemPrice>
                        </ItemInfo>
                        <div style={{height: '100%', display: 'flex', alignItems: 'center', marginLeft: '50px', marginBottom: '10px', marginRight: '25px'}}>
                            <RemoveButton onClick={() => {deleteFromCart(item.mealId)}}>Sterge!</RemoveButton>
                        </div>
                    </ItemBox>
                    ))}
                    </ItemsGrid>

                    <SummaryBox>
                        <Summary>
                            <h4>Reducere aplicata: {discount}%</h4>
                            <h4>Total: {(totalPrice - totalPrice*discount/100).toFixed(2)} lei</h4> 
                        </Summary>                   
                    </SummaryBox>

                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <FinalizeButton>Finalieaza comanda!</FinalizeButton>
                    </div>
            </OrderBox>
        </OrderBackground>
                );
}

export default Order