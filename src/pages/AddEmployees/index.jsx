import React, { useState } from 'react';
import Input from '../../components/Input';
import Caption from '../../components/Caption'
import Notification from '../../components/Notification';
import Button from '../../components/Button';
import { AddEmployeeContainer,
         AddEmployeeForm } from './styles';

export default function AddEmployees() {
    const [message, setMessage] = useState();
    const [name, setName] = useState();
    const [salary, setSalary] = useState(0);
    const [age, setAge] = useState(0);

    const addEmployee = e => {
        e.preventDefault();
        fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "salary": salary,
                "age": age
            })
        })
        .then(res => res.json())
        .then(res => {
            setMessage('Registro criado com sucesso!');
        })
        .catch(err => {
            setMessage('Aconteceu algum erro ao criar o registro, tente novamente mais tarde!');
        });
        return false;
    }

    return (
        <AddEmployeeContainer>
            <Caption>Inserir funcionários</Caption>
            <AddEmployeeForm onSubmit={addEmployee}>
                <Notification hidden={!message}>{message}</Notification>
                <Input type="text" name="name" label="Nome" onChange={e => setName(e.target.value)} />
                <Input type="number" step="0.01" min="0" name="salary" label="Salário" onChange={e => setSalary(+e.target.value)} />
                <Input type="number" min="0" name="age" label="Idade" onChange={e => setAge(+e.target.value)} />
                <Button type="submit" width="50%" text="Inserir" />
            </AddEmployeeForm>
        </AddEmployeeContainer>
    );
}