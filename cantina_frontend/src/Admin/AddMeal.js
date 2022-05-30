import React, { useState } from 'react'
import {Background, FormContainer, Inputs, Input, Button, MessageInputs, MessageInput} from '../Admin.style/AddMeal.style'
import FileBase from 'react-file-base64'


function AddMeal() {
    const [mealForm, setMealForm] = useState({
        nume: '',
        pret: '',
        poza: ''
    })

    async function addMeal(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Meal'
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(mealForm),
          })
          .then(response => response.json())
          .catch(error => console.log(error));
      }

  return (
    <Background >
        <FormContainer>
                <h2>Adauga o masa noua</h2>

            <form style={{width: '100%'}}>
                    <Inputs>
                        <label>Nume</label>
                        <Input type="text" required  onChange={e => setMealForm({...mealForm, nume: e.target.value})}/>
                    </Inputs>
                    <Inputs>
                        <label>Pret</label>
                        <Input type="text" required  onChange={e => setMealForm({...mealForm, pret: e.target.value})}/>
                    </Inputs>
                    <Inputs style={{display: 'grid'}}>
                        <label style={{marginBottom: '10px'}}>Poza</label>
                        <Input type="text" required  onChange={e => setMealForm({...mealForm, poza: e.target.value})}/>
                    </Inputs>
                    <Button onClick={() => addMeal()}>Finalizeaza</Button>
                </form>

        </FormContainer>
    </Background>
  )
}

export default AddMeal