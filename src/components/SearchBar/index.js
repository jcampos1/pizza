import React, { useState } from 'react'
import { usePizza } from '../../context/PizzaContext'
import { Form, FormGroup, Input, Label } from 'reactstrap';

const SearchBar = () => {
    const [search, setSearch] = useState(null);
    const { fetchByFilter } = usePizza();

    const onClickSearch = () => {
        console.log('search :>> ', search);
    };

    /**
     * handle search change
     * @param {Object} e event
     */
    export const onSearchChange = e =>
        setSearch(e.target.value)


    return (
        <Form>
            <FormGroup>
                <Input
                    type="text"
                    name="search"
                    id="search-box"
                    placeholder="Puede filtrar por nombre o dirección" />
            </FormGroup>
        </Form>
    )
}

export default SearchBar