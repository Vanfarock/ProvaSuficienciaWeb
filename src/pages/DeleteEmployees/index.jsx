import React, { useState } from 'react';
import Input from '../../components/Input';
import Caption from '../../components/Caption'
import Notification from '../../components/Notification';
import Button from '../../components/Button';
import { RemoveEmployeeContainer,
         RemoveEmployeeForm } from './styles';

export default function DeleteEmployees() {
    const [message, setMessage] = useState();
    const [employeeId, setEmployeeId] = useState();
    
    const deleteEmployee = e => {
        e.preventDefault();
        setMessage('');

        fetch(`http://dummy.restapiexample.com/api/v1/delete/${employeeId}`)
            .then(res => res.json())
            .then(res => {
                setMessage('Registro excluído com sucesso!');
            })
            .catch(err => {
                setMessage('Aconteceu algum erro ao excluir o registro, tente novamente mais tarde!');
            });
        return false;
    }


    return (
        <RemoveEmployeeContainer>
            <Caption>Deletar funcionários</Caption>
            <RemoveEmployeeForm onSubmit={deleteEmployee}>
                <Notification hidden={!message}>{message}</Notification>
                <Input type="number" min="0" name="employeeId" onChange={e => setEmployeeId(+e.target.value)} label="Id do funcionário" />
                <Button width="50%" text="Deletar" />
            </RemoveEmployeeForm>
        </RemoveEmployeeContainer>
    );
}