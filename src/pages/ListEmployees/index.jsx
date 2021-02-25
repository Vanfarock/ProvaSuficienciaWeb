import React, { useState, useEffect } from 'react';
import Caption from '../../components/Caption'
import { ListContainer,
         Grid,
         GridBody,
         GridHead,
         GridRow,
         GridHeader,
         GridValue,
         PaginationContainer,
         SetPageButton }from './styles';

export default function ListEmployees(props) {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    const defaultMaxRecords = 10;

    const getDataFromLocalStorage = () => {
        let savedEmployees = JSON.parse(localStorage.getItem('employees'));
        if (!savedEmployees) {
            savedEmployees = [];
            localStorage.setItem('employees', JSON.stringify(savedEmployees));
        }
        setEmployees(savedEmployees);
    }

    useEffect(() => {
        getDataFromLocalStorage();

        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => res.json())
            .then(res => {
                setEmployees(res.data);
                localStorage.setItem('employees', JSON.stringify(res.data));
            })
            .catch(() => {
                getDataFromLocalStorage();
            });
        return () => {
            setEmployees([]);
        }
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(employees.length / props.maxRecords || defaultMaxRecords));
        setCurrentPage(1);
    }, [employees, props.maxRecords]);

    const createPagesButton = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(<SetPageButton active={currentPage === i} key={`page_button_${i}`} onClick={() => setCurrentPage(i)}>{i}</SetPageButton>);
        }
        return pages;
    }

    return (
        <ListContainer>
            <Caption>Listagem de funcionários</Caption>
            <Grid>
                <GridHead>
                    <GridRow>
                        <GridHeader flex="3">Nome</GridHeader>
                        <GridHeader flex="1">Salário</GridHeader>
                        <GridHeader flex="1">Idade</GridHeader>
                    </GridRow>
                </GridHead>
                <GridBody>
                    { currentPage && employees && 
                      employees.slice(props.maxRecords * (currentPage - 1), props.maxRecords * currentPage).map(emp => {
                        return (
                            <GridRow key={`row_emp_${emp.id}`}>
                                <GridValue key={`name_emp_${emp.id}`} flex="3">{emp.employee_name}</GridValue>
                                <GridValue key={`salary_emp_${emp.id}`} flex="1">{emp.employee_salary}</GridValue>
                                <GridValue key={`age_emp_${emp.id}`} flex="1">{emp.employee_age}</GridValue>
                            </GridRow>
                        );
                    })}
                </GridBody>
            </Grid>
            <PaginationContainer>
                { createPagesButton() }
            </PaginationContainer>
        </ListContainer>
    );
}