import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: ${props => props.theme.foregroundColor};
    transition: all 0.5s ease;

    width: ${props => props.show ? '20%' : '5%' };
    min-width: ${props => props.show ? '20%' : '100px' };

    margin: 0 auto;

    height: 100%;
    border-right: 2px solid ${props => props.theme.backgroundColor};

    & * {
        display: ${props => props.show ? 'block' : 'none' };
    }

    @media(max-width: 1200px) {
        & {
            flex-direction: row;
            align-items: center;

            height: auto;
            width: 100%;

            margin-bottom: 30px;
        }
    }

    @media(max-width: 720px) {
        & {
            flex-wrap: wrap;       
        }
    }
`;

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.show ? 'space-between' : 'center' };
    
    width: 100%;
    padding: 15px;

    @media(max-width: 1200px) {
        & {
            flex-direction: row;

            height: auto;
            padding: 10px;
        }
    }

    @media(max-width: 720px) {
        & {
            width: 100%;
            justify-content: center;
        }
    }
`;

export const MenuLabel = styled.h2`
    
`;

export const HideMenu = styled.button`
    padding: 10px 15px;

    background-color: ${props => props.theme.secondaryColor};
    border: none;
    border-radius: 3px;

    display: block;
    transition: all .6s ease;

    
    &:hover {
        cursor: pointer;
    }

    @media(max-width: 1200px) {
        & {
            display: none;
        }
    }
`;

export const MenuList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    
    width: 100%;

    @media(max-width: 1200px) {
        & {
            flex-direction: row;
            justify-content: flex-end;
        }
    }

    @media(max-width: 720px) {
        & {
            width: 100%;
            justify-content: center;
        }
    }
`;

export const MenuListItem = styled.li`

`;

export const MenuListButton = styled.button`
    padding: 15px 30px;
    width: 100%;

    background-color: ${props => props.theme.secondaryColor};
    border: none;

    font-size: 16px;
    font-weight: bold;

    transition: all .3s ease;

    text-align: left;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.darkerSecondaryColor};
    }

    &:focus {
        background-color: ${props => props.theme.darkerSecondaryColor};
        outline: none;
    }

    @media(max-width: 480px) {
        & {
            padding: 10px 15px;
        }
    }
`;