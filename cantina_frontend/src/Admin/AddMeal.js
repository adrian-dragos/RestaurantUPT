import React, { useState } from 'react'
import {Background, FormContainer, Inputs, Input, Button, MessageInputs, MessageInput} from '../Admin.style/AddMeal.style'
import FileBase from 'react-file-base64'


function AddMeal() {
    const [mealForm, setMealForm] = useState({
        name: '',
        price: '',
        imageData: ''
    })

    async function addMeal(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Meal'
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (JSON.parse(localStorage.getItem('user')))?.value.token 
            },
            body: JSON.stringify(mealForm),
          })
          .then(response => response.json())
          .catch(error => console.log(error));
      }

  return (
    <Background >
        <FormContainer>
                <h2>Adauga o masa noua</h2>
                    <Inputs>
                        <label>Nume</label>
                        <Input type="text" required  onChange={e => setMealForm({...mealForm, name: e.target.value})}/>
                    </Inputs>
                    <Inputs>
                        <label>Pret</label>
                        <Input type="text" required  onChange={e => setMealForm({...mealForm, price: e.target.value})}/>
                    </Inputs>
                    <Inputs style={{display: 'grid'}}>
                        <label style={{marginBottom: '10px'}}>Poza</label>
                        <Input type="text" required  onChange={e => setMealForm({...mealForm, imageData: e.target.value})}/>
                    </Inputs>
                    <Button onClick={async () => await addMeal()}>Finalizeaza</Button>
        </FormContainer>
    </Background>
  )
}

export default AddMeal