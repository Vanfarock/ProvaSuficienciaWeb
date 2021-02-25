import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    
    background-color: ${props => props.theme.foregroundColor};

    height: 100%;
    margin: 0 auto;

    @media(max-width: 1200px) {
        & {
            width: 100%
        }
    }
`;

export const Grid = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    flex: 1;
    overflow: auto;
`;

export const GridHead = styled.thead`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const GridBody = styled.tbody`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const GridRow = styled.tr`
    display: flex;
    flex-direction: row;

    background-color: ${props => props.theme.foregroundColor};

    width: 100%;

    &:nth-child(even) {
        background-color: ${props => props.theme.lightBackgroundColor};
    }
`;

export const GridHeader = styled.th`
    flex: ${props => props.flex};

    padding: 20px 0;
    
    background-color: ${props => props.theme.secondaryColor};
    border-top: 2px solid ${props => props.theme.foregroundColor};
    border-right: 2px solid ${props => props.theme.foregroundColor};

    text-align: left;
    padding-left: 10px;

    &:last-of-type {
        border-right: none;
    }
`;

export const GridValue = styled.td`
    padding: 15px 0;
    padding-left: 10px;

    flex: ${props => props.flex};
`;

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 10px 0;

    width: 100%;
`;

export const SetPageButton = styled.button`
    background-color: ${props => props.active ? props.theme.primaryColor
                                              : props.theme.secondaryColor};
    border: none;
    border-radius: 5px;
    
    font-size: 16px;

    padding: 5px 10px;
    margin: 0 5px;

    &:hover {
        cursor: pointer;
    }
`;