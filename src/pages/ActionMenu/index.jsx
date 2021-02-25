import React, { useState, useEffect } from 'react';
import availableActions from '../../enums/availableActions';
import { MenuContainer,
         MenuHeader,
         MenuLabel,
         HideMenu,
         MenuList,
         MenuListItem,
         MenuListButton } from './styles';

export default function ActionMenu(props) {
    const [show, setShow] = useState(true);
    const [action, setAction] = useState(availableActions.LIST);

    useEffect(() => {
        props.parentCallback(action)
    }, [props, action]);

    return (
        <MenuContainer show={show}>
            <MenuHeader show={show}>
                <MenuLabel>Lista de ações</MenuLabel>
                <HideMenu onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</HideMenu>
            </MenuHeader>
            <MenuList>
                <MenuListItem>
                    <MenuListButton onClick={() => setAction(availableActions.LIST)}>Listar</MenuListButton>
                </MenuListItem>
                <MenuListItem>
                    <MenuListButton onClick={() => setAction(availableActions.ADD)}>Inserir</MenuListButton>
                </MenuListItem>
                <MenuListItem>
                    <MenuListButton onClick={() => setAction(availableActions.UPDATE)}>Atualizar</MenuListButton>
                </MenuListItem>
                <MenuListItem>
                    <MenuListButton onClick={() => setAction(availableActions.DELETE)}>Excluir</MenuListButton>
                </MenuListItem>
            </MenuList>
        </MenuContainer>
    );
}