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
    PlusButton,
    MinusButton,
    } from '../Styles/Order.style'
    import {useNavigate} from 'react-router'

function Order() {

    const navigate = useNavigate();
    const meniu = [{image: 'https://vatra.ro/images/ciorba-restaurant-vatra-bucuresti.jpg', name: 'Ciorba', description: 'Ciorba de vita', price: '13'},
                 {image: 'https://1.bp.blogspot.com/-xly5gOldT5c/XAapivnk1xI/AAAAAAAA_E8/Q5JUfWBzMY8guxsS4_NrxOqoHwOFIuFjACLcBGAs/s1600/snitel-de-porc-in-aluat.JPG', name: 'Snitel', description: 'Snitel de pui/porc cu garnitura la alegere', price: '25'},
                ]
    const [order, setOrder] = useState();
    const [discount, setDiscount] = useState(25);
    var totalPriceAux = order?.reduce((a,c) => a + c.price, 0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    async function fetchCart(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Order/'
    
      await fetch(url + "1" + "/basket", {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + (JSON.parse(localStorage.getItem('user')))?.value.token
        },
        })
        .then(response => response.json())
        .then(orderItems => {
          setOrder(orderItems);
          console.log(orderItems);
        })
        .catch(error => console.log(error));
      }

    async function deleteFromCart(orderId){
        console.log("altcv");
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Order/delete-from-basket'
        await fetch(url + "/" + orderId.toString(), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (JSON.parse(localStorage.getItem('user')))?.value.token,
            },
          })
          .then(response => response.json())
          .catch(error => console.log(error));
    }

    async function UpdateQuantity(item){
        console.log("altcv");
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Order/update-quantity-in-basket'
        await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (JSON.parse(localStorage.getItem('user')))?.value.token,
            },
            body: JSON.stringify(item),
        })
          .then(response => response.json())
          .catch(error => console.log(error));
    }

    async function finalizeOrder(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Order/make-order'
        await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (JSON.parse(localStorage.getItem('user')))?.value.token,
            },
            body: JSON.stringify(order)
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
                            <Quantity> <b>Cantitate: {item.quantity == null ? 1 : item.quantity }  </b></Quantity>
                            <ItemPrice> <b>Pret:   {item.quantity == null ? item.price : item.price*item.quantity } lei</b></ItemPrice>
                        </ItemInfo>
                        <div style={{height: '100%', display: 'flex', alignItems: 'center', marginLeft: '75px', marginBottom: '10px'}}>
                            <MinusButton onClick={async () => {
                                if(item.quantity == null || item.quantity === 1){
                                    await deleteFromCart(item.id);
                                    await fetchCart();
                                    setTotalPrice(totalPrice - item.price);
                                }else{
                                    await UpdateQuantity({id: item.id, mealId: item.mealId, studentId: item.studentId, quantity: item.quantity-1, totalPrice: (item.quantity-1*item.price), dateOfDelivery: "2022-05-27T16:06:49.722Z"});
                                    await fetchCart();
                                    setTotalPrice(totalPrice - item.price);
                                }
                            }}>-</MinusButton>
                        </div>
                        <div style={{height: '100%', display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '10px'}}>
                            <PlusButton onClick={async () => {
                                await UpdateQuantity({id: item.id, mealId: item.mealId, studentId: item.studentId, quantity: (item.quantity == null ? 2 : item.quantity+1), totalPrice: ((item.quantity == null ? 2 : item.quantity+1)*item.price), dateOfDelivery: "2022-05-27T16:06:49.722Z"});
                                await fetchCart();
                                setTotalPrice(totalPrice + item.price);
                            }}>+</PlusButton>
                        </div>
                        
                    </ItemBox>
                    ))}
                    </ItemsGrid>

                    <SummaryBox>
                        <Summary>
                            <h4>Reducere aplicata: {discount}%</h4>
                            {(order?.length === 0 || !localStorage.getItem('user')) && <h4>Total: 0.00 lei</h4>}
                            {(order?.length !== 0 && localStorage.getItem('user')) &&
                                <h4>Total: {totalPrice === 0 || totalPrice < 0 ? (totalPriceAux - totalPriceAux*discount/100).toFixed(2) : (totalPriceAux + (totalPrice - totalPrice*discount/100)).toFixed(2)} lei</h4> 
                            }
                            </Summary>                   
                    </SummaryBox>

                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <FinalizeButton onClick={async () => {
                            if(!localStorage.getItem('user')){ 
                                navigate("/login")
                            }else{
                                await finalizeOrder();
                                await fetchCart();
                            }
                            }}>Finalieaza comanda!</FinalizeButton>
                    </div>
            </OrderBox>
        </OrderBackground>
                );
}

export default Order