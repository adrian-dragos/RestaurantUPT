import React, { useState } from 'react'
import {Background, FormContainer, Inputs, Input, Button, MessageInputs, MessageInput} from '../Admin.style/AddMeal.style'
import FileBase from 'react-file-base64'


function AddMeal() {
    const [mealForm, setMealForm] = useState({
        nume: '',
        pret: '',
        descriere: ''
    })
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
                    <MessageInputs>
                        <label>Descriere</label>
                        <MessageInput type="text" required  onChange={e => setMealForm({...mealForm, descriere: e.target.value})}></MessageInput>
                    </MessageInputs>
                    <Inputs style={{display: 'grid'}}>
                        <label style={{marginBottom: '10px'}}>Poza</label>
                        <FileBase type="file" multiple={false}/>
                    </Inputs>
                    <Button>Finalizeaza</Button>
                </form>

        </FormContainer>
    </Background>
  )
}

export default AddMeal