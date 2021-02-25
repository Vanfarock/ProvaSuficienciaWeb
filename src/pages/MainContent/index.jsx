import React, { useState } from 'react';
import availableActions from '../../enums/availableActions';
import ActionMenu from '../ActionMenu';
import ListEmployees from '../ListEmployees';
import AddEmployees from '../AddEmployees';
import UpdateEmployees from '../UpdateEmployees';
import DeleteEmployees from '../DeleteEmployees';
import { MainContainer } from './styles';

export default function MainContent() {
    const [action, setAction] = useState(availableActions.LIST);
    
    const updateAction = (newAction) => {
        setAction(newAction);
    }

    return (
        <MainContainer>
            <ActionMenu parentCallback={updateAction} />
            {action === availableActions.ADD && <AddEmployees/>}
            {action === availableActions.DELETE && <DeleteEmployees/>}
            {action === availableActions.LIST && <ListEmployees maxRecords={10}/>}
            {action === availableActions.UPDATE && <UpdateEmployees maxRecords={10}/>}
        </MainContainer>
    );
}